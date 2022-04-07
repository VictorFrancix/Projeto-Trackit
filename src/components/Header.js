import { useContext } from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

import UserContext from "./../assets/Context";
import trackit from "./../assets/midias/TrackIt.png";

function Header() {
  let { visibility, usuario, setUsuario } = useContext(UserContext);
  const navigate = useNavigate();
  
  if(localStorage.getItem("user") !== null){
    user = JSON.parse(localStorage.getItem("user"));
  } 
  
  const image = usuario !== null ? usuario.image : "";

  function Logout(){
    localStorage.removeItem("user");
    setUsuario({
      email: "",
      password: "",
      connected: false,
    })
    navigate("/");
  }

  return visibility ? (
    <Div>
      <img src={trackit} alt="TrackIt" />
      <div>
        <p> Olá, {user.name} </p>
        <button onClick={Logout}>Sair</button>
        <img className = "perfil" src={image} alt="imagem" />

      </div>
    </Div>
  ) : (
    <></>
  );
}

const Div = styled.header`
  background-color: var(--dark-blue);
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  img:first-child {
    width: 97px;
  }
  .perfil{
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
  }
  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 130px;
  }
  button{
    width: fit-content;
    background-color: transparent;
    border: none;
    color: #FFFFFF;
    font-size: 22px;
  }
`;

export default Header;
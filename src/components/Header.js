import { useContext } from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

import UserContext from "./../assets/Context";
import trackit from "./../assets/images/TrackIt.png";

function Header() {
  let { visivel, usuario, setUsuario } = useContext(UserContext);
  const navigate = useNavigate();
  
  if(localStorage.getItem("usuario") !== null){
    usuario = JSON.parse(localStorage.getItem("usuario"));
  } 
  
  const image = usuario !== null ? usuario.image : "";

  function Logout(){
    localStorage.removeItem("usuario");
    setUsuario({
      email: "",
      password: "",
      connected: false,
    })
    navigate("/");
  }

  return visivel ? (
    <Div>
      <img src={trackit} alt="TrackIt" />
      <div>
        <p> Olá, {usuario.name} </p>
        <img className = "perfil" src={image} alt="imagem" onClick={Logout} />

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
    margin-left: 20px;
  }
  .perfil:hover{
    cursor: pointer;
    width: 60px;
    height: 60px;
  }
  
  div{
    display: flex;
    align-items: center;

  }
  button{
    width: fit-content;
    background-color: transparent;
    border: none;
    color: #FFFFFF;
    font-size: 22px;
    margin-left: 20px;
  }
  p{
      font-family: "Lexend Deca", sans-serif;
      color: #FFFFFF;
      margin-left: 40px;
      font-size: 22px;
  }
`;

export default Header;
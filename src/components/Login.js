import axios from "axios";
import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import usuarioContext from "./../assets/Context";
import logo from "./../assets/images/logo.png";

function Login() {
  const { setVisibility, usuario, setUsuario } = useContext(usuarioContext);
  const [login, setLogin] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  setVisibility(false);

  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

  useEffect(() => {
    if (Object.keys(login).length !== 0 && login.connected === true) {
      localStorage.setItem("Usuario", JSON.stringify(login));
    }
  }, [login]);

  function requestLogin({ email, password, connected }) {
    setLoading(true);
    const loginData = {
      email,
      password,
    };
    const promise = axios.post(URL, loginData);
    promise.then((response) => {
      setLogin({ ...response.data, connected });
      setUsuario({ ...response.data });
      navigate("/hoje");
    });
    promise.catch((err) => {
      alert("Email ou senha incorretos");
      console.log(`${err.response.status} - ${err.response.statusText}`);
      setLoading(false);
    });
  }

  function sendInputData(e) {
    e.preventDefault();
    requestLogin(usuario);
  }

  return (
    <Div>
      <img src={logo} alt="Logo" />
      <form onSubmit={(e) => sendInputData(e)}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
          value={usuario.email}
          disabled={loading}
          required
        />
        <input
          type="password"
          placeholder="senha"
          onChange={(e) => setUsuario({ ...usuario, password: e.target.value })}
          value={usuario.password}
          disabled={loading}
          required
        />
        <button disabled={loading} type="submit">
          {loading ? <ThreeDots color="#FFFFFF" width={65}/> :  "Entrar"}
        </button>
      </form>
      <Link to="/cadastro">
        <span>Não tem uma conta? Cadastre-se</span>
      </Link>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  img {
    width: 180px;
  }
  form > div {
    display: flex;
    align-items: center;
    width: 100%;
  }
  #keepConnected {
    width: 18px;
    margin-right: 15px;
  }
  form label {
    font-family: "Lexend Deca", sans-serif;
    color: var(--gray);
  }
  span {
    color: var(--light-blue);
    font-size: 14px;
    line-height: 17px;
    text-decoration-color: var(--light-blue);
  }
  a:visited {
    text-decoration-color: var(--light-blue);
  }
`;

export default Login;
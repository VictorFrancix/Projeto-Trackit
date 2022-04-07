import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import logo from "./../assets/images/logo.png";

export default function SignUp() {
    const [register, setRegister] = useState({
      email: "",
      password: "",
      name: "",
      image: "",
    });
    const [loading, setLoading] = useState(false);
    const directTo = useNavigate();
  
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
  
    function sendSignUp(e) {
      e.preventDefault();
      setLoading(true);
      const promise = axios.post(URL, register);
      promise.then(() => {
        directTo("/");
      });
      promise.catch((err) => {
        console.log(`${err.response.status} - ${err.response.statusText}`);
        alert("Erro no cadastro");
        setLoading(false);
      });
    }
  
    return (
      <Div>
        <img src={logo} alt="Logo" />
        <form onSubmit={(e) => sendSignUp(e)}>
          <input
            disabled={loading}
            type="email"
            placeholder="email"
            onChange={(e) =>
              setRegister({ ...register, email: e.target.value })
            }
            value={register.email}
            required
          />
          <input
            disabled={loading}
            type="password"
            placeholder="senha"
            onChange={(e) =>
              setRegister({ ...register, password: e.target.value })
            }
            value={register.password}
            required
          />
          <input
            disabled={loading}
            type="text"
            placeholder="nome"
            onChange={(e) =>
              setRegister({ ...register, name: e.target.value })
            }
            value={register.name}
            required
          />
          <input
            disabled={loading}
            type="url"
            placeholder="foto"
            onChange={(e) =>
              setRegister({ ...register, image: e.target.value })
            }
            value={register.image}
            required
          />
          <button disabled={loading} type="submit">
            {loading ? <ThreeDots color="#FFFFFF" width={60} />  : "Cadastrar"}
          </button>
        </form>
        <Link to="/">
          <p>Já tem uma conta? Faça login</p>
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
    p {
      color: var(--light-blue);
      font-size: 14px;
      line-height: 17px;
      text-decoration-color: var(--light-blue);
    }
    a:visited {
      text-decoration-color: var(--light-blue);
    }
  `;
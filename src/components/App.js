import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./Login";
import SignUp from "./SignUp";
import Today from "./Home";
import Menu from "./Menu.js";
import Header from "./Header";
import Habits from "./Habits";
import GlobalStyle from "./../assets/globalStyle/";
import UserContext from "./../assets/Context";

function App() {
  const [visibility, setVisibility] = useState(false);
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
    connected: false,
  });
  const weekdays = [
    {
      id: 0,
      name: "D",
    },
    {
      id: 1,
      name: "S",
    },
    {
      id: 2,
      name: "T",
    },
    {
      id: 3,
      name: "Q",
    },
    {
      id: 4,
      name: "Q",
    },
    {
      id: 5,
      name: "S",
    },
    {
      id: 6,
      name: "S",
    },
  ];
  const [progress, setProgress] = useState(0);
  const [logout, setLogout] = useState(false);


  function requestError(err, navigate) {
    console.log(`${err.response.status} - ${err.response.statusText}`);
    alert("Um erro aconteceu, tente novamente");
    navigate("/");
  }

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider
        value={{
          visibility,
          setVisibility,
          usuario,
          setUsuario,
          requestError,
          progress,
          setProgress,
          logout,
        setLogout,
        weekdays
      }}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path ="/cadastro" element ={<SignUp />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/habitos" element={<Habits />} />
          </Routes>
          <Menu />
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;

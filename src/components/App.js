import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./Login";
import SignUp from "./SignUp";
import GlobalStyle from "./../assets/globalStyle/";
import UserContext from "./../assets/Context";

function App() {
  const [visibility, setVisibility] = useState(false);
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
    connected: false,
  });
  const [progress, setProgress] = useState(0);


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
          setProgress
        }}
      >
        <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path ="/cadastro" element ={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;

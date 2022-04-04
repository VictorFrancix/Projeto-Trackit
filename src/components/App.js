import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./Login";
import GlobalStyle from "./../assets/globalStyle/";
import UserContext from "./../assets/Context";

function App() {
  const [visibility, setVisibility] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    connected: false,
  });


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
          user,
          setUser,
          requestError,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;

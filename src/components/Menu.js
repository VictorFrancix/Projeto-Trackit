import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import UserContext from "../assets/Context";

function Menu() {
  const { visivel, progress } = useContext(UserContext);

  return visivel ? (
    <Footer>
      <Link to="/habitos">Hábitos</Link>
      <Link to="/hoje" className="hoje">
        <CircularProgressbar
          value={progress}
          text={"Hoje"}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "var(--light-blue)",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent",
          })}
        />
      </Link>
      <Link to="historico">Histórico</Link>
    </Footer>
  ) : (
    <></>
  );
}

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
  z-index: 2;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.15);
  a {
    color: var(--dark-blue);
    text-decoration: none;
    font-size: 18px;
    line-height: 22px;
  }
  .hoje {
    width: 91px;
    height: 120px;
    margin-bottom: 10px;
  }
`;

export default Menu;
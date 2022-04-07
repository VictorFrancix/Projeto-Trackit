import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

import UserContext from "./../assets/Context";
import TodayHabit from "./TodayHabit";
import "dayjs/locale/pt-br";

function Today() {
  let { setVisivel, progressbar, setProgressbar, usuario, Error, logout } =
    useContext(UserContext);
  const [today, setToday] = useState(["empty"]);
  const navigate = useNavigate();

  if (localStorage.getItem("usuario") !== null) {
    usuario = JSON.parse(localStorage.getItem("usuario"));
  }

  const TOKEN = usuario.token;
  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
  const config = {
    headers: { Authorization: `Bearer ${TOKEN}` },
  };

  let date = dayjs().locale("pt-br").format("dddd, DD/MM");
  date = date[0].toUpperCase() + date.substr(1);

  useEffect(() => {
    setVisivel(true);
    requestHabits();
  }, []);

  function updateProgressBar(today) {
    if (today.length > 0 && today[0] !== "empty") {
      const todayDone = today.filter((habit) => habit.done === true);
      const currentProgress = (todayDone.length / today.length) * 100;
      setProgressbar(currentProgress);
    }
  }

  function requestHabits() {
    const promise = axios.get(URL, config);
    promise.then((response) => {
      setToday(response.data);
      updateProgressBar(response.data);
    });
    promise.catch((err) => Error(err, navigate));
  }

  return today[0] === "empty" ? (
    <></>
  ) : (
    <Main color_p={progressbar === 0 ? "#BABABA" : "var(--green)"} logout = {logout}>
      <h1>{date}</h1>
      <p>
        {progressbar === 0
          ? "Nenhum hábito concluído ainda"
          : `${progressbar.toFixed(0)}% dos hábitos concluídos`}
      </p>
      <div>
        {today.length > 0 ? (
          today.map((habit) => {
            return (
              <TodayHabit
                habit={habit}
                key={habit.id}
                config={config}
                requestHabits={requestHabits}
              />
            );
          })
        ) : (
          <></>
        )}
      </div>
    </Main>
  );
}

const Main = styled.main`
  p {
    color: ${(props) => props.color_p};
  }
  div {
    margin-top: 29px;
  }
`;

export default Today;
import React from "react";
import Button from "../UI/Button";
import styled from "styled-components";
import AlarmOnOutlinedIcon from '@mui/icons-material/AlarmOnOutlined';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import { useTimer } from "../../hooks/useTimer";

function Timer() {
  const timer = useTimer(2);
  return (
    <>
      <Heading>CountDown Timer:</Heading>
      <Container>
        <h1>{timer.time}</h1>
        <CountDiv>
          <Buttons onClick={timer.start}>
            <AlarmOnOutlinedIcon />
          </Buttons>
          <Buttons onClick={timer.stop}>
            <PauseOutlinedIcon />
          </Buttons>
          <Buttons onClick={timer.restart}>
            <RestartAltOutlinedIcon />
          </Buttons>
        </CountDiv>
      </Container>
    </>
  );
}

export default Timer;

const Heading = styled.h1`
  margin-top: 50px;
  color: #e0d9d0;
`;

const Container = styled.div`
  margin-top: 20px;
  padding-top: 10px;
  border-radius: 10px;
  background-image: url("https://i.pinimg.com/564x/5b/5e/e9/5b5ee9ecb9e603900f963731a959ab89.jpg");
  width: 500px;
  box-shadow: 5px 5px 30px #040404, -5px -5px 30px #322d2d;

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    color: #ffffff;
  }
`;

const CountDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Buttons = styled(Button)`
  border-radius: 6px;
  border: 3px solid transparent;
  margin-bottom: 30px;
  padding: 0.3rem 2rem;
  font-size: 1.2rem;
  background-color: #88cdffaf;

  cursor: pointer;
  transition: border-color 0.25s;
  &:hover {
    border: 3px solid #61a3ffc6;
  }
  &:active {
    border: 3px solid #6dda67de;
  }
`;

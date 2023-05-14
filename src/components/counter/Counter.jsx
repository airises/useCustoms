import React from "react";
import { useCounter } from "../../hooks/useCounter";
import styled from "styled-components";
import Button from "../UI/Button";
// import { HiPlus } from "react-icons/hi";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";

function Counter() {
  const [count, increment, decrement, reset] = useCounter();
  return (
    <>
      <Heading>Simple Counter:</Heading>
      <Container>
        <h1>{count}</h1>
        <CountDiv>
          <Buttons onClick={increment}>
            <AddOutlinedIcon />
          </Buttons>
          <Buttons onClick={decrement}>
            <RemoveOutlinedIcon />
          </Buttons>
          <Buttons onClick={reset}>
            <RestartAltOutlinedIcon />
          </Buttons>
        </CountDiv>
      </Container>
    </>
  );
}

export default Counter;

const Heading = styled.h1`
  color: #e0d9d0;
`;

const Container = styled.div`
  background-image: url("https://i.pinimg.com/564x/64/81/e1/6481e1471c09d9bbe4d1636c1baf6604.jpg");
  padding-top: 10px;
  margin-top: 20px;
  width: 500px;
  box-shadow: 5px 5px 30px #040404, -5px -5px 30px #322d2d;
  border-radius: 10px;
  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    color: #fcf2b9;
  }
`;

const CountDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

const Buttons = styled(Button)`
  border-radius: 6px;
  border: 3px solid transparent;
  margin-bottom: 30px;
  padding: 0.3rem 2rem;
  font-size: 1.2rem;
  background-color: #fff3ca9f;

  cursor: pointer;
  transition: border-color 0.25s;
  &:hover {
    border: 3px solid #a57e3ade;
  }
  &:active {
    border: 3px solid #daaf67de;
  }
`;

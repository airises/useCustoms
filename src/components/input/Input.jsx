import { Button, TextField, styled as muiStyled } from "@mui/material";
import React from "react";
import styled from "styled-components";
import useInput from "../../hooks/useInput";

const Input = () => {
  const email = useInput("", "email");
  const password = useInput("", "password");
  const date = useInput("", "date");

  const onValide = {
    email: email.validate,
    password: password.validate,
    date: date.validate,
  };

  return (
    <>
      <Heading>Input List:</Heading>
      <Container>
        <InputContainer>
          <TextFields
            size="small"
            type="email"
            id="email"
            label="Email"
            value={email.value}
            onChange={email.onChange}
            onBlur={onValide.email}
            variant="filled"
          />
          <Button variant="outlined" color="success" onClick={onValide.email}>
            submit
          </Button>

          {email.error && <Error>{email.error}</Error>}
        </InputContainer>
        <InputContainer>
          <TextFields
            size="small"
            type="password"
            id="password"
            label="Password"
            value={password.value}
            onChange={password.onChange}
            onBlur={onValide.password}
            variant="filled"
          />
          <Button
            variant="outlined"
            color="success"
            onClick={onValide.password}
          >
            submit
          </Button>
          {email.error && <Error>{password.error}</Error>}
        </InputContainer>
        <InputContainer>
          <TextFields
            size="small"
            type="date"
            label="Date"
            id="date"
            value={date.value}
            onChange={date.onChange}
            onBlur={onValide.date}
            variant="filled"
          />
          <Button variant="outlined" color="success" onClick={onValide.date}>
            submit
          </Button>
          {email.error && <Error>{date.error}</Error>}
        </InputContainer>
      </Container>
    </>
  );
};

export default Input;

const Heading = styled.h1`
  margin-top: 50px;
  color: #e0d9d0;
`;

const Container = styled.div`
  border-radius: 10px;
  padding-top: 30px;
  margin-top: 50px;
  display: grid;
  box-shadow: 5px 5px 30px #040404, -5px -5px 30px #322d2d;
  background-image: url("https://i.pinimg.com/564x/10/76/7a/10767abdd1910244213f1dcaff471a60.jpg");
  gap: 15px;
  text-align: center;
  padding-bottom: 30px;
  width: 500px;
`;

const InputContainer = styled.div`
  display: flex;
  width: 400px;
  align-items: center;
  margin-left: 40px;
  gap: 20px;

  div {
    display: flex;
    flex-direction: column;

    label {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
`;
const TextFields = muiStyled(TextField)(() => ({
  margin: "20px ",
  width: "100%",
}));
const Error = styled.span`
  color: red;
`;

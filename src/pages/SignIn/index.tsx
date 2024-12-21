import React from "react";
import styled from "styled-components";

export default function SignUp() {
  return (
    <Container>
      <SignUpContainer>
        <SignUpTitle>singUp</SignUpTitle>
        <SignUpText>nome</SignUpText>
        <SignUpInput type="text" placeholder="insira seu nome" />
        <SignUpText>Email</SignUpText>
        <SignUpInput type="text" placeholder="insira seu email" />
        <SignUpText>Senha</SignUpText>
        <SignUpInput type="text" placeholder="insira sua senha" />
        <SignUpText>Confirmar senha</SignUpText>
        <SignUpInput type="text" placeholder="insira sua senha" />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <SignUpText>
            Já possui uma conta? <SignUpLink>Clique aqui</SignUpLink>
          </SignUpText>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 15,
          }}
        >
          <SignUpButton>Criar conta</SignUpButton>
          <SignUpButtonWithAccount>
            Criar conta com google
          </SignUpButtonWithAccount>
          <SignUpButtonWithAccount>
            Criar conta com github
          </SignUpButtonWithAccount>
        </div>
      </SignUpContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #17171a;
  height: 100vh;
`;
const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: 300px;
  padding: 40px;
  background: #202024;
  border-radius: 20px;
`;

const SignUpTitle = styled.h1`
  color: #ffffff;
  margin: 10px 0px;
`;

const SignUpText = styled.p`
  width: 100%;
  color: #ffffff;
  margin: 10px 0px;
  font-weight: 700;
`;

const SignUpLink = styled.a`
  color: #677ce0;
  margin: 10px 0px;
  font-weight: 700;
  cursor: pointer;
`;

const SignUpInput = styled.input`
  width: calc(100% - 20px);
  height: 45px;
  border-radius: 10px;
  padding-left: 20px;
  font-size: 1rem;
  background: #252529;
  border: 1px solid #4b4950;
  color: #ffffff;
`;

const SignUpButton = styled.button`
  padding: 10px;
  font-size: 1rem;
  font-weight: 700;
  background: #677ce8;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const SignUpButtonWithAccount = styled.button`
  padding: 10px;
  font-size: 1rem;
  font-weight: 700;
  background: #ffffff;
  color: #677ce8;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

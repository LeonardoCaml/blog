import * as React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { Dialog } from "@mui/material";
import { Google } from "@mui/icons-material";

const AccountEntry = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <a href="#">
        <HeaderButton>sign in</HeaderButton>
      </a>
      <a href="#">
        <HeaderButton onClick={handleClickOpen}>log in</HeaderButton>
      </a>

      <Dialog maxWidth={"lg"} open={open} onClose={handleClose}>
        <LoginContainer>
          <LoginText>Bem-vindo de volta</LoginText>
          <LoginTitle>Faça login na sua conta</LoginTitle>
          <LoginText>Email</LoginText>
          <LoginInput type="text" placeholder="insira seu email" />
          <LoginText>Senha</LoginText>
          <LoginInput type="text" placeholder="insira sua senha" />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <input type="checkbox" name="" id="" />
              <LoginText>Lembre de mim</LoginText>
            </div>
            <LoginLink>Esqueceu sua senha?</LoginLink>
          </div>
          <LoginButton>Entrar na conta</LoginButton>
          <LoginButtonGoogle>
            <Google />
            Faça login com Google
          </LoginButtonGoogle>
          <LoginText>
            Não tem uma conta? <LoginLink href="">Cadastre-se</LoginLink>
          </LoginText>
        </LoginContainer>
      </Dialog>
    </div>
  );
};

const AccountLogged = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <AccountCircleIcon sx={{ color: "#ffffff", fontSize: "2.5rem" }} />
      <div style={{ color: "#ffffff", width: 150 }}>
        <UserText>nome do usuário</UserText>
        <PerfilText>perfil</PerfilText>
      </div>
    </div>
  );
};

export const Header = () => {
  const [IsLogged, setIsLogged] = useState(false);

  return (
    <AppBar>
      <div style={{ display: "flex" }}>
        <Title>Code</Title>
        <Title $color>Learner</Title>
      </div>
      <Input>
        <input placeholder="pesquisar no blog" id="input" />
        <Divider />
        <div>{IsLogged ? <AccountLogged /> : <AccountEntry />}</div>
      </Input>
    </AppBar>
  );
};

const AppBar = styled.div`
  display: flex;
  padding: 20px 40px;
  align-items: center;
  justify-content: space-between;
  background: #202024;
`;

const Input = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 600px;
`;

const Divider = styled.div`
  height: 30px;
  width: 1px;
  background: #4b4950;
`;

const HeaderButton = styled.button`
  width: 90px;
  height: 45px;
  font-size: 1rem;
  color: #ffffff;
  background: none;
  border: 1px solid #4b4950;
  border-radius: 10px;
`;

const Title = styled.h1<{ $color?: boolean }>`
  color: ${(props) => (props.$color ? "#FFFFFF" : "#677CE0")};
  font-weight: 700;
`;

const UserText = styled.p`
  font-size: 1rem;
  font-weight: 700;
`;

const PerfilText = styled(UserText)`
  font-size: 1rem;
`;

const LoginContainer = styled.div`
  width: 350px;
  height: 550px;
  padding: 30px;
  background: #121214;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  border-radius: 20px;
`;

const LoginTitle = styled(Title)`
  color: #ffffff;
  font-weight: 700;
`;

const LoginText = styled(PerfilText)`
  color: white;
`;

const LoginInput = styled.input`
  width: calc(100% - 20px);
  height: 45px;
  margin-bottom: 5px;
  border-radius: 10px;
  padding-left: 20px;
  font-size: 1rem;
  background: #252529;
  border: 1px solid #4b4950;
  color: #ffffff;
`;

const LoginLink = styled.a`
  text-decoration: none;
  color: #677ce0;
  font-weight: 700;
`;

const LoginButton = styled.button`
  padding: 10px;
  font-size: 1rem;
  font-weight: 700;
  background: #677ce8;
  color: #ffffff;
  border: none;
  border-radius: 10px;
`;

const LoginButtonGoogle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  font-size: 1rem;
  font-weight: 700;
  background: #ffffff;
  border: none;
  border-radius: 10px;
`;
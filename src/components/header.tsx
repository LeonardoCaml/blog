import * as React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import SettingsIcon from "@mui/icons-material/Settings";

const AccountEntry = () => {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <a href="#">
        <HeaderButton>sign in</HeaderButton>
      </a>
      <a href="#">
        <HeaderButton>log in</HeaderButton>
      </a>
    </div>
  );
};

export const Header = () => {
  return (
    <AppBar>
      <div style={{ display: "flex" }}>
        <Title>Code</Title>
        <Title $color>Learner</Title>
      </div>
      <Input>
        <input placeholder="pesquisar no blog" id="input" />
        <Divider />
        {/* <div><AccountEntry /></div> */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <AccountCircleIcon sx={{ color: "#ffffff", fontSize: "2.5rem" }} />
          <div style={{ color: "#ffffff", width: 160 }}>
            <UserText>nome do usuário</UserText>
            <PerfilText>perfil</PerfilText>
          </div>
        </div>
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
  width: 75px;
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
  font-size: 1.2rem;
  font-weight: 700;
`;

const PerfilText = styled.p`
  font-size: 1rem;
`;

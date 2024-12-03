import * as React from "react";
import { Container } from "@mui/material";
import styled from "styled-components";

export const Header = () => {
  return (
    <AppBar>
      <div style={{ display: "flex", marginBottom: 40 }}>
        <Title>Code</Title>
        <Title $color>Lab</Title>
      </div>
      <Container
        sx={{
          maxWidth: {
            xs: "xs",
            sm: "sm",
            md: "md",
            lg: "md",
          },
        }}
      >
        <input placeholder="pesquisar no blog" id="input" />
      </Container>
    </AppBar>
  );
};

const AppBar = styled.div`
  padding: 40px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #202024;
`;

const Title = styled.h1<{ $color?: boolean }>`
  color: ${(props) => (props.$color ? "#FFFFFF" : "#E07B67")};
  font-weight: 700;
`;

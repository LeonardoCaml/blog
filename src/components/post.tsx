import * as React from "react";
import { Container } from "@mui/material";
import styled from "styled-components";
import { images } from "../constant/icon";
import { useState } from "react";

type props = {
  data: string;
  title: string;
  description: string;
};

export const Post = ({ data, title, description }: props) => {
  const [isEnable, setIsEnable] = useState(false);

  function favorite() {
    if (isEnable === false) {
      setIsEnable(true);
    } else if (isEnable === true) {
      setIsEnable(false);
    }
  }

  return (
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
      <PostCard className={isEnable ? "border-active" : "border"}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <DataText>{data}</DataText>
          <Favorite
            className={isEnable ? "disable" : ""}
            onClick={favorite}
            src={images.favorite}
            alt="favorite"
          />
          <Favorite
            className={isEnable ? "" : "disable"}
            onClick={favorite}
            src={images.favoriteFill}
            alt="favorite fill"
          />
        </div>
        <TitleText>{title}</TitleText>
        <DescriptionText>{description}</DescriptionText>
      </PostCard>
    </Container>
  );
};

const DataText = styled.p`
  color: #e07b67;
  font-size: 0.9rem;
  margin: 15px 0px;
`;

const TitleText = styled(DataText)`
  color: #ffffff;
  font-size: 1.2rem;
`;

const DescriptionText = styled(DataText)`
  color: #afabb6;
  font-size: 0.9rem;
  line-height: 1.5rem;
`;

const Favorite = styled.img`
  width: 20px;
`;

const PostCard = styled.div`
  transition: 0.2s;
  background: #17171a;
  border-radius: 10px;
  padding: 25px;
`;

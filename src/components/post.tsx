import * as React from "react";
import { Container } from "@mui/material";
import styled from "styled-components";
import { images } from "../constant/icon";

type props = {
  data: string;
  title: string;
  description: string;
};

export const Post = ({ data, title, description }: props) => {
  return (
    <Container maxWidth="md">
      <PostCard>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <DataText>{data}</DataText>
          <Icon src={images.favorite} alt="favorite" $disable />
          <Icon src={images.favoriteFill} alt="favorite" />
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

const Icon = styled.img<{ $disable?: boolean }>`
  display: ${(props) => (props.$disable ? "block" : "none")};
  width: 20px;
`;

const PostCard = styled.div`
  background: #17171a;
  border: 1px solid #252529;
  border-radius: 10px;
  padding: 25px;
`;

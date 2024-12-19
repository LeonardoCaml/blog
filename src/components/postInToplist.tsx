import * as React from "react";
import styled from "styled-components";

type props = {
  data: string;
  title: string;
  category: string;
  specify: string;
};

export const PostInToplist = ({ data, title, category, specify }: props) => {
  return (
    <PostCard>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <DataText>{data}</DataText>
      </div>
      <TitleText>{title}</TitleText>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <References>{category}</References>
        <References>{specify}</References>
      </div>
    </PostCard>
  );
};

const DataText = styled.p`
  color: #677ce0;
  font-size: 0.8rem;
  margin: 5px 0px;
`;

const TitleText = styled(DataText)`
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 700;
`;

const References = styled(DataText)`
  color: #afabb6;
  font-size: 0.9rem;
  margin: 5px 0;
`;

const PostCard = styled.div`
  transition: 0.2s;
  background: #17171a;
  border-radius: 10px;
  border: 1px solid #252529;
  padding: 25px;
`;

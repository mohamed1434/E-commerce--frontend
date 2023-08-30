import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 30px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Announcement = () => {
  return <Container>free shipping on us orders over $50</Container>;
};

export default Announcement;

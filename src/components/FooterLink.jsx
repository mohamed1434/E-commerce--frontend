import React from "react";
import { Stack } from "@mui/material";
import styled from "@emotion/styled";

const SubTitle = styled.p`
  color: white;
`;

const FooterLink = ({ title, items }) => (
  <Stack justifyContent="start" sx={{ height: "60%" }}>
    <h2 style={{ color: "white" }}>{title}</h2>
    {items.map((item) => (
      <SubTitle key={item.id}>{item.name}</SubTitle>
    ))}
  </Stack>
);

export default FooterLink;

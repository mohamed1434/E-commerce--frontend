import React from "react";
import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  useTheme,
} from "@mui/material";
import styled from "@emotion/styled";
import { PaperPlaneTilt } from "phosphor-react";
import FooterLink from "./FooterLink";

const Logo = styled.h1`
  color: white;
  font-size: 4rem;
`;

const SubTitle = styled.p`
  color: white;
`;

const Input = styled.input`
  padding: 10px;
  width: 100%;
  background-color: transparent;
  color: white;
  border: none;
  outline: none;
`;

const InputContainer = styled.div`
  border: 1px solid white;
  border-radius: 40px;
  width: 16rem;
  display: flex;
  align-items: center;
  padding-right: 4px;
  padding-top: 2px;
  padding-bottom: 2px;
`;

const Footer = () => {
  const products = [
    {
      id: 0,
      name: "Jackets",
    },
    {
      id: 1,
      name: "Shirts",
    },
    {
      id: 2,
      name: "Dresses",
    },
    {
      id: 3,
      name: "Outwear",
    },
    {
      id: 4,
      name: "Bottoms",
    },
  ];

  const buying = [
    {
      id: 0,
      name: "Shop",
    },
    {
      id: 1,
      name: "Terms of Use",
    },
    {
      id: 2,
      name: "Privacy",
    },
    {
      id: 3,
      name: "How it works",
    },
    {
      id: 4,
      name: "Customer Service",
    },
  ];

  const socials = [
    {
      id: 0,
      name: "Instagram",
    },
    {
      id: 1,
      name: "Facebook",
    },
    {
      id: 2,
      name: "Twitter",
    },
  ];
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        height: "40vh",
        backgroundColor: "#161616",
        marginTop: "6rem",
        [theme.breakpoints.down("sm")]: {
          height: "100%",
        },
      }}
    >
      <Stack
        direction="row"
        sx={{
          width: "100%",
          height: "100%",
          [theme.breakpoints.down("sm")]: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "10px",
            alignItems: "start",
          },
        }}
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack
          justifyContent="space-evenly"
          //   alignItems="start"
          sx={{
            paddingLeft: "4rem",
            height: "100%",
            [theme.breakpoints.down("sm")]: {
              width: "80%",
              alignItems: "center",
              
            },
          }}
        >
          <Logo>KARMA.</Logo>
          <SubTitle>
            REAL DESIGNS BY REAL ARTISTS <br /> FOR REAL PEOPLE
          </SubTitle>
        </Stack>

        <FooterLink title="PRODUCT" items={products} />
        <FooterLink title="BUYING" items={buying} />
        <FooterLink title="SOCIAL" items={socials} />

        <Stack
          sx={{
            paddingRight: "4rem",
            height: "60%",
            [theme.breakpoints.down("sm")]: {
              width: "90%",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: "10px",
              paddingRight: "0px",
            },
          }}
          spacing={2}
        >
          <h2 style={{ color: "white" }}>JOIN OUR COMMUNITY</h2>
          <InputContainer>
            <Input placeholder="Email Address" />
            <IconButton
              sx={{
                backgroundColor: "#de6737",
                color: "black",
              }}
            >
              <PaperPlaneTilt size={16} />
            </IconButton>
          </InputContainer>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;

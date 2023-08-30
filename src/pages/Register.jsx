import React from "react";
import SignUpForm from "../components/Forms/RegisterForm";
import { Stack, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import styled from "@emotion/styled";
import { mobile } from "../utils/responsive";

const Left = styled.div`
  height: 100%;
  flex: 2;
  background-image: url("https://i.pinimg.com/564x/39/f1/2d/39f12d68af6ab432000cadcdea00d521.jpg");
  border-radius: 10px; //https://i.pinimg.com/564x/1c/ed/9b/1ced9b8bed846956f3a2bc7729659622.jpg
  margin-right: 10px;
  ${mobile({ position: "absolute", width: "90%", height: "80%" })}
`;
const Right = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  ${mobile({ position: "relative", zIndex: "1" })}
  
`;

const ImageContainer = styled.div`
  position: relative; /* Important for positioning the overlay */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
`;

const Header = styled.h1`
  z-index: 1;
  ${mobile({ display: "none" })}
`;

const HeaderLogin = styled.h1`
  ${mobile({ color: "white" })}
`;

const Register = () => {
  return (
    <>
      <Navbar />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ height: "86vh", marginTop: "2rem" }}
      >
        <Right>
          <HeaderLogin>REGISTER</HeaderLogin>
          <SignUpForm />
        </Right>
        <Left>
          <ImageContainer>
            <Header >WELCOME</Header>
            <DarkOverlay />
          </ImageContainer>
        </Left>
        {/* <Right>
        <h1>REGISTER</h1>
          <SignUpForm />
        </Right> */}
      </Stack>
    </>
  );
};

export default Register;

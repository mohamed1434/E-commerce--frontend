import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import styled from "@emotion/styled";
import { Button, Stack } from "@mui/material";
import CartProduct from "./CartProduct";
import CloseIcon from '@mui/icons-material/Close';

const Header = styled.h1`
  padding: 10px;
`;

const DrawerContainer = styled.div`
  width: 24rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterContainer = styled.div`
  position: sticky;
  bottom: 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: 24vh;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default function CustomDrawer({ isOpen, onClose }) {
  return (
    <div>
      <Drawer anchor="right" open={isOpen} onClose={onClose}>
        <DrawerContainer>
          <HeaderContainer>
            <Header>YOUR CART</Header>
            <CloseIcon onClick={onClose} sx={{padding: "10px", cursor: "pointer"}}/>
          </HeaderContainer>

          <Stack
            sx={{ height: "100%", overflowY: "scroll" }}
          >
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
          </Stack>

          <FooterContainer>
            <Stack
              direction="column"
              justifyContent="space-between"
              sx={{ padding: "10px", height: "80%" }}
            >
              <p style={{ fontSize: "24px" }}>TOTAL</p>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <p style={{ color: "#949394" }}>INCLUDING VAT</p>
                <p style={{ fontSize: "24px" }}>$120</p>
              </Stack>
              <Button
                sx={{
                  backgroundColor: "#ED6C02",
                  color: "white",
                  padding: "10px",
                  borderRadius: "10px",
                  ":hover": {
                    backgroundColor: "black",
                  },
                }}
              >
                <p style={{ fontSize: "28px" }}>CHECKOUT</p>
              </Button>
            </Stack>
          </FooterContainer>
        </DrawerContainer>
      </Drawer>
    </div>
  );
}

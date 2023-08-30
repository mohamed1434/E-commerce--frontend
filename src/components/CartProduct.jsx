import React from "react";
import { Box, Stack, useTheme } from "@mui/material";
import styled from "@emotion/styled";
import { Minus, Plus } from "phosphor-react";
import { mobile } from "../utils/responsive";

const ImageContainer = styled.div`
  width: 10rem;
  height: 10rem;
  background-color: #d7d5ce;
  border-radius: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Color = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

const Size = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: white;
`;

const SizeContainer = styled.div`
  width: 35px;
  height: 35px;
  border: 1px solid #949394;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: white;
`;

const CartProduct = () => {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: "white", height: "12rem", padding: "10px" }}>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <ImageContainer>
          <Image src="card-model.png" />
        </ImageContainer>
        <Stack
          direction="column"
          justifyContent="space-between"
          sx={{
            width: "100%",
            height: "100%",
            padding: "10px",
            marginBottom: "2rem",
          }}
        >
          <Stack spacing={2} sx={{ marginTop: "2rem" }}>
            <p style={{ fontSize: "20px" }}>JACKET CASUAL</p>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Color color="Beige" />
              <SizeContainer>
                <p>XL</p>
              </SizeContainer>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  border: "1px solid #949394",
                  borderRadius: "10px",
                  width: "4rem",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <Minus />
                <p>1</p>
                <Plus />
              </Stack>
            </Stack>
          </Stack>
          <Stack alignItems="end">
            <p style={{ fontSize: "26px" }}>$16.50</p>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CartProduct;

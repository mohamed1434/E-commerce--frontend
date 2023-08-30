import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styled from "@emotion/styled";
import { Button, Divider, Stack, useTheme } from "@mui/material";
import CustomRating from "../components/CustomRating";
import {
  ArrowRight,
  ChatTeardropDots,
  CreditCard,
  Package,
  ShoppingCartSimple,
  Tag,
  Truck,
} from "phosphor-react";
import RadioButton from "../components/RadioButton";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
  /* margin-top: 1.4rem; */
  padding-top: 1.4rem;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 80%;
  height: 90%;
  object-fit: cover;
  border-radius: 10px;
`;

const SizeContainer = styled.div`
  width: 35px;
  height: 35px;
  border: 1px solid #949394;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#292d32" : "transparent")};
  color: ${(props) => (props.selected ? "white" : "#292d32")};
  :hover {
    background-color: #292d32;
    color: white;
    transition: 0.3s ease;
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #949394;
  border-radius: 50px;
  width: 10rem;
  height: 100%;
  background-color: white;
`;

const ItemName = styled.h1``;

const SingleProduct = () => {
  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = ["green", "red", "blue"];
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };
  const theme = useTheme();

  return (
    <>
      <Navbar />
      <Container>
        <Stack
          direction="row"
          sx={{
            width: "98%",
            height: "100%",
            [theme.breakpoints.down("sm")]: {
              display: "flex",
              flexDirection:"column",
            },
          }}
        >
          <Left>
            <ImageContainer>
              <Image src="https://i.pinimg.com/564x/9e/c1/da/9ec1da2517043e0251fcd6afc5dc0dcd.jpg" />
            </ImageContainer>
          </Left>
          <Right>
            <Stack
              direction="column"
              spacing={4}
              sx={{ width: "100%", height: "100%" }}
            >
              <ItemName>RAVEN TOP WITH COLORED LEAVES DESIGN</ItemName>

              <Stack direction="row" alignItems="center" spacing={4}>
                <CustomRating />
                <Stack direction="row">
                  <ChatTeardropDots size={22} color="#949394" />
                  <p style={{ fontSize: "18px", color: "#949394" }}>
                    120 comments
                  </p>
                </Stack>
              </Stack>

              <Stack direction="column" spacing={2}>
                <Stack direction="row" alignItems="center" spacing={3}>
                  <p>SELECT SIZE</p>
                  <Stack direction="row" spacing={0.6} alignItems="center">
                    <p style={{ color: "#949394" }}>SIZE GUIDE</p>
                    <ArrowRight color="#949394" />
                  </Stack>
                </Stack>

                <Stack direction="row" spacing={2}>
                  {sizes.map((item) => (
                    <SizeContainer
                      key={item}
                      selected={selectedSize === item}
                      onClick={() => handleSizeClick(item)}
                    >
                      <p>{item}</p>
                    </SizeContainer>
                  ))}
                </Stack>
              </Stack>

              <Stack direction="column" spacing={1}>
                <p>COLOURS AVAILABLE</p>
                <RadioButton
                  colors={colors}
                  selectedColor={selectedColor}
                  onColorClick={handleColorClick}
                />
              </Stack>

              <Stack direction="row" alignItems="center" spacing={2}>
                <Button
                  sx={{
                    width: "12rem",
                    borderRadius: "50px",
                    backgroundColor: "#ED6C02",
                    "&:hover": { backgroundColor: "black" },
                  }}
                  variant="contained"
                  startIcon={<ShoppingCartSimple />}
                >
                  <p>ADD TO CART</p>
                </Button>
                <Price>
                  <p>{`$65.00`}</p>
                </Price>
              </Stack>

              <Divider />

              <Stack
                direction="row"
                sx={{ height: "8rem" }}
                justifyContent="start"
                alignItems="center"
                spacing={12}
              >
                <Stack spacing={4}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <CreditCard
                      size={24}
                      style={{
                        backgroundColor: "#ECEDEF",
                        borderRadius: "50%",
                        padding: "6px",
                      }}
                    />
                    <p>SECURE PAYMENT</p>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Truck
                      size={24}
                      style={{
                        backgroundColor: "#ECEDEF",
                        borderRadius: "50%",
                        padding: "6px",
                      }}
                    />
                    <p>FREE SHIPPING</p>
                  </Stack>
                </Stack>

                <Stack spacing={4}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Tag
                      size={24}
                      style={{
                        backgroundColor: "#ECEDEF",
                        borderRadius: "50%",
                        padding: "6px",
                      }}
                    />
                    <p>SIZE & FIT</p>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Package
                      size={24}
                      style={{
                        backgroundColor: "#ECEDEF",
                        borderRadius: "50%",
                        padding: "6px",
                      }}
                    />
                    <p>FREE SHIPPING & RETURNS</p>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Right>
        </Stack>
      </Container>
    </>
  );
};

export default SingleProduct;

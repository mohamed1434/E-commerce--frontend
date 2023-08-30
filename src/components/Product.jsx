import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import RadioButton from "./RadioButton";
import { Link as RouterLink } from "react-router-dom";
import { mobile } from "../utils/responsive";

const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 40px;
  opacity: ${(props) => (props.isHovered ? 0.4 : 1)};
  transition: opacity 0.1s, transform 0.1s;
  /* ${mobile({height: "100%", width: "100%"})} */
`;

const HoverBox = styled(Box)`
  width: 24vw;
  height: 60vh;
  background-color: #d7d5ce;
  border-radius: 40px;
  transition: opacity 0.3s, transform 0.3s;

  ${mobile({width: "100%"})}

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    transform: scale(1.02);
  }
`;

const ColorButton = styled(Button)(({ theme }) => ({
  color: "black",
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "rgba(255,255,255, 0.6)",
  },
  borderRadius: "20px",
}));

const OutLinedButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "rgba(0,0,0, 0.4)",
    border: "1px solid white",
  },
  borderRadius: "20px",
  border: "1px solid white",
}));

const Product = ({ colors, imgs, text, price, type }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const colorIndex = colors.indexOf(selectedColor);
  const selectedImage = imgs[colorIndex];

  return (
    <Box
      sx={{
        width: "24vw",
        height: type === "products" ? "70vh" : "60vh", //70vh
        padding: type === "products" ? "20px" : "50px", //20px
        [theme.breakpoints.down("sm")]: {
          // height: "20vh",
          // backgroundColor: "orange",
          width: "70%",
          height: "100%",
          display:"flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Stack
        direction="column"
        spacing={2}
        sx={{
          [theme.breakpoints.down("sm")]: {
            height: "40vh",
            width: "70vw",
            display: "flex",
            alignItems: "center",
            marginBottom: "4rem"
          },
        }}
      >
        <HoverBox
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image src={`${selectedImage}.png`} isHovered={isHovered} />
          {isHovered && (
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              spacing={2}
            >
              <ColorButton variant="contained">
                <p>ADD TO CART</p>
              </ColorButton>
              <OutLinedButton variant="outlined" color="primary" sx={{ ml: 1 }}>
                <RouterLink
                  to={"/product"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <p>VIEW</p>
                </RouterLink>
              </OutLinedButton>
            </Stack>
          )}
        </HoverBox>
        <Stack
          direction="row"
          sx={{ width: "100%" }}
          justifyContent="space-between"
        >
          <Typography fontSize={18} fontFamily={"'Bebas Neue', sans-serif"}>
            {text}
          </Typography>
          <RadioButton
            colors={colors}
            selectedColor={selectedColor}
            onColorClick={handleColorClick}
          />
        </Stack>
        <Typography
          fontFamily={"'Bebas Neue', sans-serif"}
          color="#e85d04"
          fontWeight="bold"
        >{`$${price}`}</Typography>
      </Stack>
    </Box>
  );
};

export default Product;

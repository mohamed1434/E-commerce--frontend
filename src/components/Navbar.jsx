import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  Badge,
  IconButton,
  Link,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { MagnifyingGlass, ShoppingCartSimple } from "phosphor-react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import CustomDrawer from "./CustomDrawer";
import { mobile } from "../utils/responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Logo = styled.div`
  flex: 1;
  h1 {
    font-weight: bold;
    font-size: 30px;
  }
`;

const Center = styled.div`
  flex: 1;
  ${mobile({ display: "none" })}
`;

const Right = styled.div`
  flex: 1;
`;

const SearchContainer = styled.div`
  display: flex;
  border: ${(props) => (props.visible ? "0.5px solid black" : "none")};
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ display: "none" })}
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: ${(props) => (props.visible ? "100%" : "0")};
  transition: width 0.3s ease-out;
`;

const centerItems = [
  {
    id: 1,
    name: "ABOUT",
    to: "/about",
  },
  {
    id: 2,
    name: "MEN",
    to: "/",
  },
  {
    id: 3,
    name: "WOMEN",
    to: "/",
  },
  {
    id: 4,
    name: "SHOP",
    to: "/products",
  },
  {
    id: 5,
    name: "CONTACT",
    to: "/",
  },
];

const rightItems = [
  {
    icon: <MagnifyingGlass weight="bold" />,
  },
  {
    icon: <ShoppingCartSimple weight="bold" />,
  },
  {
    name: "Login",
  },
  {
    name: "Sign Up",
  },
];

const Navbar = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();

  const toggleSearchVisible = () => {
    setSearchVisible(!searchVisible);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  console.log(window.innerWidth);

  return (
    <Container>
      <Stack
        p={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Logo>
          <RouterLink
            to={"/"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <h1>Karma.</h1>
          </RouterLink>
        </Logo>
        <Center>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {centerItems.map((item, index) => (
              <>
                <Link
                  component={RouterLink}
                  to={item.to}
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    cursor: "pointer",
                  }}
                  key={index}
                >
                  {item.name}
                </Link>
                {index < centerItems.length - 1 && <span>&bull;</span>}
              </>
            ))}
          </Stack>
        </Center>
        <Right>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
          >
          {window.innerWidth < 786 ? (
              <>
                <Link
                  component={RouterLink}
                  to={"/products"}
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    cursor: "pointer",
                  }}
                >
                  SHOP
                </Link>
              </>
            ) : (
              console.log("no")
            )}
            <Badge badgeContent={4} color="warning">
              <ShoppingCartSimple
                style={{ cursor: "pointer" }}
                weight="bold"
                color="black"
                size={24}
                onClick={toggleDrawer}
              />
            </Badge>
            <CustomDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
            <SearchContainer visible={searchVisible}>
              <Input visible={searchVisible} />
              <MagnifyingGlass
                weight="bold"
                color="black"
                size={24}
                onClick={toggleSearchVisible}
                style={{ cursor: "pointer" }}
              />
            </SearchContainer>
            <RouterLink to={"/login"}>
              <IconButton
                sx={{
                  borderRadius: "10px",
                  color: "black",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "18px",
                    borderRadius: "5px",
                    width: "60px",
                  },
                }}
              >
                Login
              </IconButton>
            </RouterLink>
            <RouterLink to={"/register"}>
              <IconButton
                sx={{
                  borderRadius: "10px",
                  color: "black",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "18px",
                    borderRadius: "5px",
                    width: "60px",
                  },
                }}
              >
                Sign Up
              </IconButton>
            </RouterLink>
          </Stack>
        </Right>
      </Stack>
    </Container>
  );
};

export default Navbar;

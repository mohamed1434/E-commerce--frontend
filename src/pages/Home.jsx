import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import FeedCards from "../components/FeedCards";
import SiteDesc from "../components/SiteDesc";
import { Stack } from "@mui/material";
import { cardItems } from "../../data";
import HomeCategories from "../components/HomeCategories";
import Signature from "../components/Signature";
import HomeVideo from "../components/HomeVideo";
import Footer from "../components/Footer";
import Product from "../components/Product";
import styled from "@emotion/styled";
import { mobile } from "../utils/responsive";

const Header = styled.h1`
font-size: 70px;
margin-bottom: 10px;
${mobile({fontSize: "40px", paddingLeft: "10px"})}
`;

const Home = () => {
  const limitedCardItems = window.innerWidth < 786 ? cardItems.slice(0, 3) : cardItems.slice(0, 6);
  return (
    <>
      <Announcement />
      <Navbar />
      <FeedCards />
      <br/>
      <br/>
      <SiteDesc />
      <Stack justifyContent="center" sx={{ width: "100%" }} alignItems="center">
        <h1 style={{ fontSize: "40px" }}>SHOP BY ESSENTIALS</h1>
        <HomeCategories />
      </Stack>
      <Stack
        direction="row"
        flexWrap="wrap"
        spacing={2}
        justifyContent="center"
      >
        {limitedCardItems.map((item, index) => (
          <Product
            key={index}
            colors={item.colors}
            imgs={item.imgs}
            text={item.text}
            price={item.price}
            type="home"
          />
        ))}
      </Stack>
      <Signature />
      <Stack justifyContent="center" sx={{ width: "100%" }} alignItems="center">
        <Header >
          WANT TO DESIGN YOUR OWN? CALM, WE CAN DO IT!
        </Header>
      </Stack>
      <HomeVideo />
      <Footer />
    </>
  );
};

export default Home;

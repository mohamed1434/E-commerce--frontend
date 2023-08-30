import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { cardItems } from "../../data";
import styled from "@emotion/styled";
import { Divider, Stack, useTheme } from "@mui/material";
import Product from "../components/Product";
import CustomMenu from "../components/CustomMenu";
import { mobile } from "../utils/responsive";
import CustomSelect from "../components/CustomSelect";
import SmallProduct from "../components/SmallProduct";

const Container = styled.div`
  display: flex;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; //center
  flex: 6; //6
  ${mobile({
    display: "flex",
    // flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    
  })}
`;

const Categories = styled.div`
  display: flex;
  background-color: #ed6c02;
  justify-content: center;
  padding: 10px;
  margin-top: 2rem;
`;

const SmallText = styled.p`
  cursor: pointer;
  color: ${(props) =>
    props.selectedCategory === props.item ? "#ED6C02" : "black"};
  &:hover {
    color: #ed6c02;
    transition: 0.3s ease;
  }
`;

const Header = styled.h1`
  padding-left: 30px;
  font-size: 4rem;
  ${mobile({ fontSize: "2rem" })}
`;

const Select = styled.select`
  margin-right: 30px;
`;

const Option = styled.option``;

const categories = [
  "TSHIRTS",
  "SHIRTS",
  "PANTS",
  "JACKETS",
  "SWIMWEAR",
  "SHOES",
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("TSHIRTS");
  const theme = useTheme();
  const filteredItems = cardItems.filter(
    (item) => item.category === selectedCategory
  );

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <Navbar />
      <Divider
        sx={{
          marginTop: "2rem",
          [theme.breakpoints.down("sm")]: {
            display: "",
          },
        }}
      />
      <Container>
        <Stack
          alignItems="start"
          sx={{
            height: "50vh",
            flex: "1",
            position: "sticky",
            top: "0",
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          }}
        >
          <SmallText
            style={{
              fontSize: "34px",
              padding: "20px",
              textDecoration: "none",
            }}
          >
            CATEGORY
          </SmallText>
          <Stack sx={{ paddingLeft: "40px" }} spacing={2}>
            {categories.map((item) => (
              <SmallText
                onClick={() => handleCategoryClick(item)}
                selectedCategory={selectedCategory}
                item={item}
              >
                {item}
              </SmallText>
            ))}
          </Stack>
        </Stack>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            zIndex: "1",
            position: "relative",
            marginTop: "-6rem",
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          }}
        />

        <Stack sx={{ width: "100%" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              [theme.breakpoints.down("sm")]: {
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              },
            }}
          >
            <Header>{selectedCategory}</Header>
            {/* <Select>
              <Option>Most Popular</Option>
              <Option>Price (highest to lowest)</Option>
              <Option>Price (lowest to highest)</Option>
            </Select> */}
            <Stack
              direction="row"
              justifyContent="center"
              sx={{
                width: "100%",
                justifyContent: "end",
              }}
            >
              <CustomMenu />
              <CustomSelect
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryClick}
              />
            </Stack>
          </Stack>
          {filteredItems.length === 0 ? (
            <CardsContainer>
              <p>No products available in this category.</p>
            </CardsContainer>
          ) : (
            <CardsContainer>
              {filteredItems.map((item) => (
                <SmallProduct
                  key={item.id} // Make sure each product has a unique identifier
                  colors={item.colors}
                  imgs={item.imgs}
                  text={item.text}
                  price={item.price}
                  type="products"
                />
              ))}
            </CardsContainer>
          )}
        </Stack>
      </Container>
    </>
  );
};

export default Products;

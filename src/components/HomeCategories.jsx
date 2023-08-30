import React, { useState } from "react"; // Import useState
import { Stack } from "@mui/material";
import styled from "@emotion/styled";

const Border = styled.div`
  padding: 10px;
`;

const Text = styled.span`
  border: 2px solid black;
  border-radius: 50px;
  padding: 4px 20px;
  font-size: 24px;
  position: relative;
  display: inline-block;
  margin: 5px;
  cursor: pointer;
  background-color: ${(props) =>
    props.selected
      ? "black"
      : "transparent"}; /* Change background color based on selected prop */
  color: ${(props) => (props.selected ? "white" : "black")};
`;

const ItemCount = styled.span`
  position: absolute;
  bottom: 9.1px;
  font-size: 10px;
`;

const HomeCategories = () => {
  const [selectedItemId, setSelectedItemId] = useState(null); // State to keep track of selected item

  const items = [
    {
      id: 0,
      name: "WINTER COLLECTION",
      quantity: 20,
    },
    {
      id: 1,
      name: "NEW ARRIVALS",
      quantity: 14,
    },
    {
      id: 2,
      name: "BEST SELLERS",
      quantity: 20,
    },
    {
      id: 3,
      name: "FLASH SALE",
      quantity: 18,
    },
  ];

  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId); // Update selectedItemId when an item is clicked
  };

  //   const totalItems = () => {
  //     return items.reduce((total, item) => total + item.quantity, 0);
  //   }

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Stack direction="row">
      <Border>
        <Text
          selected={selectedItemId === null}
          onClick={() => handleItemClick(null)}
        >
          ALL
          <ItemCount>{totalItems}</ItemCount>
        </Text>
        {items.map((item) => (
          <Text
            key={item.id}
            selected={selectedItemId === item.id}
            onClick={() => handleItemClick(item.id)}
          >
            {item.name}
            <ItemCount>{item.quantity}</ItemCount>
          </Text>
        ))}
      </Border>
    </Stack>
  );
};

export default HomeCategories;

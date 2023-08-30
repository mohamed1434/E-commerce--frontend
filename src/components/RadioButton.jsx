import React, { useState } from "react";
import styled from "@emotion/styled";
import { Stack } from "@mui/material";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: ${(props) => (props.selected ? "1px solid black" : "")};
`;

const Color = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

const RadioButton = ({ colors, selectedColor, onColorClick }) => {
  //   const colors = ["black", "red", "green", "blue"]; // Add more colors if needed
  //   const [selectedColors, setSelectedColors] = useState([]);

  //   const handleColorClick = (color) => {
  //     setSelectedColors([color]);
  //   };

  return (
    <div style={{ display: "flex" }}>
      {colors.map((color, index) => (
        <Container
          key={index}
          onClick={() => onColorClick(color)}
          selected={selectedColor === color}
        >
          <Color color={color} />
        </Container>
      ))}
    </div>
  );
};

export default RadioButton;

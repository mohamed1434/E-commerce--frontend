import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Star } from "phosphor-react";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#E9DA10",
  },
  "& .MuiRating-iconHover": {
    color: "#E9DA10",
  },
});

export default function CustomRating() {
  const [ratingValue, setRatingValue] = React.useState(4); // Set the initial value

  const handleRatingChange = (event, newValue) => {
    setRatingValue(newValue); // Update the rating value in the state
  };

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
        display: "flex",
        gap: "6px",
        alignItems: "center",
      }}
    >
      <StyledRating
        name="customized-color"
        value={ratingValue} // Set the value based on state
        onChange={handleRatingChange} // Handle the change event
        getLabelText={(value) => `${value} Star${value !== 1 ? "s" : ""}`}
        precision={0.5}
        icon={<Star weight="fill" size={22} />}
        emptyIcon={<Star size={22} />}
        readOnly
      />
      <p style={{ fontSize: "18px", color: "#949394" }}>{ratingValue}</p>
    </Box>
  );
}

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ArrowDown, List, Plus, SortAscending } from "phosphor-react";
import { Box, Divider, Stack, useTheme } from "@mui/material";
import { mobile } from "../utils/responsive";
import { styled as styledComp } from "styled-components";

const PTag = styledComp.p`
font-size: 12px;
`;

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 220,
    [theme.breakpoints.down("sm")]: {
      minWidth: "100px",
    },
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const CustomSelect = ({ categories, selectedCategory, onCategoryChange }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedOption, setSelectedOption] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (option) => {
    // setSelectedOption(option);
    onCategoryChange(option);
    handleClose();
  };
  const theme = useTheme();

  return (
    <Box
      sx={{
        [theme.breakpoints.down("xl")]: {
          display: "none",
        },
        [theme.breakpoints.down("sm")]: {
          display: "inherit",
        },
      }}
    >
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        // endIcon={<List />}
        sx={{
          marginRight: "20px",
          padding: "10px",
          width: "14rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#ED6C02",
          "&:hover": {
            backgroundColor: "black", // Change to the desired hovering color
          },
          [theme.breakpoints.down("sm")]: {
            width: "10rem",
          },
        }}
      >
        <PTag>{`CATEGORY: ${selectedCategory}`}</PTag>
        <List size={24} />
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {categories.map((item) => (
          <MenuItem onClick={() => handleMenuItemClick(item)} disableRipple>
            <p>{item}</p>
          </MenuItem>
        ))}
      </StyledMenu>
    </Box>
  );
};

export default CustomSelect;

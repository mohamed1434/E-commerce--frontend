import PropTypes from "prop-types";
// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { TextField, useTheme } from "@mui/material";
import { mobile } from "../../utils/responsive";

// ----------------------------------------------------------------------

RHFTextField.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};

export default function RHFTextField({ name, helperText, ...other }) {
  const { control } = useFormContext();
  const theme = useTheme();

  console.log(helperText);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          value={
            typeof field.value === "number" && field.value === 0
              ? ""
              : field.value
          }
          error={!!error}
          helperText={error ? error?.message : helperText}
          {...other}
          InputLabelProps={{
            style: {
              color: "black",
            },
          }}
          InputProps={{
            style: {
              color: "black",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "black", // Change the outline color here
              },
              "&:hover fieldset": {
                borderColor: "black", // Change the outline color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "black", // Change the outline color on focus
              },
            },
            [theme.breakpoints.down("sm")]: {
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white", // Change the outline color here
                },
                "&:hover fieldset": {
                  borderColor: "white", // Change the outline color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white", // Change the outline color on focus
                },
              },
            },
          }}
        />
      )}
    />
  );
}

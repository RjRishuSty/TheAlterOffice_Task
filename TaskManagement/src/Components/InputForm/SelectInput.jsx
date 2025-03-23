import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import Styles from "./InputForm.module.css";
import React from "react";

const SelectInput = ({ item, formData, handleChange }) => {
  return (
    <>
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: "600",
          color: "#00000099",
        }}
        gutterBottom
      >
        {item.label}
      </Typography>

      <FormControl fullWidth size="small">
        <Select
        className={Styles.input}
          id={item.id}
          name={item.id}
          value={formData[item.id]}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="" disabled>
            Choose
          </MenuItem>
          {item.options.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectInput;

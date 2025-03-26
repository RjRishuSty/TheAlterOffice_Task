import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React from "react";

const CheckBoxInput = ({ item, formData, handleChange,selectTask }) => {
  
  
  return (
    <Box>
      <Typography
        gutterBottom
        sx={{ fontSize: "12px", fontWeight: "600", color: "#00000099" }}
      >
        {item.label}
      </Typography>
      <ToggleButtonGroup
        value={selectTask?selectTask.category:formData.category}
        exclusive
        onChange={handleChange}
        sx={{ display: "flex" }}
      >
        {item.options.map((option) => (
          <ToggleButton
            size="small"
            key={option.id}
            value={option.id}
            name="category"
            sx={{
              border: "1px solid #00000030",
              textTransform: "capitalize",
              backgroundColor: " #FFF",
              borderRadius: "41px",
              fontSize: "12px",
              padding: "9px 15px",
              fontWeight: "700",
              color: "#090909",
              "&.Mui-selected": {
                backgroundColor: "rgb(223, 222, 222)",
                color: "#000",
                borderColor: "#00000030",
              },
            }}
          >
            {option.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
};

export default CheckBoxInput;

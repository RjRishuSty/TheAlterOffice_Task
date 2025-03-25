import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box } from "@mui/material";

const TaskDateHeaderIcon = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <ArrowDropUpIcon
        fontSize="small"
        sx={{ color: "00000099", mb: -0.9, cursor: "pointer" }}
      />
      <ArrowDropDownIcon
        fontSize="small"
        sx={{ color: "00000099", mt: -0.9, cursor: "pointer" }}
      />
    </Box>
  );
};

export default TaskDateHeaderIcon;

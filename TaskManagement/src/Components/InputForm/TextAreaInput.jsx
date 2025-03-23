import { Box, TextareaAutosize } from "@mui/material";
import React from "react";
import Styles from './InputForm.module.css';
import SortTwoToneIcon from "@mui/icons-material/SortTwoTone";


const TextAreaInput = ({ item, formData, handleChange }) => {
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <SortTwoToneIcon
        sx={{
          position: "absolute",
          top: 12,
          left: 10,
          color: "gray",
          pointerEvents: "none",
        }}
      />
      <TextareaAutosize
        className={Styles.input}
        aria-label="Description"
        minRows={5}
        placeholder={item.placeholder}
        id={item.id}
        name={item.id}
        value={formData.description}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "12px 12px 12px 40px",
          lineHeight: 1.2,
          borderRadius: "4px",
          border: "1px solid #ccc",
          outline: "none",
        }}
      />
    </Box>
  );
};

export default TextAreaInput;

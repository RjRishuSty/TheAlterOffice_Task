import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Styles from "./Modal.module.css";
import CloseBtn from "../CloseBtn/CloseBtn";

const ModalHeader = ({ selectedTask }) => {
  const isMobile = useMediaQuery("(max-width:800px)");
  return (
    <Box
      className={Styles.cardHeader}
      sx={{
        display: "flex",
        justifyContent: selectedTask ? "end" : "space-between",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        padding: isMobile?'10px 5px':'20px'
      }}
    >
      {!selectedTask ? (
        <Typography
          sx={{ fontSize: "24px", fontWeight: "600", color: "#2F2F2F" }}
        >
          Create Task
        </Typography>
      ) : null}
      <CloseBtn selectedTask={selectedTask} />
    </Box>
  );
};

export default ModalHeader;

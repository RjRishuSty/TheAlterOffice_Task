import { Box, Typography } from "@mui/material";
import React from "react";

const TaskHeader = () => {
  const headerData = [
    { label: "Task name" },
    { label: "Due on" },
    { label: "Task Status" },
    { label: "Task Category" },
  ];
  return (
    <Box
      sx={{
        // border:'2px solid red',
        width: "70%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 5px",
      }}
    >
      {headerData.map((item) => (
        <Typography
          key={item.label}
          sx={{
            fontSize: 14,
            fontWeight: 700,
            color: "#00000099",
          }}
        >
          {item.label}
        </Typography>
      ))}
    </Box>
  );
};

export default TaskHeader;

import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ShowTasks from "../ShowTasks/ShowTasks";

const BoardCard = ({ item, todo, progress, completed }) => {
  const taskData = useSelector((state) => state.task.task);
  console.log("BoardCard", taskData);

  return (
    <Card
      sx={{
        // border:'5px solid red',
        border: "1px solid #58575112",
        width: "336px",
        height: "510px",
        borderRadius: "12px",
        backgroundColor: "#F1F1F1",
        margin: 1,
        padding: "10px",
      }}
      key={item.id}
    >
      <Typography
        component="span"
        sx={{
          width: "auto",
          position: "sticky", 
          top: 0,
          zIndex: 10,
          backgroundColor: item.color,
          padding: "4px 20px",
          fontWeight: 500,
          fontSize: "14px",
          borderRadius: "4px",
        }}
      >
        {item.label}
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: "450px",
          overflowY: "auto",
          cursor:'pointer',
          mt: 2,
          "&::-webkit-scrollbar": {
            width: "5px", 
          },
          "&::-webkit-scrollbar-track": {
            background: "#D9D9D97D",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#D9D9D9", 
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#D9D9D9",
          },
        }}
      >
        <ShowTasks
          item={item}
          todo={todo}
          progress={progress}
          completed={completed}
        />
      </Box>
    </Card>
  );
};

export default BoardCard;

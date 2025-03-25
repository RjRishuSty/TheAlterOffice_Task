import { Box, Grid } from "@mui/material";
import React from "react";
import AccordionBox from "../AccordionBox/AccordionBox";
import BoardCard from "../TaskBoardCard/BoardCard";
import { useSelector } from "react-redux";

const TaskCategory = () => {
  const  tabValue = useSelector((state)=>state.tab);
  const taskTypes = [
    { label: "Todo", id: "todo", color: "#FAC3FF" },
    { label: "In-Progress", id: "in-progress", color: "#85D9F1" },
    { label: "Completed", id: "completed", color: "#CEFFCC" },
  ];
  return (
    <>
      {tabValue === "board" ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          {taskTypes.map((item) => (
            <BoardCard item={item} />
          ))}
        </Box>
      ) : (
        <Grid container>
          {taskTypes.map((item) => (
            <Grid item xs={12} sm={12} md={12} mb={2} key={item.id}>
              <AccordionBox item={item} />
            </Grid> 
          ))}
        </Grid>
      )}
    </>
  );
};

export default TaskCategory;

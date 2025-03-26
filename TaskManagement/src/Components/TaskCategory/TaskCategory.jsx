import { Box, Grid } from "@mui/material";
import React from "react";
import AccordionBox from "../AccordionBox/AccordionBox";
import BoardCard from "../TaskBoardCard/BoardCard";
import { useSelector } from "react-redux";

const TaskCategory = () => {
  const tabValue = useSelector((state) => state.tab);
  const taskData = useSelector((state) => state.task.task);
  const taskTypes = [
    { label: "Todo", id: "todo", color: "#FAC3FF" },
    { label: "In-Progress", id: "in-progress", color: "#85D9F1" },
    { label: "Completed", id: "completed", color: "#CEFFCC" },
  ];

  const categorizedTasks = {
    todo: taskData.filter((task) => task.status === "todo"),
    "in-progress": taskData.filter((task) => task.status === "in-progress"),
    completed: taskData.filter((task) => task.status === "completed"),
  };
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
            <React.Fragment key={item.id}>
              <BoardCard item={item} categorizedTasks={categorizedTasks}/>
            </React.Fragment>
          ))}
        </Box>
      ) : (
        <Grid container>
          {taskTypes.map((item) => (
            <Grid item xs={12} sm={12} md={12} mb={2} key={item.id}>
              <AccordionBox item={item} categorizedTasks={categorizedTasks} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default TaskCategory;

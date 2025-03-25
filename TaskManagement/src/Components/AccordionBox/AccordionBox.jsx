import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import AddTaskButton from "../AddTaskButton/AddTaskButton";
import { useSelector } from "react-redux";
import FormLayout from "../FormLayout/FormLayout";
import ShowTasks from "../ShowTasks/ShowTasks";

const AccordionBox = ({ item }) => {
  const taskData = useSelector((state) => state.task.task);
  const [expanded, setExpanded] = useState(item.id !== "completed");
  const { open, component } = useSelector((state) => state.taskForm);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  const todoTasks = taskData?.filter((task) => task.status === "todo") || [];
  const progressTasks =
    taskData?.filter((task) => task.status === "in-progress") || [];
  const completedTasks =
    taskData?.filter((task) => task.status === "completed") || [];

  return (
    <Accordion
      key={item.id}
      expanded={expanded}
      onChange={handleToggle}
      defaultExpanded
      sx={{
        padding: 0,
        boxShadow: "none",
        border: "none",
        backgroundColor: "transparent",
        "&.Mui-expanded": {
          backgroundColor: "transparent",
        },
        "&::before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "#000" }} />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          backgroundColor: item.color,
          height: "46px",
          borderTopRightRadius: "12px",
          borderTopLeftRadius: "12px",
        }}
      >
        <Typography
          component="span"
          sx={{
            fontWeight: 600,
            fontSize: 16,
            color: "#000",
          }}
        >
          {item.id === "todo" &&
            `${item.label} ${
              todoTasks.length > 0 ? `(${todoTasks.length})` : ""
            }`}
            {item.id === "in-progress" &&
            `${item.label} ${
              progressTasks.length > 0 ? `(${progressTasks.length})` : ""
            }`}
            {item.id === "completed" &&
            `${item.label} ${
              completedTasks.length > 0 ? `(${completedTasks.length})` : ""
            }`}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundColor: "#F1F1F1",
          minHeight:
            item.id === "todo"
              ? "376px"
              : item.id === "progress"
              ? "158px"
              : "100px",
          borderBottomLeftRadius: "12px",
          borderBottomRightRadius: "12px",
        }}
      >
        {item.id === "todo" && <AddTaskButton />}
        {/* TODO: (create task) in Accordion  */}
        {open && component === "InAccordion" && item.id === "todo" && (
          <FormLayout />
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            flexDirection: "column",
            height: item.id === "todo" ? 300 : 200,
          }}
        >
          <ShowTasks item={item} />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionBox;

import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import AddTaskButton from "../AddTaskButton/AddTaskButton";
import { useSelector } from "react-redux";
import FormLayout from "../FormLayout/FormLayout";
import ShowTasks from "../ShowTasks/ShowTasks";

const AccordionBox = ({ item, todo, completed, progress }) => {

  const isMobile = useMediaQuery("(max-width:800px)");
  const [expanded, setExpanded] = useState(item.id !== "completed");
  const { open, component } = useSelector((state) => state.taskForm);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };
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
          overflow:'hidden',
          zIndex:9
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
            `${item.label} ${todo.length > 0 ? `(${todo.length})` : ""}`}
          {item.id === "in-progress" &&
            `${item.label} ${
              progress.length > 0 ? `(${progress.length})` : ""
            }`}
          {item.id === "completed" &&
            `${item.label} ${
              completed.length > 0 ? `(${completed.length})` : ""
            }`}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundColor: "#F1F1F1",
          overflowY:'scroll',
           marginTop: "-8px !important",
          "&::-webkit-scrollbar": {
            width: "10px", 
          },
          "&::-webkit-scrollbar-track": {
            background: "#D9D9D97D",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "rgb(194, 189, 189)", 
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#D9D9D9",
          },
          borderBottomLeftRadius: "12px",
          borderBottomRightRadius: "12px",
        }}
      >
        {!isMobile ? item.id === "todo" && <AddTaskButton /> : ""}

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
            height: item.id === "todo" ? 250 : 200,
          }}
        >
          <ShowTasks
            item={item}
            todo={todo}
            progress={progress}
            completed={completed}
          />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionBox;

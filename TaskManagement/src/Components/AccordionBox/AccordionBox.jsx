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

const AccordionBox = ({ item, categorizedTasks }) => {
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
              categorizedTasks.todo.length > 0
                ? `(${categorizedTasks.todo.length})`
                : ""
            }`}
          {item.id === "in-progress" &&
            `${item.label} ${
              categorizedTasks["in-progress"].length > 0
                ? `(${categorizedTasks["in-progress"].length})`
                : ""
            }`}
          {item.id === "completed" &&
            `${item.label} ${
              categorizedTasks.completed.length > 0
                ? `(${categorizedTasks.completed.length})`
                : ""
            }`}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundColor: "#F1F1F1",
          minHeight:
            item.id === "todo"
              ? "250px"
              : item.id === "progress"
              ? "158px"
              : "100px",
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
            height: item.id === "todo" ? 300 : 200,
          }}
        >
          <ShowTasks item={item} categorizedTasks={categorizedTasks} />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionBox;

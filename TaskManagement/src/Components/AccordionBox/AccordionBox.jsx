import React, { useState } from "react";
// import Styles from "./AccordionBox.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

const AccordionBox = ({ item }) => {
  
  const [expanded, setExpanded] = useState(item.id !== "completed");
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
        margin: "10px 0px",
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
          {`${item.label} (3)`}
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
      ></AccordionDetails>
    </Accordion>
  );
};

export default AccordionBox;

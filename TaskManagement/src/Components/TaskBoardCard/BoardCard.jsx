import { Card, Typography } from "@mui/material";
import React from "react";

const BoardCard = ({ item }) => {
  return (
    <Card
      sx={{
        border: "1px solid #58575112",
        width: "336px",
        minHeight: "556px",
        borderRadius: "12px",
        backgroundColor: "#F1F1F1",
        margin: 1,
        padding: "15px 20px",
      }}
      key={item.id}
    >
      <Typography
        component="span"
        sx={{
          backgroundColor: item.color,
          padding: "4px 10px",
          fontWeight: 500,
          fontSize: "14px",
          borderRadius: "4px",
        }}
      >
        {item.label}
      </Typography>
    </Card>
  );
};

export default BoardCard;

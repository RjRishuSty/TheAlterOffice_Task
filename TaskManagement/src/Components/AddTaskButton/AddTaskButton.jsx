import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

const AddTaskButton = ({ useIn }) => {
  return (
    <>
      {useIn === "filterHeader" ? (
        <Button
          variant="contained"
          sx={{
            width: "152px",
            height: "48px",
            backgroundColor: "#7B1984",
            borderRadius: "41px",
            color: "#ffff",
            fontWeight: 700,
            fontSize: "14px",
          }}
        >
          Add Task
        </Button>
      ) : (
        <Button
          variant="text"
          startIcon={<AddIcon />}
          sx={{ fontWeight: 700, fontSize: 14, color: "#000000CC" }}
        >
          Add Task
        </Button>
      )}
    </>
  );
};

export default AddTaskButton;

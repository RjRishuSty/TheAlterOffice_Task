import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { openTaskForm } from "../../Redux/Slices/TaskFormSlice";
import Modal from "../Modal/Modal";

const AddTaskButton = ({ useIn }) => {
  const { open, component } = useSelector((state) => state.taskForm);
  const task = useSelector((state) => state.task);
  console.log("button", task);
  
  const dispatch = useDispatch();

  return (
    <>
      {/* TODO: (create task) with form Modal */}
      {open && component === "filterHeader" && <Modal />}
      {useIn === "filterHeader" ? (
        <Button
          variant="contained"
          onClick={() => dispatch(openTaskForm("filterHeader"))}
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
        <Box sx={{ borderBottom: "1px solid #0000001A" }}>
          <Button
            onClick={() => dispatch(openTaskForm("InAccordion"))}
            variant="text"
            startIcon={<AddIcon sx={{ color: "#7B1984", fontSize: "18px" }} />}
            sx={{ fontWeight: 700, fontSize: 14, color: "#000000CC" }}
          >
            Add Task
          </Button>
        </Box>
      )}
    </>
  );
};

export default AddTaskButton;

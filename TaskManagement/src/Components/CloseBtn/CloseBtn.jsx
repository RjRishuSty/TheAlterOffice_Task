import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  closeTaskForm,
  closeTaskFormAndResetTask,
} from "../../Redux/Slices/TaskFormSlice";

const CloseBtn = ({ selectedTask }) => {
  const dispatch = useDispatch();

  return (
    <IconButton
      sx={{ fontSize: "24px", color: "#000000" }}
      onClick={() =>
        dispatch(selectedTask ? closeTaskFormAndResetTask() : closeTaskForm())
      }
    >
      <CloseIcon />
    </IconButton>
  );
};

export default CloseBtn;

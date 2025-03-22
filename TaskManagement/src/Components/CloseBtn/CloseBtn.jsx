import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { closeTaskForm } from "../../Redux/Slices/TaskFormSlice";

const CloseBtn = () => {
  const dispatch = useDispatch();

  return (
    <IconButton
      sx={{ fontSize: "24px", color: "#000000" }}
      onClick={() => dispatch(closeTaskForm())}
    >
      <CloseIcon />
    </IconButton>
  );
};

export default CloseBtn;

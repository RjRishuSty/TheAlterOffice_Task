import { Box, Button } from "@mui/material";
import React from "react";
import { closeTaskForm } from "../../Redux/Slices/TaskFormSlice";
import { useDispatch } from "react-redux";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

const FormBtnInAccordion = () => {
  const dispach = useDispatch();
  return (
    <>
      <Button
        endIcon={<KeyboardReturnIcon sx={{ color: "#fff" }} />}
        variant="contained"
        sx={{
          backgroundColor: "#7B1984",
          borderRadius: "60px",
          height: "30px",
          color: "#fff",
          fontWeight: 700,
          fontSize: "14px",
          padding:'10px 20px',
          mr: 2,
        }}
      >
        Add
      </Button>
      <Button
        variant="text"
        sx={{ color: "#000000", fontSize: "14px", fontWeight: 700 }}
        onClick={() => dispach(closeTaskForm())}
      >
        Cancel
      </Button>
    </>
  );
};

export default FormBtnInAccordion;

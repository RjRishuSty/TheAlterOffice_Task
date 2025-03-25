import { Button } from "@mui/material";
import React from "react";
import { closeTaskForm } from "../../Redux/Slices/TaskFormSlice";
import { useDispatch } from "react-redux";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const AccordionFormSubmitBtn = () => {
  const dispach = useDispatch();
  return (
    <>
      <Button
        startIcon={<AddCircleOutlineIcon sx={{ color: "#fff" }} />}
        variant="contained"
        type='submit'
        size="small"
        sx={{
          backgroundColor: "#7B1984",
          borderRadius: "60px",
          height: "auto",
          color: "#fff",
          fontWeight: 700,
          fontSize: "14px",
          mr: 1,
        }}
      >
        Add
      </Button>
      <Button
      size="small"
        variant="text"
        sx={{ color: "#000000", fontSize: "14px", fontWeight: 700 }}
        onClick={() => dispach(closeTaskForm())}
      >
        Cancel
      </Button>
    </>
  );
};

export default AccordionFormSubmitBtn;

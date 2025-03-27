import { Box, Button, useMediaQuery } from "@mui/material";
import Styles from "./Modal.module.css";
import React from "react";
import { useDispatch } from "react-redux";
import {
  closeTaskForm,
  closeTaskFormAndResetTask,
} from "../../Redux/Slices/TaskFormSlice";

const ModalFooter = ({ selectedTask }) => {
   const isMobile = useMediaQuery("(max-width:800px)");
  const dispatch = useDispatch();
  return (
    <Box
      className={Styles.cardFooter}
      sx={{ padding:isMobile?" 20px 15px 35px 15px":"20px" }}
    >
      <Button
        onClick={() =>
          dispatch(selectedTask ? closeTaskFormAndResetTask() : closeTaskForm())
        }
        variant="contained"
        sx={{
          backgroundColor: "#FFFFFF",
          border: "1px solid #00000030",
          mr: 2,
        }}
        className={Styles.btn}
      >
        Cancel
      </Button>
      <Button
        type="submit"
        variant="contained"
        sx={{ backgroundColor: "#7B1984", color: "#fff" }}
        className={Styles.btn}
      >
        {selectedTask ? "Update" : "Create"}
      </Button>
    </Box>
  );
};

export default ModalFooter;

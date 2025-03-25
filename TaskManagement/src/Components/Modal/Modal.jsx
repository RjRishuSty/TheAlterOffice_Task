import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import Styles from "./Modal.module.css";
import { useSelector } from "react-redux";
import ModalActivity from "./ModalActivity";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import FormInModal from "../FormLayout/FormInModal";

const Modal = ({ formData,setFormData, handleChange,handleUpdate }) => {
  
  const formOpen = useSelector((state) => state.taskForm);
  const selectedTask = useSelector((state) => state.task.selectedTask);

  if (!formOpen) return null;

  return (
    <Stack className={Styles.modal}>
      <Box
        sx={{
          width: selectedTask ? "60%" : "50%",
          height: "75vh",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <ModalHeader selectedTask={selectedTask} />
        <Grid container>
          <Grid
            item
            md={selectedTask ? 8 : 12}
            sx={{ backgroundColor: "#fff", padding: "0px 10px" }}
          >
            <FormInModal formData={formData} setFormData={setFormData}  handleChange={handleChange} />
          </Grid>
          {selectedTask && (
            <Grid item md={4} sx={{ display: selectedTask ? "block" : "none" }}>
              <ModalActivity selectedTask={selectedTask}/>
            </Grid>
          )}
        </Grid>

        <ModalFooter selectedTask={selectedTask} />
      </Box>
    </Stack>
  );
};

export default Modal;

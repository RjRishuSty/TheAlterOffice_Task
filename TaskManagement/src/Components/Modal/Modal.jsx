import React from "react";
import { Box, Grid, Stack, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import ModalActivity from "./ModalActivity";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import FormInModal from "../FormLayout/FormInModal";

const Modal = ({ formData, setFormData, handleChange, handleUpdate }) => {
  const isMobile = useMediaQuery("(max-width:800px)");
  const miniLaptop = useMediaQuery("(max-width:1000px)");
  const formOpen = useSelector((state) => state.taskForm);
  const selectedTask = useSelector((state) => state.task.selectedTask);
  console.log(selectedTask, "mod");

  if (!formOpen) return null;

  return (
    <Stack
      // TODO: modal css
      sx={{ 
        // border:'5px solid yellow',
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: isMobile ? "end" : "center",
        alignItems: isMobile ? "end" : "center",
        zIndex: "1300",
      }}
    >
      <Box
        sx={{
          // border: "5px solid black",
          width:
            selectedTask && miniLaptop
              ? "80%"
              : isMobile
              ? "100%"
              : selectedTask
              ? "60%"
              : miniLaptop
              ? "70%"
              : "50%",
          height: isMobile ? "auto" : "auto",
          borderRadius: isMobile ? "10px" : "20px",
          overflow: "hidden",
          // paddingBottom:isMobile?'20px':''
        }}
      >
        <ModalHeader selectedTask={selectedTask} />
        <Grid container>
          <Grid
            item
            xs={12}
            sm={8}
            md={selectedTask ? 8 : 12}
            sx={{
              width: selectedTask && miniLaptop ? "80%" : "100%",
              height: "auto",
              backgroundColor: "#fff",
              padding: "0px 10px",
            }}
          >
            <FormInModal
              formData={formData}
              setFormData={setFormData}
              handleChange={handleChange}
            />
          </Grid>
          {selectedTask && (
            <Grid item md={4} sx={{ display: selectedTask ? "block" : "none" }}>
              <ModalActivity selectedTask={selectedTask} />
            </Grid>
          )}
        </Grid>

        <ModalFooter selectedTask={selectedTask} />
      </Box>
    </Stack>
  );
};

export default Modal;

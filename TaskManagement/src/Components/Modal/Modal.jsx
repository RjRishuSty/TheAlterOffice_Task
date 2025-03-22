import React from "react";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import Styles from "./Modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import CloseBtn from "../CloseBtn/CloseBtn";
import InputForm from "../InputForm/InputForm";
import { closeTaskForm } from "../../Redux/Slices/TaskFormSlice";

const Modal = () => {
  const formOpen = useSelector((state) => state.taskForm);
  const dispatch = useDispatch();
  if (!formOpen) return;

  return (
    <Stack className={Styles.modal}>
      <Card className={Styles.card}>
        <Box className={Styles.cardHeader}>
          <Typography
            sx={{ fontSize: "24px", fontWeight: "600", color: "#2F2F2F" }}
          >
            Create Task
          </Typography>
          <CloseBtn />
        </Box>
        <Box className={Styles.form}>
          <InputForm />
        </Box>
        <Box className={Styles.cardFooter}>
          <Button
            onClick={() => dispatch(closeTaskForm())}
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
            variant="contained"
            sx={{ backgroundColor: "#7B1984", color: "#fff" }}
            className={Styles.btn}
          >
            Create
          </Button>
        </Box>
      </Card>
    </Stack>
  );
};

export default Modal;

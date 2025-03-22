import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { closeTaskForm } from "../../Redux/Slices/TaskFormSlice";
import { useDispatch } from "react-redux";

const FormInAccordion = () => {
  const dispach = useDispatch();
  return (
    <Grid container>
      <Grid item sx={{ border: "2px solid red" }}>
        <Box>
          <Button>Add</Button>
          <Button  onClick={() => dispach(closeTaskForm())}>Cancel</Button>
        </Box>
      </Grid>
      <Grid item sx={{ border: "2px solid red" }}></Grid>
      <Grid item sx={{ border: "2px solid red" }}></Grid>
    </Grid>
  );
};

export default FormInAccordion;

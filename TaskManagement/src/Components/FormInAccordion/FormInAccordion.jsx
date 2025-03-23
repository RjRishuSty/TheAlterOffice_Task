import {
  Box,
  Grid,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React from "react";
import FormBtnInAccordion from "./FormBtnInAccordion";
import Styles from "./FormInAccordion.module.css";

const FormInAccordion = () => {
  const fields = [
    {
      id: "title",
      label: "Task Title*",
      type: "text",
      placeholder: "Task title",
    },
    { id: "date", label: "Add date*", type: "date", placeholder: "" },
    {
      id: "status",
      label: "Task Status*",
      type: "select",
      options: [
        { id: "todo", label: "To-do" },
        { id: "in-progress", label: "In-Progress" },
        { id: "completed", label: "Completed" },
      ],
    },
    {
      id: "category",
      label: "Category*",
      type: "select",
      options: [
        { id: "work", label: "Work" },
        { id: "personal", label: "Personal" },
      ],
    },
  ];

  return (
    <>
      <Grid container spacing={2} sx={{ mt: 0 }}>
        {fields.map((item) => (
          <Grid item md={2} sx={{ mb: 2 }} key={item.id}>
            <Typography gutterBottom variant="caption">
              {item.label}
            </Typography>
            {item.type === "select" ? (
              <Select
                fullWidth
                size="small"
                defaultValue=""
                className={Styles.input}
              >
                <MenuItem value="" disabled>
                  choose
                </MenuItem>
                {item.options.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            ) : (
              <TextField
                fullWidth
                id={item.id}
                type={item.type}
                size="small"
                variant="outlined"
                placeholder={item.placeholder}
                className={Styles.input}
              />
            )}
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: -1 }}>
        <FormBtnInAccordion />
      </Box>
    </>
  );
};

export default FormInAccordion;

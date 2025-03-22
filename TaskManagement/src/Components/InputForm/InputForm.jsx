import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import Styles from "./InputForm.module.css";
import React from "react";
import SortTwoToneIcon from "@mui/icons-material/SortTwoTone";

const InputForm = () => {
  return (
    <Box component="form">
      <TextField
        className={Styles.input}
        id="title"
        placeholder="Task title"
        variant="outlined"
        size="small"
        sx={{ mb: 2 }}
      />
      <Box sx={{ mb: 1.5, position: "relative", width: "100%" }}>
        <SortTwoToneIcon
          sx={{
            position: "absolute",
            top: 12,
            left: 10,
            color: "gray",
            pointerEvents: "none",
          }}
        />
        <TextareaAutosize
          className={Styles.input}
          aria-label="Description"
          minRows={5}
          placeholder="Description"
          id="description"
          style={{
            width: "100%",
            padding: "12px 12px 12px 40px",
            lineHeight: 1.2,
            borderRadius: "4px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />
      </Box>
      <Grid mb={2} container spacing={2}>
        <Grid item xs={12} sm={12} md={4}>
          <Typography
            gutterBottom
            sx={{ fontSize: "12px", fontWeight: "600", color: "#00000099" }}
          >
            Task Category*
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Button
              variant="contained"
              sx={{ mr: 1 }}
              className={Styles.optionBtn}
            >
              Work
            </Button>
            <Button variant="contained" className={Styles.optionBtn}>
              Personal
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Typography
            gutterBottom
            sx={{ fontSize: "12px", fontWeight: "600", color: "#00000099" }}
          >
            Due on*
          </Typography>
          <TextField
            className={Styles.input}
            type="date"
            variant="outlined"
            size="small"
            fullWidth
            InputLabelProps={{
              shrink: true, // Ensures the label stays visible
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Typography
            gutterBottom
            sx={{ fontSize: "12px", fontWeight: "600", color: "#00000099" }}
          >
            Task Status*
          </Typography>
          <FormControl size="small" fullWidth className={Styles.input}>
            <Select
              sx={{ color: "#00000099", padding: "0px 10px" }}
              placeholder="Choose"
            >
              <MenuItem value="" disabled>
                Choose
              </MenuItem>
              <MenuItem value="todo">Todo</MenuItem>
              <MenuItem value="in-progress">In-Progress</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Box>
        <Typography
          gutterBottom
          sx={{ fontSize: "12px", fontWeight: "600", color: "#00000099" }}
        >
          Attachment
        </Typography>
        <TextField
          className={Styles.input}
          type="file"
          variant="outlined"
          size="small"
          fullWidth
        />
      </Box>
    </Box>
  );
};

export default InputForm;

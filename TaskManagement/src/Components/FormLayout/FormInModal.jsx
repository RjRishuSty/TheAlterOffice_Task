import React, { useEffect, useState } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import Styles from "./FormLayout.module.css";
import { fields } from "./FormFields";
import TextAreaInput from "../Inputs/TextAreaInput";
import CheckBoxInput from "../Inputs/CheckBoxInput";
import SelectInput from "../Inputs/SelectInput";
import { useDispatch, useSelector } from "react-redux";

const FormInModal = ({ formData, setFormData, handleChange }) => {

  const selectTask = useSelector((state) => state.task.selectedTask);

  // Sync formData with selected task when editing
  useEffect(() => {
    if (selectTask) {
      setFormData((prev) => ({
        ...prev,
        title: selectTask.title || "",
        description: selectTask.description || "",
        category: selectTask.category || "",
        status: selectTask.status || "",
        date: selectTask.date || "",
        attachment: selectTask.attachment || "",
      }));
    }
  }, [selectTask, setFormData]);

  return (
    <Box sx={{ width: "100%", height: "51.6vh", overflowY: "auto" }}>
      <Grid container rowSpacing={1} columnSpacing={2}>
        {fields.map((item) => (
          <React.Fragment key={item.id}>
            {item.type === "text" || item.type === "file" ? (
              <Grid item xs={12} sm={12} md={12} sx={{ mt: 1 }}>
                {item.type === "file" && (
                  <Typography
                    gutterBottom
                    sx={{
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#00000099",
                    }}
                  >
                    Attachment
                  </Typography>
                )}
                <TextField
                  className={Styles.input}
                  id={item.id}
                  name={item.id}
                  placeholder={item.placeholder}
                  variant="outlined"
                  size="small"
                  fullWidth
                  type={item.type}
                  value={item.type === "file" ? undefined : formData.title || ""}
                  onChange={handleChange}
                />
              </Grid>
            ) : null}

            {item.id === "description" && (
              <Grid item xs={12} sm={12} md={12}>
                <TextAreaInput
                  item={item}
                  formData={formData}
                  handleChange={handleChange}
                />
              </Grid>
            )}

            {item.id === "category" && (
              <Grid item xs={12} sm={12} md={4}>
                <CheckBoxInput
                  item={item}
                  formData={formData}
                  handleChange={handleChange}
                />
              </Grid>
            )}

            {item.id === "date" && (
              <Grid item xs={12} sm={12} md={4}>
                <Typography
                  gutterBottom
                  sx={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#00000099",
                  }}
                >
                  Due on
                </Typography>
                <TextField
                  className={Styles.input}
                  id={item.id}
                  name={item.id}
                  placeholder={item.placeholder}
                  variant="outlined"
                  size="small"
                  fullWidth
                  type={item.type}
                  value={formData.date || ""}
                  onChange={handleChange}
                />
              </Grid>
            )}

            {item.id === "status" && (
              <Grid item xs={12} sm={12} md={4}>
                <SelectInput
                  item={item}
                  formData={formData}
                  handleChange={handleChange}
                />
              </Grid>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};

export default FormInModal;

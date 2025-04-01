import React, { useEffect } from "react";
import { Box, Grid, TextField, Typography, useMediaQuery } from "@mui/material";
import Styles from "./FormLayout.module.css";
import { fields } from "./FormFields";
import TextAreaInput from "../Inputs/TextAreaInput";
import CheckBoxInput from "../Inputs/CheckBoxInput";
import SelectInput from "../Inputs/SelectInput";
import {  useSelector } from "react-redux";

const FormInModal = ({ formData, setFormData, handleChange }) => {
  const isMobile = useMediaQuery("(max-width:800px)");
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
    <Box
      sx={{
        // border:'2px solid red',
        width: "100% !important",
        height: isMobile ? "auto" : "auto",
        overflowY: "auto",
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {fields.map((item) => (
          <React.Fragment key={item.id}>
            {item.type === "text" || item.type === "file" ? (
              <Grid item xs={12} sm={12} md={12} sx={{ mt: 1, mb: 1 }}>
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
                  value={
                    item.type === "file" ? undefined : formData.title || ""
                  }
                  onChange={handleChange}
                />
              </Grid>
            ) : null}
            {/* TODO: uppload file image */}
            {/* {item.type === "file" && (
              <Box
                sx={{
                  width: "100%",
                  minHeight: "10vh",
                  border: "2px solid #F1F1F1",
                  borderRadius: 5,
                  mt: 1,
                  mb: 2,
                }}
              ></Box>
            )} */}

            {item.id === "description" && (
              <Grid item xs={12} sm={12} md={12} mb={2}>
                <TextAreaInput
                  item={item}
                  formData={formData}
                  handleChange={handleChange}
                />
              </Grid>
            )}

            {item.id === "category" && (
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                mb={2}
                sx={{ marginRight: { md: 1 } }}
              >
                <CheckBoxInput
                  item={item}
                  formData={formData}
                  handleChange={handleChange}
                />
              </Grid>
            )}

            {item.id === "date" && (
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                mb={2}
                sx={{ marginRight: { md: 1 } }}
              >
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
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                mb={1}
                sx={{ marginRight: { md: 1 } }}
              >
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

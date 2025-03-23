import { Grid, TextField, Typography } from "@mui/material";
import Styles from "./InputForm.module.css";
import React from "react";
import TextAreaInput from "./TextAreaInput";
import SelectInput from "./SelectInput";
import CheckBoxInput from "./CheckBoxInput";
import { fields } from "./inputData";

const InputForm = ({ formData, handleChange }) => {
  console.log("inputForm", formData);
  return (
    <Grid container rowSpacing={1} columnSpacing={2}>
      {fields.map((item) => (
        <React.Fragment key={item.id}>
          {item.type === "text" || item.type === "file" ? (
            <Grid item xs={12} sm={12} md={12} key={item.id} sx={{ mt: 1 }}>
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
                value={formData[item.id]}
                onChange={handleChange}
              />
            </Grid>
          ) : (
            ""
          )}
          {item.id === "description" && (
            <Grid item xs={12} sm={12} md={12} key={item.id}>
              <TextAreaInput
                item={item}
                formData={formData}
                handleChange={handleChange}
              />
            </Grid>
          )}
          {item.id === "category" && (
            <Grid item xs={12} sm={12} md={4} key={item.id}>
              <CheckBoxInput
                item={item}
                formData={formData}
                handleChange={handleChange}
              />
            </Grid>
          )}
          {item.id === "date" && (
            <Grid item xs={12} sm={12} md={4} key={item.id}>
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
                value={formData[item.id]}
                onChange={handleChange}
              />
            </Grid>
          )}
          {item.id === "status" && (
            <Grid item xs={12} sm={12} md={4} key={item.id}>
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
  );
};

export default InputForm;

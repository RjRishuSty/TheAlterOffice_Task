import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import Styles from "./FormLayout.module.css";
import CheckBoxInput from "../Inputs/CheckBoxInput";
import SelectInput from "../Inputs/SelectInput";
import AccordionFormSubmitBtn from "../AccordionBox/AccordionFormSubmitBtn";

const FormInAccordion = ({ remainingFields, formData, handleChange }) => {
  return (
    <>
      <Grid container spacing={2} sx={{ mt: 0 }}>
        {remainingFields.map((item) => (
          <Grid item md={2} sx={{ mb: 2 }} key={item.id}>
            {item.id === "title" || item.id === "date" ? (
              <>
                <Typography gutterBottom variant="caption">
                  {item.label}
                </Typography>
                <TextField
                  fullWidth
                  id={item.id}
                  name={item.id}
                  type={item.type}
                  size="small"
                  variant="outlined"
                  placeholder={item.placeholder}
                  className={Styles.input}
                  onChange={handleChange}
                />
              </>
            ) : (
              ""
            )}
            {item.id === "category" && (
              <CheckBoxInput
                item={item}
                formData={formData}
                handleChange={handleChange}
              />
            )}
            {item.id === "status" && (
              <SelectInput
                item={item}
                formData={formData}
                handleChange={handleChange}
              />
            )}
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 0 }}>
        <AccordionFormSubmitBtn />
      </Box>
    </>
  );
};

export default FormInAccordion;

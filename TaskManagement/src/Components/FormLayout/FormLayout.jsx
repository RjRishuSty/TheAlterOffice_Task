import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../../Redux/Slices/TaskSlice";
import { fields } from "./FormFields";
import { Stack } from "@mui/material";
import FormInAccordion from "./FormInAccordion";
import Modal from "../Modal/Modal";
import { formatDate } from "../FormateDate/FormateDate";
import { enqueueSnackbar } from "notistack";

const FormLayout = () => {
  const selectTask = useSelector((state) => state.task.selectedTask);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    date: "",
    status: "",
    attachment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const formattedValue =
      name === "date" ? formatDate(value, "DD-MM-YYYY") : value;

    setFormData({ ...formData, [name]: formattedValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidate()) {
      dispatch(addTask(formData));
      enqueueSnackbar('Task Created Successfully!', {variant:'success'});
    }
  };

  const handleValidate = () => {
    if (formData.title === "") {
      enqueueSnackbar('Title field is required!', {variant:'error'});
      return false;
    }
    if( formData.category === ''){
      enqueueSnackbar('Category field is required!', {variant:'error'});
      return false;
    }
    if(formData.status === ''){
      enqueueSnackbar('Status field is required', {variant:'error'})
      return false;
    }
    return true;
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (selectTask) {
      dispatch(updateTask({ id: selectTask.id, ...formData }));
    }
  };
  const { open, component } = useSelector((state) => state.taskForm);
  const remainingFields = fields.filter(
    (item) => item.id !== "description" && item.id !== "attachment"
  );

  return (
    <Stack component="form" onSubmit={selectTask ? handleUpdate : handleSubmit}>
      {/* TODO: (create task) with form Modal and Form in Accordion */}
      {(open && component === "filterHeader") ||
      (open && component === "mobileHeader") ? (
        <>
          <Modal
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
          />
        </>
      ) : (
        <FormInAccordion
          formData={formData}
          handleChange={handleChange}
          remainingFields={remainingFields}
        />
      )}
    </Stack>
  );
};

export default FormLayout;

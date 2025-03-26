import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../../Redux/Slices/TaskSlice";
import { fields } from "./FormFields";
import { Box, Stack } from "@mui/material";
import FormInAccordion from "./FormInAccordion";
import Modal from "../Modal/Modal";
import MobileSizeForm from "../MobileSizeForm/MobileSizeForm";

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(formData));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (selectTask) {
      dispatch(updateTask({ id: selectTask.id, ...formData })); // ✅ Correct structure
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

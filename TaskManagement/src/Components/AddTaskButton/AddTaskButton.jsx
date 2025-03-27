import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { openTaskForm } from "../../Redux/Slices/TaskFormSlice";
import FormLayout from "../FormLayout/FormLayout";

const AddTaskButton = ({ useIn }) => {
  const isMobile = useMediaQuery("(max-width:800px)");
  const { open, component } = useSelector((state) => state.taskForm);
  const dispatch = useDispatch();

  return (
    <>
      {/* TODO: (create task) with form Modal */}
      {open &&
        (component === "filterHeader" || component === "mobileHeader") && (
          <FormLayout />
        )}

      {useIn === "filterHeader" || useIn === "mobileHeader" ? (
        <Button
          variant="contained"
          onClick={() =>
            dispatch(
              openTaskForm(
                useIn === "filterHeader" ? "filterHeader" : "mobileHeader"
              )
            )
          }
          sx={{
            width: "152px",
            height: isMobile ? "auto" : "48px",
            backgroundColor: "#7B1984",
            borderRadius: "41px",
            color: "#ffff",
            fontWeight: 700,
            fontSize: "14px",
          }}
        >
          Add Task
        </Button>
      ) : (
        <Box
          sx={{
            // border:'3px solid red',
            position: "sticky",
            top: 0,
            zIndex: 10,
            padding:'10px 0px',
            backgroundColor:'#F1F1F1',
            borderBottom: "1px solid #0000001A",
          }}
        >
          <Button
            onClick={() => dispatch(openTaskForm("InAccordion"))}
            variant="text"
            startIcon={<AddIcon sx={{ color: "#7B1984", fontSize: "18px" }} />}
            sx={{ fontWeight: 700, fontSize: 14, color: "#000000CC" }}
          >
            Add Task
          </Button>
        </Box>
      )}
    </>
  );
};

export default AddTaskButton;

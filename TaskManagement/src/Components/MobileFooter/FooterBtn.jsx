import { Button, IconButton, useMediaQuery } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../../Redux/Slices/TaskSlice";
import { unChecked } from "../../Redux/Slices/CheckedTask";

const FooterBtn = () => {
  const xSmall = useMediaQuery("(max-width:410px)");
  const checkedTask = useSelector((state) => state.check);
  const dispatch = useDispatch();
  return (
    <>
      {xSmall ? (
        <>
          <IconButton>
            <EditIcon fontSize="small" sx={{ color: "#fff" }} />
          </IconButton>
          <IconButton
            onClick={() => {
              if (checkedTask.length > 0) {
                checkedTask.forEach((task) =>
                  dispatch(unChecked({ id: task.id }))
                );
                checkedTask.forEach((task) => dispatch(deleteTask(task.id)));
              }
            }}
          >
            <DeleteIcon fontSize="small" sx={{ color: "#E13838" }} />
          </IconButton>
        </>
      ) : (
        <>
          <Button
            variant="contained"
            sx={{
              color: "#FFFFFF",
              fontSize: 12,
              fontWeight: 600,
              borderRadius: 12,
              border: "0.2px solid #FFFFFF",
              backgroundColor: "#8D8A8A24",
              mr: 1.5,
            }}
          >
            Status
          </Button>
          <Button
            onClick={() => {
              if (checkedTask.length > 0) {
                checkedTask.forEach((task) =>
                  dispatch(unChecked({ id: task.id }))
                );
                checkedTask.forEach((task) => dispatch(deleteTask(task.id)));
              }
            }}
            variant="contained"
            sx={{
              color: "#E13838",
              fontSize: 12,
              fontWeight: 600,
              borderRadius: 12,
              border: "0.2px solid #E13838",
              backgroundColor: "#FF353524",
            }}
          >
            Delete
          </Button>
        </>
      )}
    </>
  );
};

export default FooterBtn;

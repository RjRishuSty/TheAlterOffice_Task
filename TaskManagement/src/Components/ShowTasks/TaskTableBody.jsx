import React, { useState } from "react";
import {
  TableCell,
  TableRow,
  Checkbox,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Card,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Styles from "./TaskTableBody.module.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DragAndDrop from "../DragAndDrop/DragAndDrop";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useDispatch } from "react-redux";
import { openTaskForm } from "../../Redux/Slices/TaskFormSlice";
import {
  setSelectedTaskToUpdate,
  deleteTask,
} from "../../Redux/Slices/TaskSlice";

const TaskTableBody = ({ item }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  // TODO: Drag & Drop functionality
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });
  const style = { transition, transform: CSS.Transform.toString(transform) };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    dispatch(setSelectedTaskToUpdate(item)); // Set task to update
    dispatch(openTaskForm("filterHeader")); // Open form modal
    handleMenuClose();
  };

  const handleDelete = () => {
    dispatch(deleteTask(item.id)); // Remove task from Redux & localStorage
    handleMenuClose();
  };
  return (
    <TableRow
      ref={setNodeRef}
      style={style}
      key={item.id}
      className={Styles.tableRow}
    >
      <TableCell
        className={Styles.tableCell}
        sx={{
          all: "unset",
          display: "flex",
          justifyContent: item.title && "start",
          alignItems: "center",
        }}
      >
        <Checkbox
          size="small"
          sx={{
            color: "#231F20",
            "&.Mui-checked": {
              color: "#231F20",
              borderColor: "#231F20",
            },
          }}
        />
        <div {...attributes} {...listeners} style={{ cursor: "grab" }}>
          <DragAndDrop />
        </div>

        <CheckCircleIcon
          sx={{
            fontSize: 18,
            cursor: "pointer",
            color: item.status === "completed" ? "#1B8D17" : "#231F20",
            mr: 1,
          }}
        />

        <Typography
          className={Styles.text}
          sx={{
            textDecoration:
              item.status === "completed" ? "line-through" : "none",
          }}
        >
          {item.title}
        </Typography>
      </TableCell>
      <TableCell
        className={Styles.tableCell}
        sx={{
          all: "unset",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography className={Styles.text}>{item.date}</Typography>
      </TableCell>
      <TableCell
        className={Styles.tableCell}
        sx={{
          all: "unset",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card className={Styles.card}>{item.status}</Card>
      </TableCell>
      <TableCell
        className={Styles.tableCell}
        sx={{
          all: "unset",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography className={Styles.text}> {item.category}</Typography>
      </TableCell>
      <TableCell
        className={Styles.tableCell}
        sx={{
          all: "unset",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton onClick={handleMenuOpen}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleEdit}>
            <EditIcon sx={{ mr: 1, fontSize: "16px", color: "#000" }} />
            <Typography
              sx={{ fontSize: "16px", fontWeight: "600", color: "#000000" }}
            >
              Edit
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleDelete} sx={{ color: "red" }}>
            <DeleteIcon sx={{ mr: 1, fontSize: "16px", color: "#DA2F2F" }} />
            <Typography
              sx={{ fontSize: "16px", fontWeight: "600", color: "#DA2F2F" }}
            >
              Delete
            </Typography>
          </MenuItem>
        </Menu>
      </TableCell>
    </TableRow>
  );
};

export default TaskTableBody;

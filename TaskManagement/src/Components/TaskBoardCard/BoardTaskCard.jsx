import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import {
  deleteTask,
  setSelectedTaskToUpdate,
} from "../../Redux/Slices/TaskSlice";
import { openTaskForm } from "../../Redux/Slices/TaskFormSlice";

const BoardTaskCard = ({ item }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  // TODO: Drag & Drop functionality
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition,
    cursor: "grab",
  };

  const handleMenuOpen = (event) => {
    console.log("Open")
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    console.log("close")
    setAnchorEl(null);
  };

  const handleEdit = () => {
    dispatch(setSelectedTaskToUpdate(item));
    dispatch(openTaskForm("filterHeader"));
    handleMenuClose();
  };

  const handleDelete = () => {
    dispatch(deleteTask(item.id));
    handleMenuClose();
  };
  return (
    <Card
      ref={setNodeRef}
      key={item.id}
      style={ style }
      {...attributes} {...listeners}
      sx={{
        border: "0.5px solid #58575147",
        borderRadius: "10px",
        width: "100%",
        maxHeight: "110px",
        position: "relative",
        mb: 1.5,
        overflow: "hidden",
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              fontSize: 16,
              fontWeight: 700,
              color: "#000000",
              textDecoration:
                item.status === "completed" ? "line-through" : "none",
              textAlign: "start",
              flexGrow: 1,
            }}
          >
            {item.title}
          </Typography>
          {/* More Options */}
          <IconButton size="small" onClick={handleMenuOpen}>
            <MoreHorizIcon />
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
        </Box>

        <Box display="flex" justifyContent="space-between" mt={4}>
          <Typography
            variant="body2"
            color="#00000085"
            sx={{ fontSize: 10, fontWeight: 600 }}
          >
            {item.category}
          </Typography>
          <Typography
            variant="body2"
            color="#00000085"
            sx={{ fontSize: 10, fontWeight: 600 }}
          >
            {item.date}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BoardTaskCard;

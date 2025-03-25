import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import Styles from "./Modal.module.css";

const ModalActivity = ({ selectedTask }) => {
  console.log("InAcitivity",selectedTask);
  if (!selectedTask) return;

  const activityLog = [
    { message: "You created this task", timestamp: selectedTask.createdAt },
    selectedTask.previousStatus && selectedTask.status && {
      message: `You changed status from ${selectedTask.previousStatus} to ${selectedTask.status}`,
      timestamp: selectedTask.updatedAt,
    },
    selectedTask.attachment && {
      message: "You uploaded a file",
      timestamp: selectedTask.updatedAt,
    },
  ].filter(Boolean);

  const formatDate = (dateString) => {
    if (!dateString) return "Invalid Date";
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? "Invalid Date" : date.toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  
  return (
    <Stack
      sx={{
        width: "100%",
        height: "51.7vh",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "start",
        backgroundColor: "#F1F1F1",
      }}
    >
      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 600,
          color: "#00000099",
          padding: "10px 0px 10px 10px",
          width: "100%",
          backgroundColor: "#fff",
          borderBottom: "1px solid #00000021",
          borderLeft: "3px solid #00000021",
        }}
      >
        Activity
      </Typography>
      <Grid container sx={{ p: "10px", mt: 1 }}>
        {activityLog.length > 0 ? (
          activityLog.map((item, index) => (
            <React.Fragment key={index}>
              <Grid item md={7} mb={2}>
                <Typography sx={{ textAlign: "start" }} className={Styles.text}>
                  {item.message}
                </Typography>
              </Grid>
              <Grid item md={5} mb={2}>
                <Typography sx={{ textAlign: "end" }} className={Styles.text}>
                  {formatDate(item.timestamp)}
                </Typography>
              </Grid>
            </React.Fragment>
          ))
        ) : (
          <Typography sx={{ textAlign: "center", width: "100%", p: 2 }}>
            No activity found
          </Typography>
        )}
      </Grid>
    </Stack>
  );
};

export default ModalActivity;

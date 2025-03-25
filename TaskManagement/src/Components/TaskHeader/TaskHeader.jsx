import { Box, Table, TableCell, TableHead, TableRow } from "@mui/material";

import React from "react";
import TaskDateHeaderIcon from "../TaskDateHeaderIcon/TaskDateHeaderIcon";

const TaskHeader = () => {
  const headerData = [
    { label: "Task name", id: "taskName" },
    { label: "Due on", id: "dueOn" },
    { label: "Task Status", id: "tastStatus" },
    { label: "Task Category", id: "category" },
    { label: "", id: "Actions" },
  ];
  return (
    <Table sx={{ width: "100%" }}>
      <TableHead>
        <TableRow
          sx={{
            // border:'1px solid green',
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 5px 0px 5px",
          }}
        >
          {headerData.map((item) => (
            <TableCell
              key={item.label}
              sx={{
                all: "unset",
                // border: "2px solid red",
                width: "100%",
                fontSize: 14,
                fontWeight: 700,
                color: "#00000099",
                textAlign: item.id === "taskName" ? "start" : "center",
                backgroundColor: "transparent",
              }}
            >
              {item.id === "dueOn" ? (
                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                  {item.label} <TaskDateHeaderIcon />
                </Box>
              ) : (
                item.label
              )}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    </Table>
  );
};

export default TaskHeader;

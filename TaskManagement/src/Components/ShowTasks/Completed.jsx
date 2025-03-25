import { Table, TableBody, Typography } from "@mui/material";
import React from "react";
import TaskTableBody from "./TaskTableBody";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import TaskNotFound from "../TaskNotFound/TaskNotFound";

const Completed = ({ task,item }) => {
    
  return (
    <>
      {task.length > 0 ? (
        <Table sx={{ width: "100%" }}>
          <TableBody>
            <SortableContext
              items={task.map((item) => item.id)}
              strategy={verticalListSortingStrategy}
            >
              {task.map((item) => (
                <TaskTableBody key={item.id} item={item} />
              ))}
            </SortableContext>
          </TableBody>
        </Table>
      ) : (
        <TaskNotFound item={item}/>
      )}
    </>
  );
};

export default Completed;

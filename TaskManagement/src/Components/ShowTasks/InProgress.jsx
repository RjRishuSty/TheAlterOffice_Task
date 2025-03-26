import { Box, Table, TableBody, Typography } from "@mui/material";
import React from "react";
import TaskTableBody from "./TaskTableBody";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import TaskNotFound from "../TaskNotFound/TaskNotFound";
import { useSelector } from "react-redux";
import BoardTaskCard from "../TaskBoardCard/BoardTaskCard";

const InProgress = ({ task, item }) => {
  const tabValue = useSelector((state) => state.tab);

  return (
    <>
      {tabValue === "list" ? (
        task.length > 0 ? (
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
          <TaskNotFound item={item} />
        )
      ) : task.length > 0 ? (
        <Box sx={{ mt: 2.5, width: "100%" }}>
          <SortableContext
            items={task.map((item) => item.id)}
            strategy={verticalListSortingStrategy}
          >
            {task.map((item) => (
              <BoardTaskCard key={item.id} item={item} />
            ))}
          </SortableContext>
        </Box>
      ) : (
        <TaskNotFound item={item} />
      )}
    </>
  );
};

export default InProgress;

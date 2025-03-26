import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import TodoTask from "./TodoTask";
import InProgress from "./InProgress";
import Completed from "./Completed";
import { reorderTasks } from "../../Redux/Slices/TaskSlice";

const ShowTasks = ({ item, categorizedTasks }) => {
  
  const dispatch = useDispatch();
  const taskData = useSelector((state) => state.task.task);



  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = taskData.findIndex((task) => task.id === active.id);
    const newIndex = taskData.findIndex((task) => task.id === over.id);

    if (oldIndex !== -1 && newIndex !== -1) {
      const newOrder = arrayMove(taskData, oldIndex, newIndex);
      dispatch(reorderTasks(newOrder)); 
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
      {item.id === "todo" && <TodoTask task={categorizedTasks.todo} item={item}/>}
      {item.id === "in-progress" && <InProgress task={categorizedTasks["in-progress"]} item={item} />}
      {item.id === "completed" && <Completed task={categorizedTasks.completed} item={item} />}
    </DndContext>
  );
};

export default ShowTasks;

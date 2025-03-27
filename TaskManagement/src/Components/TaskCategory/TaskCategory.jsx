import { Grid } from "@mui/material";
import React from "react";
import AccordionBox from "../AccordionBox/AccordionBox";
import { useSelector } from "react-redux";
import SearchTasksNotFound from "../SearchTasksNotFound/SearchTasksNotFound";
import BoardCard from "../TaskBoardCard/BoardCard";

const TaskCategory = () => {
  const taskData = useSelector((state) => state.task.task);
  const searchText = useSelector((state) => state.searchText.text);
  const tabValue = useSelector((state) => state.tab);
  console.log("cat", tabValue);

  const taskTypes = [
    { label: "Todo", id: "todo", color: "#FAC3FF" },
    { label: "In-Progress", id: "in-progress", color: "#85D9F1" },
    { label: "Completed", id: "completed", color: "#CEFFCC" },
  ];

  // Categorize tasks based on status
  const categorizedTasks = {
    todo: taskData.filter((task) => task.status === "todo"),
    "in-progress": taskData.filter((task) => task.status === "in-progress"),
    completed: taskData.filter((task) => task.status === "completed"),
  };

  // Filter based on search text
  const filteredTasks = {
    todo: categorizedTasks.todo.filter((task) =>
      task.title.toLowerCase().includes(searchText.toLowerCase())
    ),
    "in-progress": categorizedTasks["in-progress"].filter((task) =>
      task.title.toLowerCase().includes(searchText.toLowerCase())
    ),
    completed: categorizedTasks.completed.filter((task) =>
      task.title.toLowerCase().includes(searchText.toLowerCase())
    ),
  };

  const hasResults =
    filteredTasks.todo.length > 0 ||
    filteredTasks["in-progress"].length > 0 ||
    filteredTasks.completed.length > 0;

  return (
    <Grid
      container
      sx={{
        width: "100%",
        minHeight: !hasResults ? "70vh" : "0px",
        alignItems: !hasResults ? "center" : "",
      }}
    >
      {searchText ? (
        hasResults ? (
          tabValue === "list" ? (
            taskTypes.map(
              (item) =>
                filteredTasks[item.id].length > 0 && (
                  <Grid item xs={12} key={item.id}>
                    <AccordionBox
                      item={item}
                      todo={filteredTasks.todo}
                      progress={filteredTasks["in-progress"]}
                      completed={filteredTasks.completed}
                    />
                  </Grid>
                )
            )
          ) : (
            taskTypes.map(
              (item) =>
                filteredTasks[item.id].length > 0 && (
                  <BoardCard
                    item={item}
                    todo={filteredTasks.todo}
                    progress={filteredTasks["in-progress"]}
                    completed={filteredTasks.completed}
                  />
                )
            )
          )
        ) : (
          <Grid item xs={12} sm={12} md={12}>
            <SearchTasksNotFound />
          </Grid>
        )
      ) : tabValue === "list" ? (
        taskTypes.map((item) => (
          <Grid item xs={12} key={item.id} mb={2}>
            <AccordionBox
              item={item}
              todo={categorizedTasks.todo}
              progress={categorizedTasks["in-progress"]}
              completed={categorizedTasks.completed}
            />
          </Grid>
        ))
      ) : (
        taskTypes.map(
          (item) =>
            filteredTasks[item.id].length > 0 && (
              <BoardCard
                item={item}
                todo={filteredTasks.todo}
                progress={filteredTasks["in-progress"]}
                completed={filteredTasks.completed}
              />
            )
        )
      )}
    </Grid>
  );
};

export default TaskCategory;

import { Grid, useMediaQuery } from "@mui/material";
import React from "react";
import AccordionBox from "../AccordionBox/AccordionBox";
import { useSelector } from "react-redux";
import SearchTasksNotFound from "../SearchTasksNotFound/SearchTasksNotFound";
import BoardCard from "../TaskBoardCard/BoardCard";
import AllFilteredTask from "../FilteredTaskShow/AllFilteredTask";

const TaskCategory = () => {
  const isMobile = useMediaQuery("(max-width:800px)");
    const miniLaptop = useMediaQuery("(max-width:1270px)");
  const taskData = useSelector((state) => state.task.task);
  const searchText = useSelector((state) => state.searchText.text);
  const tabValue = useSelector((state) => state.tab);
  const filterCategory = useSelector((state) => state.filter.category);
  const filterDate = useSelector((state) => state.filter.date);
  
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

  // Filter based on search text or category and date
  const filteredTasks = {
    todo: searchText
      ? categorizedTasks.todo.filter((task) =>
          task.title.toLowerCase().includes(searchText.toLowerCase())
        )
      : filterCategory
      ? categorizedTasks.todo.filter(
          (item) => item.category.toLowerCase() === filterCategory.toLowerCase()
        )
      : filterDate
      ? categorizedTasks.todo.filter((item) => item.date === filterDate)
      : "",

    "in-progress": searchText
      ? categorizedTasks["in-progress"].filter((task) =>
          task.title.toLowerCase().includes(searchText.toLowerCase())
        )
      : filterCategory
      ? categorizedTasks["in-progress"].filter(
          (item) => item.category.toLowerCase() === filterCategory.toLowerCase()
        )
      : filterDate
      ? categorizedTasks["in-progress"].filter(
          (item) => item.date === filterDate
        )
      : "",
    completed: searchText
      ? categorizedTasks.completed.filter((task) =>
          task.title.toLowerCase().includes(searchText.toLowerCase())
        )
      : filterCategory
      ? categorizedTasks.completed.filter(
          (item) => item.category.toLowerCase() === filterCategory.toLowerCase()
        )
      : filterDate
      ? categorizedTasks.completed.filter((item) => item.date === filterDate)
      : "",
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
      {searchText || filterCategory || filterDate ? (
        hasResults ? (
          <AllFilteredTask
            taskTypes={taskTypes}
            filteredTasks={filteredTasks}
          />
        ) : (
          <Grid item xs={12} sm={12} md={12}>
            <SearchTasksNotFound />
          </Grid>
        )
      ) : tabValue === "board" ? (
        taskTypes.map((item) => (
          <Grid item xs={12} sm={6} md={miniLaptop?4:3} key={item.id} mb={2} sx={{display:isMobile?'none':'flex',justifyContent:'center',alignItems:'center'}} >
            <BoardCard
              item={item}
              todo={categorizedTasks.todo}
              progress={categorizedTasks["in-progress"]}
              completed={categorizedTasks.completed}
            />
          </Grid>
        ))
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
        ""
      )}
    </Grid>
  );
};

export default TaskCategory;

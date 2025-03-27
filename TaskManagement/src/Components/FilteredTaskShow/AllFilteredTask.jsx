import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import AccordionBox from "../AccordionBox/AccordionBox";
import BoardCard from "../TaskBoardCard/BoardCard";

const AllFilteredTask = ({ taskTypes, filteredTasks }) => {
  const tabValue = useSelector((state) => state.tab);
  return (
    <>
      {tabValue === "list"
        ? taskTypes.map(
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
        : taskTypes.map(
            (item) =>
              filteredTasks[item.id].length > 0 && (
                <BoardCard
                  item={item}
                  todo={filteredTasks.todo}
                  progress={filteredTasks["in-progress"]}
                  completed={filteredTasks.completed}
                />
              )
          )}
    </>
  );
};

export default AllFilteredTask;

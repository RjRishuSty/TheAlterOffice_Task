import { Box,Stack } from "@mui/material";
import React from "react";
import Search from "../Search/Search";
import FilterByBtn from "./FilterByBtn";
import AddTaskButton from "../AddTaskButton/AddTaskButton";

const FilterSection = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: "0px 1.8rem",
        marginTop:1
      }}
    >
      <Box
        sx={{
          width: "70%",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <FilterByBtn />
      </Box>
      <Box
        sx={{
          width: "30%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Search />
        <AddTaskButton useIn="filterHeader"/>
      </Box>
    </Stack>
  );
};

export default FilterSection;

import { Box,Stack, useMediaQuery } from "@mui/material";
import React from "react";
import Search from "../Search/Search";
import FilterByBtn from "./FilterByBtn";
import AddTaskButton from "../AddTaskButton/AddTaskButton";

const FilterSection = () => {
  const isMobile = useMediaQuery("(max-width:800px)");
  const miniLaptop = useMediaQuery("(max-width:1362px)");
  return (
    <Stack
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: isMobile?"0rem 0.5rem":"0px 1.8rem",
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
        {!isMobile?<FilterByBtn />:""}
      </Box>
      <Box
        sx={{
          width: miniLaptop?"70%":"30%",
          display: "flex",
          justifyContent:isMobile?"end": "space-around",
          alignItems: "center",
        }}
      >
       {!isMobile? <Search />:""}
       {isMobile?<AddTaskButton useIn="mobileHeader"/>:<AddTaskButton useIn="filterHeader"/>} 
      </Box>
    </Stack>
  );
};

export default FilterSection;

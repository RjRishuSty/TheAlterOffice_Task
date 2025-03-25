import { Box, Stack } from "@mui/material";
import React from "react";
import TaskHeader from "../../Components/TaskHeader/TaskHeader";
import TaskCategory from "../../Components/TaskCategory/TaskCategory";
import { useSelector } from "react-redux";

const Home = () => {
  const tabValue = useSelector((state) => state.tab);

  return (
    <Stack sx={{ padding: "0rem 1.9rem 3rem 1.9rem" }}>
      {tabValue !== "board" && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 1.5,
            borderTop: "1px solid #0000001A",
          }}
        >
          <TaskHeader />
        </Box>
      )}

      <Box
        sx={{
          marginTop: 1.5,
        }}
      >
        <TaskCategory />
      </Box>
    </Stack>
  );
};

export default Home;

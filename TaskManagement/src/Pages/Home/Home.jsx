import { Box, Stack } from "@mui/material";
import React, { useContext } from "react";
import TaskHeader from "../../Components/TaskHeader/TaskHeader";
import { useAuth0 } from "@auth0/auth0-react";
import TaskCategory from "../../Components/TaskCategory/TaskCategory";
import { DataContext } from "../../App";

const Home = () => {
  const { tabValue } = useContext(DataContext);
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <Stack sx={{ padding: "0rem 1.9rem 3rem 1.9rem" }}>
      {tabValue !== "board" && (
        <Box
          sx={{
            // border: "2px solid yellow",
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
          // border: "2px solid red",
          marginTop: 1.5,
        }}
      >
        <TaskCategory />
      </Box>
    </Stack>
  ) : null;
};

export default Home;

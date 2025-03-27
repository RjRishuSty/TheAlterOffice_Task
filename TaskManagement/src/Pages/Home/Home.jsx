import { Box, Stack, useMediaQuery } from "@mui/material";
import React from "react";
import TaskHeader from "../../Components/TaskHeader/TaskHeader";
import TaskCategory from "../../Components/TaskCategory/TaskCategory";
import { useSelector } from "react-redux";
import FilterByBtn from "../../Components/FilterSection/FilterByBtn";
import Search from "../../Components/Search/Search";
import MobileFooter from "../../Components/MobileFooter/MobileFooter";

const Home = () => {
  const checkedTask = useSelector((state)=>state.check);
  const isMobile = useMediaQuery("(max-width:800px)");
  const miniLaptop = useMediaQuery("(max-width:1362px)");
  const tabValue = useSelector((state) => state.tab);
  

  return (
    <Stack
      sx={{ padding: miniLaptop ? "0rem 0.5rem" : "0rem 1.9rem 3rem 1.9rem" }}
    >
      {tabValue !== "board" && (
        <Box 
          sx={{
            // border:'2px solid red',
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 1.5,
            borderTop: !isMobile ? "1px solid #0000001A" : "",
          }}
        >
          {isMobile ? (
            <Box sx={{ width: "100%", flexDirection: "column" }}>
              <Box sx={{ width: "100%" }}>
                <FilterByBtn />
              </Box>
              <Box sx={{ width: "100%", mt: 2 }}>
                
                <Search forResponsive="responsive" />
              </Box>
            </Box>
          ) : (
            <TaskHeader />
          )}
        </Box>
      )}

      <Box
        sx={{
          marginTop: 1.5,
        }}
      >
        <TaskCategory />
      </Box>
      { checkedTask.length>0&& <MobileFooter />}
    </Stack>
  );
};

export default Home;

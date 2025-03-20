import { Box, Tab, Tabs } from "@mui/material";
import React, { useContext, useState } from "react";
import ReorderOutlinedIcon from "@mui/icons-material/ReorderOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import { DataContext } from "../../App";

const TabsComp = () => {
  const { tabValue, setTabValue } = useContext(DataContext);
  console.log(tabValue,"Tab Page");
  const tabLabel = [
    {
      label: "List",
      value: "list",
      icon: <ReorderOutlinedIcon />,
    },
    {
      label: "Board",
      value: "board",
      icon: <DashboardOutlinedIcon />,
    },
  ];

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        textColor="inherit"
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: "#000000",
            top: "60px",
            height: "2px",
          },
          minHeight: "auto",
        }}
      >
        {tabLabel.map((item) => (
          <Tab
            key={item.value}
            icon={React.cloneElement(item.icon, {
              sx: { color: tabValue === item.value ? "#000" : "gray" },
            })}
            iconPosition="start"
            value={item.value}
            label={item.label}
            sx={{
              color: tabValue === item.value ? "#000" : "gray",
              fontWeight: 600,
              fontSize: "16px",
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default TabsComp;

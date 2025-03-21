import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import ReorderOutlinedIcon from "@mui/icons-material/ReorderOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import { useDispatch, useSelector } from "react-redux";
import { TabChange } from "../../Redux/Slices/TabSlice";

const TabsComp = () => {
  const dispatch = useDispatch();
  const tabValue = useSelector((state)=>state.tab);
  // console.log("TabCompFile",tabValue);

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
    dispatch(TabChange(newValue));
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

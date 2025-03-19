import { Box } from "@mui/material";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const TabsComp = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", border:'1px solid red'}}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Item One" sx={{color:'inherit'}} />
        <Tab label="Item Two"  sx={{color:'inherit'}}/>
        <Tab label="Item Three" sx={{color:'inherit'}} />
      </Tabs>
    </Box>
  );
};

export default TabsComp;

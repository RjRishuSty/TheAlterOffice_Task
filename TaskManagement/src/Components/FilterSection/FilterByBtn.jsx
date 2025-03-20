import React, { useState } from "react";
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const FilterByBtn = () => {
  const filters = [
    {
      label: "Category",
      id: "category",
      options: ["Work", "PERSONAL"],
    },
    {
      label: "Due Date",
      id: "dueDate",
      options: ["Today", "This Week", "This Month"],
    },
  ];

  const [selectedFilters, setSelectedFilters] = useState({
    category: "",
    dueDate: "",
  });

  const handleChange = (event, id) => {
    setSelectedFilters((prev) => ({ ...prev, [id]: event.target.value }));
  };

  return (
    <Box display="flex" gap={2} alignItems="center">
      <Typography
        sx={{ fontWeight: 600, fontSize: "12px", color: "#00000099" }}
      >
        Filter by:
      </Typography>

      {filters.map(({ id, label, options }) => (
        <FormControl
          key={id}
          size="small"
          sx={{
            width: 150,
            borderRadius: "60px",
            backgroundColor: "transparent",
            border: "1px solid #00000033",
          }}
        >
          <Select
            id={id}
            value={selectedFilters[id]}
            onChange={(e) => handleChange(e, id)}
            displayEmpty
            IconComponent={ArrowDropDownIcon}
            sx={{ color: "#00000099", padding: "0px 10px" }}
          >
            <MenuItem value="" disabled>
              {label}
            </MenuItem>
            {options.map((option, index) => (
              <MenuItem
                key={index}
                value={option}
                sx={{
                  fontSize: 12,
                  textTransform: "uppercase",
                }}
              >
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
    </Box>
  );
};

export default FilterByBtn;

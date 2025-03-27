import React, { useState } from "react";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../FormateDate/FormateDate";
import {
  addFilterByCategory,
  addFilterByDate,
} from "../../Redux/Slices/FilterSlice";

const FilterByBtn = () => {
  const xSmall = useMediaQuery("(max-width:410px)");
  const task = useSelector((state) => state.task.task) || [];
  const dispatch = useDispatch();
  const [selectedFilters, setSelectedFilters] = useState({
    category: "",
    date: "",
  });

  const filters = [
    {
      label: "Category",
      id: "category",
      options: ["Work", "Personal"],
    },
    {
      label: "Due Date",
      id: "dueDate",
      options: [
        ...new Set(task.map((item) => item.date)),
      ],
    },
  ];
  const handleChange = (event, id) => {
    const value = event.target.value;
    setSelectedFilters((prev) => ({ ...prev, [id]: value }));

    if (id === "category") {
      dispatch(addFilterByCategory(value));
    } else {
      dispatch(addFilterByDate(value));
    }
  };
  return (
    <Box
      sx={{ width: "100%" }}
      display="flex"
      gap={1}
      alignItems={xSmall ? "start" : "center"}
      flexDirection={xSmall ? "column" : "row"}
    >
      <Typography
        component="p"
        sx={{
          width: "auto",
          fontWeight: 600,
          fontSize: "12px",
          color: "#00000099",
        }}
      >
        Filter by:
      </Typography>

      <Box sx={{ width: "auto", flexWrap: "nowrap" }}>
        {filters.map(({ id, label, options }) => (
          <FormControl
            key={id}
            size="small"
            sx={{
              width: xSmall ? "auto" : 130,
              borderRadius: "60px",
              backgroundColor: "transparent",
              border: "1px solid #00000033",
              mr: 1,
            }}
          >
            <Select
              id={id}
              value={selectedFilters[id] || ""}
              onChange={(e) => handleChange(e,id)}
              displayEmpty
              IconComponent={ArrowDropDownIcon}
              sx={{ color: "#00000099", padding: xSmall ? "0px" : "0px 10px" }}
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
    </Box>
  );
};

export default FilterByBtn;

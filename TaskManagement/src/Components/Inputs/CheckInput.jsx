import { Checkbox } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToChecked, unChecked } from "../../Redux/Slices/CheckedTask";

const CheckInput = ({ item }) => {
  const checkedTask = useSelector((state) => state.check);
  const dispatch = useDispatch();

  return (
    <>
      <Checkbox
        checked={checkedTask.some((task) => task.id === item.id)}
        onChange={() => {
          const isChecked = checkedTask.some((task) => task.id === item.id);
          if (isChecked) {
            dispatch(unChecked({ id: item.id })); 
          } else {
            dispatch(addToChecked(item)); 
          }
        }}
        size="small"
        sx={{
          color: "#231F20",
          "&.Mui-checked": { color: "#231F20", borderColor: "#231F20" },
        }}
      />
    </>
  );
};

export default CheckInput;

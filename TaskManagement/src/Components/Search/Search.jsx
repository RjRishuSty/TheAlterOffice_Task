import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearSearchText, setSearchText } from "../../Redux/Slices/SearchText";

const Search = ({ forResponsive }) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const timeId = setTimeout(() => {
      dispatch(setSearchText(search));
    }, 500);
    return () => clearTimeout(timeId);
  },[search,dispatch]);

  const handleClear = () => {
    setSearch("");
    dispatch(clearSearchText());
  };

  return (
    <>
      <TextField
        fullWidth
        id="search"
        value={search}
        placeholder="Search"
        variant="outlined"
        onChange={(e)=>setSearch(e.target.value)}
        size="small"
        sx={{
          width: forResponsive === "responsive" ? "100%" : "50%",
          height: "auto",
          borderRadius: "60px",
          border: "1px solid #0000006B",
          fontSize: "12px",
          fontWeight: 600,
          padding: search.length > 0 ? "0px 10px" : "0",
          "& fieldset": { border: "none" },
        }}
        InputProps={{
          startAdornment: search.length === 0 && (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "gray" }} size="medium" />
            </InputAdornment>
          ),
          endAdornment: search && (
            <InputAdornment position="end">
              <IconButton onClick={handleClear}>
                <ClearIcon sx={{ color: "gray" }} size="medium" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default Search;

import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const handleClear = () => {
    setSearch("");
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <TextField
        fullWidth
        id="search"
        value={search}
        placeholder="Search"
        variant="outlined"
        onChange={handleSearch}
        size="small"
        sx={{
          width: "50%",
          height: "auto",
          borderRadius: "60px",
          border: "1px solid #0000006B",
          fontSize: "12px",
          fontWeight: 600,
          padding: search.length>0?'0px 10px':'0',
          "& fieldset": { border: "none" },
        }}
        InputProps={{
          startAdornment: search.length === 0 &&(
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

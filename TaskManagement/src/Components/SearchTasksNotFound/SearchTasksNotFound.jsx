import { Grid, Typography } from "@mui/material";
import React from "react";
import notFoundImg from "../../assets/taskNotfound.png";

const SearchTasksNotFound = () => {
  return (
    <Grid container sx={{ justifyContent:'center' }}>
      <Grid item xs={12} sm={12} md={12} sx={{display:'flex',justifyContent:'center' }}>
        <img src={notFoundImg} alt="Not Found" width={290} height={213} />
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Typography
          component="p"
          sx={{
            padding: "0px 20px",
            mt: 2,
            textAlign: "center",
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          It looks like we can't find any results that match.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SearchTasksNotFound;

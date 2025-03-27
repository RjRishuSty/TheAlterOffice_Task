import { Chip, Grid } from "@mui/material";
import React from "react";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import FooterBtn from "./FooterBtn";
import { useSelector, useDispatch } from "react-redux";
import { clearChecked } from "../../Redux/Slices/CheckedTask";

const MobileFooter = () => {
  const checkedTask = useSelector((state) => state.check);
  const dispatch = useDispatch();

  return (
    <Grid
      container
      component="footer"
      sx={{
        width: "100%",
        padding: "15px 10px",
        backgroundColor: "#1A1C20",
        marginBottom: 0,
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        flexDirection: "row",
      }}
    >
      <Grid item xs={6} sm={6} md={6} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        {checkedTask.length > 0 && (
          <Chip
            label={`${checkedTask.length} Tasks Selected`}
            onDelete={() => dispatch(clearChecked())}
            sx={{
              border: "0.2px solid #FFFFFF",
              borderRadius: 12,
              backgroundColor: "#000",
              color: "#fff",
              fontSize: "14px",
              mr: 2,
              "& .MuiChip-deleteIcon": {
                color: "#bbb",
                "&:hover": { color: "#fff" },
              },
            }}
          />
        )}
        <LibraryAddCheckIcon fontSize="small" sx={{ color: "white" }} />
      </Grid>
      <Grid item xs={6} sm={6} md={6} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <FooterBtn />
      </Grid>

      {/* <Box sx={{ width: xSmall ? 'auto' : '50%', display: 'flex', alignItems: 'center' }}>
                
            </Box>
            <Box sx={{ width: xSmall ? 'auto' : '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                
            </Box> */}
    </Grid>
  );
};

export default MobileFooter;

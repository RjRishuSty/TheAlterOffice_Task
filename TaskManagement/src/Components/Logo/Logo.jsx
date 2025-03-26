import React from "react";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import { Box, Typography, useMediaQuery } from "@mui/material";

const Logo = ({ isMobile, useIn }) => {
  const xSmall = useMediaQuery("(max-width:347px)");
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isMobile ? "center" : "start",
        alignItems: isMobile ? "center" : "start",
      }}
    >
      <AssignmentOutlinedIcon
        sx={{
          display: "flex",
          mr: 1,
          color: useIn === "login" ? "#7B1984" : "inherit",
        }}
        fontSize="large"
      />
      {xSmall && useIn === "header" ? (
        ""
      ) : (
        <Typography
          variant="h6"
          sx={{
            fontWeight: useIn === "login" ? 700 : 600,
            color: useIn === "login" ? "#7B1984" : "inherit",
            fontFamily:
              useIn === "login"
                ? '"Urbanist", sans-serif'
                : '"Mulish", sans-serif',
            fontSize: useIn === "login" ? "26.19px" : "24px",
          }}
        >
          TaskBuddy
        </Typography>
      )}
    </Box>
  );
};

export default Logo;

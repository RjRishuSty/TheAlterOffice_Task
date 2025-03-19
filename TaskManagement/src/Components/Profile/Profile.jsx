import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Styles from "./Profile.module.css";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const Profile = () => {
  const { user, logout } = useAuth0();
  return (
    <>
      <Stack sx={{ flexGrow: 0, border:'1px solid red' }}>
        <Box
          sx={{
            width: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={user.picture}
            alt={user.name}
            className={Styles.userImg}
            sx={{ mr: 1 }}
          />
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "16px",
              ml: 1,
            }}
          >
            {user.given_name}
          </Typography>
        </Box>
        <Button
          variant="contained"
          size="medium"
          startIcon={
            <LogoutOutlinedIcon sx={{ fontSize: "16px", color: "#000000" }} />
          }
          sx={{
            textTransform: "capitalize",
            borderRadius: "12px",
            height: "40px",
            fontWeight: 600,
            mt:1,
            backgroundColor: "#FFF9F9",
            border: "1px solid #7B198426",
          }}
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Logout
        </Button>
      </Stack>
    </>
  );
};

export default Profile;

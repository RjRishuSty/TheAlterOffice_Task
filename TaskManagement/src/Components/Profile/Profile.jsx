import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Styles from "./Profile.module.css";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const Profile = () => {
  const { user, logout } = useAuth0();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <Stack sx={{ flexGrow: 0 }}>
        <Box
          sx={{
            width: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor:'pointer'
          }}
          onClick={() => setIsHovered(!isHovered)}
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
        {isHovered && (
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
              mt: 1,
              backgroundColor: "#FFF9F9",
              border: "1px solid #7B198426",
            }}
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Logout
          </Button>
        )}
      </Stack>
    </>
  );
};

export default Profile;

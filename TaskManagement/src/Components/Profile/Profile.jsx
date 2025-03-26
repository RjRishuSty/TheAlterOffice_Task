import React, { useState } from "react";
import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import Styles from "./Profile.module.css";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { getAuth, signOut } from "firebase/auth";
import { firebaseApp } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../Redux/Slices/UserSlice";

const auth = getAuth(firebaseApp);

const Profile = () => {
  const isMobile = useMediaQuery("(max-width:800px)");
  const xSmall = useMediaQuery("(max-width:347px)");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(userLogout());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Stack sx={{ flexGrow: 0 }}>
        <Box
          sx={{
            width: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            mt: isHovered && isMobile ? 2 : "",
          }}
          onClick={() => setIsHovered(!isHovered)}
        >
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className={Styles.userImg}
            sx={{ mr: 1 }}
          />
          {!xSmall ? (
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "16px",
                ml: 1,
              }}
            >
              {user?.displayName}
            </Typography>
          ) : (
            ""
          )}
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

              mb: isHovered && isMobile ? 1 : "",
            }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        )}
      </Stack>
    </>
  );
};

export default Profile;

import { Button } from "@mui/material";
import React from "react";
import googleLogo from "../../assets/google.png";
import { useAuth0 } from "@auth0/auth0-react";

const LoginByGoogle = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      variant="contained"
      startIcon={
        <img
          src={googleLogo}
          alt="Google Logo"
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
          }}
        />
      }
      sx={{
        width: "364px",
        height: "60px",
        textTransform: "capitalize",
        borderRadius: "18.91px",
        backgroundColor: "#292929",
        color: "#FFFFFF",
        fontFamily: '"Urbanist", sans-serif',
        fontWeight: 700,
        fontSize: "21.82px",
        mt:2
      }}
      onClick={() => loginWithRedirect()}
    >
      Login with Google
    </Button>
  );
};

export default LoginByGoogle;

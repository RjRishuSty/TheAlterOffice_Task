import { Button } from "@mui/material";
import React from "react";
import googleLogo from "../../assets/google.png";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseApp } from "../../firebase";
import { useDispatch } from "react-redux";
import { userLogin } from "../../Redux/Slices/UserSlice";

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const LoginByGoogle = () => {
  const dispatch = useDispatch();
  const handleGoogleLogin = async () => {
    try {
      const response = await signInWithPopup(auth, googleProvider);
      const user = response.user;
      dispatch(
        userLogin({
          displayName: user?.displayName || "Guest",
          photoURL:
            user?.photoURL ||
            "https://t4.ftcdn.net/jpg/08/06/58/03/360_F_806580330_nM9J5dzapvn7hGqEetnMThzp9qZn0HT9.jpg",
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
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
        mt: 2,
      }}
      onClick={handleGoogleLogin}
    >
      Login with Google
    </Button>
  );
};

export default LoginByGoogle;

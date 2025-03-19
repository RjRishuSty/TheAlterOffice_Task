import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Mulish", sans-serif',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          boxShadow: "none",
        },
      },
    },
   
  },
});

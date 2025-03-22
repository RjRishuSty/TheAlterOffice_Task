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
    MuiFormControl: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          border: "none",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiInputBase-root": {
            padding: 0,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          borderRadius: "60px",
          fontSize: "12px",
          fontWeight: 600,
          fontFamily: '"Mulish", sans-serif',
          color: "#00000099",
          "& .MuiSelect-select": {
            color: "#00000099",
          },
          "&.Mui-focused": {
            color: "#00000099",
          },
          "&.Mui-selected": {
            color: "#00000099",
          },
        },
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        minHeight: "auto",
        "& .MuiTabs-indicator": {
          display: "none",
        },
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: "none",
        fontSize: "16px",
        padding: "8px 16px",
        minHeight: "auto",
        color: "#000",
        "&.Mui-selected": {
          fontWeight: "bold",
          color: "#000 !important",
        },
      },
    },
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        boxShadow: "none",
        margin: 0,
        padding: 0,
        border: "none !important",
        backgroundColor: "transparent !important",
        "&::before": {
          display: "none",
        },
        "&.Mui-expanded": {
          backgroundColor: "transparent !important",
        },
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        minHeight: "unset",
        padding: "0 16px",
        backgroundColor: "transparent !important",
        "&.Mui-expanded": {
          minHeight: "unset",
          backgroundColor: "transparent !important",
        },
      },
      content: {
        margin: 0,
        "&.Mui-expanded": {
          margin: 0,
        },
      },
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        padding: "8px 16px",
        backgroundColor: "transparent !important",
      },
    },
  },

  
});

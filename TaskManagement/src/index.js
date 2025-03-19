import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-ey0utu62e37caak8.us.auth0.com"
    clientId="OWsOy8XZC2VSpg8aLp6zqvAjdFoHeZzx"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Auth0Provider>
);

import React from "react";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "../Pages/Login/Login";
import FilterSection from "../Components/FilterSection/FilterSection";

const Layout = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      {isAuthenticated ? (
        <>
          <Header />
          <FilterSection/>
          <Outlet />
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Layout;

import React from "react";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";
import Login from "../Pages/Login/Login";
import FilterSection from "../Components/FilterSection/FilterSection";
import { useSelector } from "react-redux";

const Layout = () => {
  const user = useSelector((state) => state.user);
  // console.log("LayOutFile:", user);

  return (
    <>
      {user ? (
        <>
          <Header />
          <FilterSection />
          <Outlet />
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Layout;

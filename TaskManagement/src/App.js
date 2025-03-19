import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./Pages/Login/Login";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: "",
        },
      ],
    },
    {
      path:'/login',
      element:<Login/>
    }
  ]);
  return <RouterProvider router={router} />;
};

export default App;

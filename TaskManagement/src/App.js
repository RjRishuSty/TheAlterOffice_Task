import React, { createContext, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
export const DataContext = createContext();

const App = () => {
  const [tabValue, setTabValue] = useState("list");
  console.log(tabValue,"App Page");
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <DataContext.Provider value={{tabValue,setTabValue}}>
      <RouterProvider router={router} />
    </DataContext.Provider>
  );
};

export default App;

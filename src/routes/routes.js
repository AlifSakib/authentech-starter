import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Register from "../components/Register";
import Wallet from "../components/Wallet";

import Main from "../layout/Main";
import ProvateRoute from "./ProvateRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: (
          <ProvateRoute>
            <Profile></Profile>
          </ProvateRoute>
        ),
      },
      {
        path: "/wallet",
        element: (
          <ProvateRoute>
            <Wallet></Wallet>
          </ProvateRoute>
        ),
      },
    ],
  },
]);

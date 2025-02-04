import { RouterProviderProps, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Registrasi from "../pages/Registrasi";
import AuthLayout from "../layouts/auth-layout";
import Home from "../pages/Home";
import DashboardLayout from "../layouts/dashboard-layout";
import Homepage from "../pages/dashboard/Homepage";
import TopUp from "../pages/dashboard/TopUp";
import Transaction from "../pages/dashboard/Transaction";
import Akun from "../pages/dashboard/Akun";

const router: RouterProviderProps["router"] = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registrasi",
        element: <Registrasi />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "topup",
        element: <TopUp />,
      },
      {
        path: "transaction",
        element: <Transaction />,
      },
      {
        path: "akun",
        element: <Akun />,
      },
    ],
  },
]);

export default router;

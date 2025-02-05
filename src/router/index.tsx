import { RouterProviderProps, createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import Registrasi from "../pages/auth/Registrasi";
import AuthLayout from "../layouts/auth-layout";
import Home from "../pages/home";
import DashboardLayout from "../layouts/dashboard-layout";
import Homepage from "../pages/dashboard/Homepage";
import TopUp from "../pages/dashboard/TopUp";
import Transaction from "../pages/dashboard/Transaction";
import Akun from "../pages/dashboard/Akun";
import ProtectedDashboard from "../components/protected-dashboard";
import DetailService from "../pages/dashboard/DetailService";

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
    element: <ProtectedDashboard />,
    children: [
      {
        path: "",
        element: <DashboardLayout />,
        children: [
          { path: "", element: <Homepage /> },
          { path: "topup", element: <TopUp /> },
          { path: "transaction", element: <Transaction /> },
          { path: "transaction/:service_code", element: <DetailService /> },
          { path: "akun", element: <Akun /> },
        ],
      },
    ],
  },
]);

export default router;

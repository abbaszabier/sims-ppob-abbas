import { RouterProviderProps, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Registrasi from "../pages/Registrasi";
import AuthLayout from "../layouts/auth-layout";
import Home from "../pages/Home";
import DashboardLayout from "../layouts/dashboard-layout";

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
        element: <div className="text-black">Dashboard</div>,
      },
      {
        path: "topup",
        element: <div className="text-black">Top Up</div>,
      },
      {
        path: "transaction",
        element: <div className="text-black">Transaction</div>,
      },
      {
        path: "akun",
        element: <div className="text-black">Akun</div>,
      },
    ],
  },
]);

export default router;

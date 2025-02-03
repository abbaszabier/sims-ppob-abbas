import { RouterProviderProps, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Registrasi from "../pages/Registrasi";
import AuthLayout from "../layouts/auth-layout";

const router: RouterProviderProps["router"] = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
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
]);

export default router;

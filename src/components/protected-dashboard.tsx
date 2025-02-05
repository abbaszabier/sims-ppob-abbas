import { Navigate, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/auth-slice";

export default function ProtectedDashboard() {
  const dispatch = useDispatch();

  const persistedState = localStorage.getItem("persist:auth")
    ? JSON.parse(localStorage.getItem("persist:auth") as string)
    : null;

  if (
    !persistedState?.token ||
    (persistedState?.expiresAt && Date.now() > persistedState.expiresAt)
  ) {
    dispatch(logout());
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

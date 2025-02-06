import { Outlet } from "react-router-dom";
import NavtopDashboard from "../components/navtop-dashboard";
import UserInfo from "../pages/dashboard/components/user-info";
import { useLocation } from "react-router-dom";

export default function DashboardLayout() {
  const location = useLocation();

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <NavtopDashboard />
      {location.pathname !== "/dashboard/akun" && <UserInfo />}
      <Outlet />
    </div>
  );
}

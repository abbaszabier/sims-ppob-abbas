import { Outlet } from "react-router-dom";
import NavtopDashboard from "../components/ui/navtop-dashboard";

export default function DashboardLayout() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <NavtopDashboard />
      <Outlet />
    </div>
  );
}

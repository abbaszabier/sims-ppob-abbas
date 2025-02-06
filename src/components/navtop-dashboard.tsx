import { useState } from "react";
import logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NavtopDashboard() {
  const navigate = useNavigate();
  const [isOpenHamburger, setIsOpenHamburger] = useState(false);
  return (
    <nav className="bg-white shadow-xs w-full border-b border-gray-100">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          className="flex bg-white justify-center items-center gap-2 cursor-pointer"
          onClick={() => navigate("/dashboard")}
        >
          <img
            src={logo}
            alt="Logo"
            className="w-[24px] h-[24px] object-cover"
          />
          <h2 className="text-lg font-semibold text-black">SIMS PPOB</h2>
        </button>

        <button
          onClick={() => setIsOpenHamburger(!isOpenHamburger)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <Menu size={20} />
        </button>

        <div
          className={`${
            isOpenHamburger ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-12 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li>
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm md:p-0 ${
                    isActive ? "text-red-500" : "text-gray-900"
                  } hover:text-red-500`
                }
              >
                Beranda
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/topup"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm md:p-0 ${
                    isActive ? "text-red-500" : "text-gray-900"
                  } hover:text-red-500`
                }
              >
                Top Up
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/transaction"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm md:p-0 ${
                    isActive ? "text-red-500" : "text-gray-900"
                  } hover:text-red-500`
                }
              >
                Transaction
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/akun"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm md:p-0 ${
                    isActive ? "text-red-500" : "text-gray-900"
                  } hover:text-red-500`
                }
              >
                Akun
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

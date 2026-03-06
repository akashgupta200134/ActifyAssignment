import { FaUser } from "react-icons/fa";
import { MdDashboardCustomize, MdManageAccounts } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-56 min-h-screen bg-gray-100 border-r p-6 shadow-md flex flex-col">

     
      <div className="flex items-center gap-2 mb-10">
        <MdDashboardCustomize className="h-7 w-7 text-black" />
        <p className="font-semibold text-xl">Dashboard</p>
      </div>

      <nav className="flex flex-col gap-3">
        <NavLink
          to="/table"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-md transition-all
            ${isActive
              ? "bg-blue-500 text-white font-semibold shadow-md"
              : "text-gray-700 hover:bg-gray-200"}`
          }
        >
          <MdManageAccounts className="w-6 h-6" />
          Accounts
        </NavLink>

        <NavLink
          to="/form"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-md transition-all
            ${isActive
              ? "bg-blue-500 text-white font-semibold shadow-md"
              : "text-gray-700 hover:bg-gray-200"}`
          }
        >
          <FaUser className="w-5 h-5" />
          Profile
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
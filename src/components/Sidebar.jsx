import { FaUser } from "react-icons/fa";
import { MdDashboardCustomize, MdManageAccounts } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-56 min-h-screen bg-gray-100 border-r p-6">


      <div className="flex items-center gap-2 mb-8">
        <MdDashboardCustomize className="h-7 w-7 text-black" />
        <p className="font-semibold text-xl">Dashboard</p>
      </div>

   
      <div className="flex flex-col gap-3">

        <NavLink
          to="/table"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-md transition
            ${
              isActive
                ? "bg-blue-400 text-white font-semibold"
                : "text-gray-700 hover:bg-gray-200"
            }`
          }
        >
          <MdManageAccounts className="w-8 h-8" />
          Accounts
        </NavLink>

        <NavLink
          to="/form"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-md transition
            ${
              isActive
                ? "bg-blue-400 text-white font-semibold"
                : "text-gray-700 hover:bg-gray-200"
            }`
          }
        >
          <FaUser className="w-5 h-6" />
          Profile
        </NavLink>

      </div>

    </div>
  );
}

export default Sidebar;
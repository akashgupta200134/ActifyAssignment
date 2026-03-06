import { useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import Sidebar from "./components/Sidebar";
import { MdMenu } from "react-icons/md";

function App() {

  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen">



      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed  top-12 left-[78%] z-50 bg-gray-200 p-2 rounded"
        onClick={() => setOpen(!open)}
      >
        <MdMenu size={24} />
      </button>



      {/* Sidebar */}
      <div
        className={`
          fixed md:static top-0 left-0 h-full z-40
          transform ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          transition-transform duration-300
        `}
      >
        <Sidebar />
      </div>



      {/* for routes */}
      <div className="flex-1 p-4 md:p-8 w-full">
        <AppRoutes />
      </div>

    </div>
  );
}

export default App;
import AppRoutes from "./routes/AppRoutes"
import Sidebar from "./components/Sidebar"
import { MdDashboardCustomize } from "react-icons/md";

function App() {

  return (
    <div className="flex">

      <Sidebar />

      <div className="p-4 flex-1">


        <AppRoutes />

      </div>

    </div>
  );
}

export default App;
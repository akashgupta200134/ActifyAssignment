import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from "../components/Table";
import Form from "../components/Form";

function AppRoutes() {
  return (
    <Routes>

      {/* default page
      <Route path="/" element={<Table />} /> */}

      <Route path="/table" element={<Table />} />

      <Route path="/form" element={<Form />} />
    </Routes>
  );
}

export default AppRoutes;

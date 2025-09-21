import About from "@/pages/about";
import Dashboard from "@/pages/dashboard";
import { Route, Routes } from "react-router";

export const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/sobre" element={<About />} />
    </Routes>
  );
};

export default RoutesConfig;

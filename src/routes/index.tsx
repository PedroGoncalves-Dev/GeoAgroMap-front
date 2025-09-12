import DashBoard from "@/pages/dashboard";
import { Route, Routes } from "react-router";

export const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
    </Routes>
  );
};

export default RoutesConfig;

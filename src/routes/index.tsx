import { BrowserRouter, Route, Routes } from "react-router";

export const RoutesConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesConfig;

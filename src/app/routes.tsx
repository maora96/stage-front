import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { DepartmentPage } from "../pages/department";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/:id" element={<DepartmentPage/>} />
    </Routes>
  );
}
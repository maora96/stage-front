import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { DepartmentPage } from "../pages/department";
import { ProcessPage } from "../pages/process";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/:id" element={<DepartmentPage/>} />
      <Route path="/process/:id" element={<ProcessPage/>} />
    </Routes>
  );
}
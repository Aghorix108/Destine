import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import AppLayout from "../Layouts/AppLayout";
function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;

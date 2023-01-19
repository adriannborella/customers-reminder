import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CustomerPage } from "../pages/customers/CustomerPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<CustomerPage></CustomerPage>}></Route>
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
}

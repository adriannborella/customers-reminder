import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Swal from "sweetalert2";
import { useAppStore } from "../hooks/useAppStore";
import { CustomerPage } from "../pages/customers/CustomerPage";

export default function AppRouter() {
  const { loading } = useAppStore();

  useEffect(() => {
    if (loading) {
      Swal.fire({
        title: "Cargando...",
        html: "",
      });
      Swal.showLoading();
    } else {
      Swal.close();
    }
  }, [loading]);

  return (
    <Routes>
      <Route path="/" element={<CustomerPage></CustomerPage>}></Route>
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
}

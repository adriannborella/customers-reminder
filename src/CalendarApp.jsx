import React from "react";
import { CustomNavBar } from "./ui";
import "bootstrap/dist/css/bootstrap.min.css";
import { CustomerPage } from "./pages/customers";

export default function CalendarApp() {
  return (
    <div className="container">
      <CustomNavBar />
      <hr />
      <CustomerPage></CustomerPage>
    </div>
  );
}

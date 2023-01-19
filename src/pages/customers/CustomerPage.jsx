import React from "react";
import { CustomerTable, CustomerModal } from "./components";
import Button from "react-bootstrap/Button";
import { BsPersonPlusFill } from "react-icons/bs";
import { CustomNavBar } from "../../ui/navbar/CustomNavBar";
import { useCustomerStore } from "../../hooks";

export function CustomerPage() {
  const { newRecord } = useCustomerStore();

  const onAddButton = () => {
    newRecord();
  };

  return (
    <>
      <CustomNavBar />
      <hr />
      <div className="container">
        <h4>CustomerPage</h4>
        <Button variant="primary" onClick={onAddButton}>
          Add <BsPersonPlusFill></BsPersonPlusFill>
        </Button>
        <hr />
        <CustomerTable />
        <CustomerModal />
      </div>
    </>
  );
}

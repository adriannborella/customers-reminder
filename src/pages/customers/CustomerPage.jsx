import React, { useState } from "react";
import { CustomerTable, CustomerModal } from "./components";
import Button from "react-bootstrap/Button";
import { BsPersonPlusFill } from "react-icons/bs";
import { usePocketBase } from "../hooks/usePocketBase";

export function CustomerPage() {
  const [show, setShow] = useState(false);
  const {
    data,
    GetAll,
    NewRecord,
    UpdateRecord,
    DeleteRecord,
    activeRecord,
    GetOne,
    InsertRecord,
  } = usePocketBase();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onEditCustomer = (record) => {
    GetOne(record.id);
    handleShow();
  };
  const onAddButton = () => {
    NewRecord();
    setShow(true);
  };

  const onSaveForm = (saveRecord) => {
    if (saveRecord.id !== undefined) {
      UpdateRecord(saveRecord);
    } else {
      InsertRecord(saveRecord);
    }
    handleClose();
  };

  const onDeleteRecord = (id) => {
    DeleteRecord(id);
  };

  return (
    <>
      <h4>CustomerPage</h4>
      <Button variant="primary" onClick={onAddButton}>
        Add <BsPersonPlusFill></BsPersonPlusFill>
      </Button>
      <hr />
      <CustomerTable
        onEditCustomer={onEditCustomer}
        records={data}
        onDeleteRecord={onDeleteRecord}
      ></CustomerTable>
      <CustomerModal
        showModal={show}
        handleClose={handleClose}
        onSaveForm={onSaveForm}
        record={activeRecord}
      ></CustomerModal>
    </>
  );
}

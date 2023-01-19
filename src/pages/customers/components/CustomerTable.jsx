import React from "react";
import { Button, Table } from "react-bootstrap";
import { BsPersonXFill, BsPencilFill } from "react-icons/bs";
import Swal from "sweetalert2";

export function CustomerTable({ onEditCustomer, records, onDeleteRecord }) {
  const onEditButton = (record) => {
    onEditCustomer(record);
  };

  const onDeleteButton = (id) => {
    Swal.fire({
      title: "Do you want to delete the record?",
      showCancelButton: true,
      confirmButtonText: "YES",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        onDeleteRecord(id);
      }
    });
  };

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record) => {
          const date_b = new Date(record.birth_date);
          return (
            <tr key={record.id}>
              <td>{record.first_name}</td>
              <td>{record.last_name}</td>
              <td>{date_b.toLocaleDateString("es")}</td>
              <td>
                <Button onClick={() => onEditButton(record)}>
                  <BsPencilFill></BsPencilFill>
                </Button>
                <Button onClick={() => onDeleteButton(record.id)}>
                  <BsPersonXFill></BsPersonXFill>
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

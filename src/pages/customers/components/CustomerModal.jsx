import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCustomerStore } from "../../../hooks";

export function CustomerModal() {
  const { showModal, activeRecord, onCancelForm, onSaveRecord } =
    useCustomerStore();

  const [newRecord, setNewActiveRecord] = useState(activeRecord);
  const { first_name, last_name, birth_date } = newRecord;

  useEffect(() => {
    if (activeRecord !== {}) {
      setNewActiveRecord({
        ...activeRecord,
        birth_date: activeRecord.birth_date,
      });
    }
  }, [activeRecord]);

  const onHandleSave = () => {
    console.log("Guardando");
    onSaveRecord(newRecord);
  };

  const onChangeInput = (property, target) => {
    setNewActiveRecord({
      ...newRecord,
      [property]: target.value,
    });
  };

  const handleClose = () => {
    onCancelForm();
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              placeholder="First Name"
              value={first_name}
              onChange={({ target }) => onChangeInput("first_name", target)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              placeholder="Last Name"
              value={last_name}
              onChange={({ target }) => onChangeInput("last_name", target)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Date of birtn</Form.Label>
            <DatePicker
              selected={birth_date}
              onChange={(date) =>
                setNewActiveRecord({ ...newRecord, birth_date: date })
              }
              className="form-control"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onHandleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

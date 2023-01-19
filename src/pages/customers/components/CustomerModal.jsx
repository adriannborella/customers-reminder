import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function CustomerModal({
  showModal = false,
  handleClose,
  onSaveForm,
  record,
}) {
  const [activeRecord, setActiveRecord] = useState(record);
  const { first_name, last_name, birth_date } = activeRecord;

  useEffect(() => {
    setActiveRecord(record);
  }, [record]);

  const onHandleSave = () => {
    const newRecord = {
      ...activeRecord,
      birth_date: activeRecord.birth_date.getTime(),
    };
    onSaveForm(newRecord);
  };

  const onChangeInput = (property, target) => {
    setActiveRecord({
      ...activeRecord,
      [property]: target.value,
    });
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
                setActiveRecord({ ...activeRecord, birth_date: date })
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

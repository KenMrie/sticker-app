import { useState } from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const CardInfo = ({ sticker }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        More info
      </Button>

      <Modal
        centered
        aria-labelledby="contained-modal-title-vcenter"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>{sticker.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={sticker.image} className="modalImg" />
          <p>{sticker.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <h5>${(sticker.price).toFixed(2)}</h5>
          <Button variant="success" onClick={null}>
            Buy
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

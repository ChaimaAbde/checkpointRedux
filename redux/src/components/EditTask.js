import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../redux/todoSlice/Todoslice";

const EditTask = ({ id }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edited, setEdited] = useState({
    Title: "",
    description: "",
  });
  return (
    <div>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{
          borderRadius: "4px",
          backgroundColor: "#fdd72b",
          border: "none",
          color: "white",
          padding: "16px 32px",
          textDecoration: "none",
          margin: "4px -200px 4px 291px",
          cursor: " pointer",
          height: "102px",
        }}
      >
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            className="inputt"
            style={{ marginRight: "100px" }}
            type={"text"}
            placeholder="Entrer task title"
            onChange={(e) => {
              setEdited({ ...edited, title: e.target.value });
            }}
          ></input>

          <input
            style={{ marginTop: "10px" }}
            className="inputt"
            type={"text"}
            placeholder="Entrer task description"
            onChange={(e) => {
              setEdited({ ...edited, description: e.target.value });
            }}
          ></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              dispatch(updateTask({ id: id, edited }));
            }}
          >
            Save Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditTask;

import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useAuth from "../../../context/AuthContext/useAuth";
import { addGrade } from "../../../services/teacherSubjects";
import { GradeInterface } from "../helper";
//import { Form } from 'semantic-ui-react'

const AddForm = (props: GradeInterface) => {
  const { onHide, show } = props;

  const { subject } = useParams();
  const { user } = useAuth();
  const currentUserGuid: string = user?.guid ?? "";
  const currentSubjectId: number = Number(subject);
  const [studentIDToAdd, setStudentIDToAdd] = useState(0);
  const [gradeTypeIDToAdd, setGradeTypeIDToAdd] = useState(0);
  const [commentaryToAdd, setCommentaryToAdd] = useState("");
  const [valueToAdd, setValueToAdd] = useState(0);

  function handleChangeCommentary(event: any) {
    setCommentaryToAdd(event.target.value.toString());
  }

  function handleChangeValue(event: any) {
    setValueToAdd(Number(event.target.value));
  }

  function handleChangeStudentId(event: any) {
    setStudentIDToAdd(Number(event.target.value));
  }

  function handleChangeGradeTypeId(event: any) {
    setGradeTypeIDToAdd(Number(event.target.value));
  }

  function handleSubmit(event: any) {
    addGrade(
      commentaryToAdd,
      valueToAdd,
      currentUserGuid,
      studentIDToAdd,
      currentSubjectId,
      gradeTypeIDToAdd
    );
    event.preventDefault();
  }

  return (
    <Modal size="xl" centered={true} show={show}>
      <Modal.Body>
        <Form.Label style={{ fontWeight: "bold" }}> Dodaj ocene</Form.Label>
        <Form onSubmit={handleSubmit}>
          <div style={{ margin: "5px" }} className="form-group">
            <small>Ocena </small>
            <Form.Control
              type="text"
              className="form-control"
              id="value"
              placeholder="np. 0"
              onChange={handleChangeValue}
            />
          </div>
          <div style={{ margin: "5px" }} className="form-group">
            <small>Komentarz </small>
            <Form.Control
              type="text"
              className="form-control"
              id="commentary"
              placeholder="np. ...przykladowy komentarz"
              onChange={handleChangeCommentary}
            />
          </div>
          <div style={{ margin: "5px" }} className="form-group">
            <small>ID Studenta</small>
            <Form.Control
              type="text"
              className="form-control"
              id="studentId"
              placeholder="np. 1111"
              onChange={handleChangeStudentId}
            />
          </div>
          <div style={{ margin: "5px" }} className="form-group">
            <small>ID Rodzaju Oceny </small>
            <Form.Control
              type="text"
              className="form-control"
              id="gradeTypeId"
              placeholder="np. 9999"
              onChange={handleChangeGradeTypeId}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "10px" }}
          >
            Submit
          </button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Zamknij</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddForm;

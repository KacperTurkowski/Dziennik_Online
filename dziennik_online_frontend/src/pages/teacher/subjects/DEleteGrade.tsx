import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useAuth from "../../../context/AuthContext/useAuth";
import { deleteGrade } from "../../../services/teacherSubjects";
import { GradeInterface } from "../helper";
//import { Form } from 'semantic-ui-react'

const DeleteForm = (props: GradeInterface) => {
  const { onHide, show } = props;
  const { user } = useAuth();
  const { subject } = useParams();
  const currentUserGuid: string = user?.guid ?? "";
  const currentSubjectId: number = Number(subject);
  const [GradeIDToDelete, setGradeIDToDelete] = useState(0);
  const [GradeTypeIDToDelete, setGradeTypeIDToDelete] = useState(0);

  function handleChangeGradeID(event: any) {
    setGradeIDToDelete(Number(event.target.value));
  }

  function handleChangeGradeTypeId(event: any) {
    setGradeTypeIDToDelete(Number(event.target.value));
  }

  function handleSubmit(event: any) {
    deleteGrade(
      currentUserGuid,
      currentSubjectId,
      GradeTypeIDToDelete,
      GradeIDToDelete
    );
    event.preventDefault();
  }

  return (
    <Modal size="xl" centered={true} show={show}>
      <Modal.Body>
        <Form.Label style={{ fontWeight: "bold" }}> Usun ocene</Form.Label>
        <Form onSubmit={handleSubmit}>
          <div className="form-group">
            <small>ID oceny </small>
            <Form.Control
              type="text"
              className="form-control"
              id="gradeId"
              placeholder="np. 1234"
              onChange={handleChangeGradeID}
            />
          </div>
          <div style={{ margin: "5px" }} className="form-group">
            <small>ID Rodzaju Oceny </small>
            <Form.Control
              type="text"
              className="form-control"
              id="c"
              placeholder="np. 2222"
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

export default DeleteForm;

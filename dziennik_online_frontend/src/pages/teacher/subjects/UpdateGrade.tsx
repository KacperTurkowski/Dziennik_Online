import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useAuth from "../../../context/AuthContext/useAuth";
import { updateGrade } from "../../../services/teacherSubjects";
import { GradeInterface } from "../helper";
//import { Form } from 'semantic-ui-react'

const UpgradeGrade = (props: GradeInterface) => {
  const { onHide, show } = props;

  const { subject } = useParams();
  const { user } = useAuth();
  const currentUserGuid: string = user?.guid ?? "";
  const currentSubjectId: number = Number(subject);
  const [studentIDToUpdate, setStudentIDToUpdate] = useState(0);
  const [gradeTypeIDToUpdate, setGradeTypeIDToUpdate] = useState(0);
  const [commentaryToUpdate, setCommentaryToUpdate] = useState("");
  const [valueToUpdate, setValueToUpdate] = useState(0);
  const [GradeIDToUpdate, setGradeIDToUpdate] = useState(0);

  function handleChangeCommentary(event: any) {
    setCommentaryToUpdate(event.target.value.toString());
  }

  function handleChangeValue(event: any) {
    setValueToUpdate(Number(event.target.value));
  }

  function handleChangeStudentId(event: any) {
    setStudentIDToUpdate(Number(event.target.value));
  }

  function handleChangeGradeTypeId(event: any) {
    setGradeTypeIDToUpdate(Number(event.target.value));
  }

  function handleChangeGradeID(event: any) {
    setGradeIDToUpdate(Number(event.target.value));
  }

  function handleSubmit(event: any) {
    updateGrade(
      commentaryToUpdate,
      valueToUpdate,
      studentIDToUpdate,
      currentSubjectId,
      gradeTypeIDToUpdate,
      GradeIDToUpdate,
      currentUserGuid
    );
    event.preventDefault();
  }

  return (
    <Modal size="xl" centered={true} show={show}>
      <Modal.Body>
        <Form.Label style={{ fontWeight: "bold" }}>
          {" "}
          Zaktualizuj ocene
        </Form.Label>
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

export default UpgradeGrade;

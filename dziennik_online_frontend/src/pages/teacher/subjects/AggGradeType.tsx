import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useAuth from "../../../context/AuthContext/useAuth";
import { addGradeType } from "../../../services/teacherSubjects";
import { GradeInterface } from "../helper";
//import { Form } from 'semantic-ui-react'

const AddGradeTypeForm = (props: GradeInterface) => {
  const { onHide, show } = props;

  const { subject } = useParams();
  const { user } = useAuth();
  const currentUserGuid: string = user?.guid ?? "";
  const currentSubjectId: number = Number(subject);

  const [gradeTypeName, setGradeTypeNameToAdd] = useState("");
  const [gradeTypWeight, setGradeTypeWeightToAdd] = useState(0);
  const [gradeDetailsToAdd, setGradeDetailsToAdd] = useState([{
    commentary: "",
    value: 0,
    studentId: 0,
  }]);

  function handleChangeValue(event: any) {
    const gradeDetailsToAddTemp = [{
      commentary: gradeDetailsToAdd[0].commentary,
      value: Number(event.target.value),
      studentId: gradeDetailsToAdd[0].studentId,
    }];
    setGradeDetailsToAdd(gradeDetailsToAddTemp);
  }

  function handleChangeCommentary(event: any) {
    const gradeDetailsToAddTemp = [{
      commentary: event.target.value.toString(),
      value: gradeDetailsToAdd[0].value,
      studentId: gradeDetailsToAdd[0].studentId,
    }];
    setGradeDetailsToAdd(gradeDetailsToAddTemp);
  }

  function handleChangeStudentId(event: any) {
    const gradeDetailsToAddTemp =[{
      commentary: gradeDetailsToAdd[0].commentary,
      value: gradeDetailsToAdd[0].value,
      studentId: Number(event.target.value),
    }];
    setGradeDetailsToAdd(gradeDetailsToAddTemp);
  }

  function handleChangeGradeTypeName(event: any) {
    setGradeTypeNameToAdd(event.target.value.toString());
  }

  function handleChangeGradeTypWeight(event: any) {
    setGradeTypeWeightToAdd(Number(event.target.value));
  }

  function handleSubmit(event: any) {
    addGradeType(
      gradeTypeName,
      gradeTypWeight,
      currentUserGuid,
      currentSubjectId,
      gradeDetailsToAdd[0]
    );
    event.preventDefault();
  }

  return (
    <Modal size="xl" centered={true} show={show}>
      <Modal.Body>
        <Form.Label style={{ fontWeight: "bold" }}>
          {" "}
          Dodaj Rodzaj Oceny
        </Form.Label>
        <Form onSubmit={handleSubmit}>
          <div style={{ margin: "5px" }} className="form-group">
            <small>Rodzaj Oceny </small>
            <Form.Control
              type="text"
              className="form-control"
              id="gradeTypeName"
              placeholder="np. Przykladowy Typ"
              onChange={handleChangeGradeTypeName}
            />
          </div>
          <div style={{ margin: "5px" }} className="form-group">
            <small>Waga rodzaju oceny </small>
            <Form.Control
              type="text"
              className="form-control"
              id="gradeTypWeight"
              placeholder="np. 3"
              onChange={handleChangeGradeTypWeight}
            />
          </div>

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
              placeholder="np. ...Przykladowy komentarz"
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

export default AddGradeTypeForm;

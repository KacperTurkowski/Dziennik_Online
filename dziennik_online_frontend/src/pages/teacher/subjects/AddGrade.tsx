import React, { MouseEventHandler, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../../context/AuthContext/useAuth";
import { addGrade } from "../../../services/teacherSubjects";

export interface GradeInterfaceProps {
  onHide: MouseEventHandler;
  show: boolean;
  gradeTypeId: number;
  userId: number;
}

const AddForm = (props: GradeInterfaceProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { onHide, show, userId, gradeTypeId } = props;
  const { subject } = useParams();
  const { user } = useAuth();
  const currentUserGuid: string = user?.guid ?? "";
  const currentSubjectId: number = Number(subject);
  const [commentaryToAdd, setCommentaryToAdd] = useState("");
  const [valueToAdd, setValueToAdd] = useState(0);
  const navigate = useNavigate();

  function handleChangeCommentary(event: any) {
    setCommentaryToAdd(event.target.value.toString());
  }

  function handleChangeValue(event: any) {
    setValueToAdd(Number(event.target.value));
  }

  const handleSubmit = async (event: any): Promise<void> => {
    event.preventDefault();
    try {
      await addGrade(
        currentUserGuid,
        currentSubjectId,
        commentaryToAdd,
        valueToAdd,
        userId,
        gradeTypeId
      );
      navigate(0);
      onHide;
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

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
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "10px" }}
          >
            Zapisz
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

import React, { useState } from "react";
import { Button } from "react-bootstrap";
import AddForm from "../subjects/AddGrade";
import ModalWithStatistics from "./ModalWithStatistics";

interface IButtonModalProps {
  gradeTypeId: number;
  userGuid: string;
  userId:number;
}
const GradeButtonModal = (props: IButtonModalProps) => {
  const { gradeTypeId, userGuid, userId } = props;
  const [AddGradeShow, setAddGrade] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  return (
    <span>
    <Button
      style={{ margin: "10px" }}
      variant="primary"
      onClick={() => setAddGrade(true)}
    >
     +
    </Button>
    <AddForm gradeTypeId={gradeTypeId} userId={userId} show={AddGradeShow} onHide={() => setAddGrade(false)} />
  </span>
  );
};

export default GradeButtonModal;


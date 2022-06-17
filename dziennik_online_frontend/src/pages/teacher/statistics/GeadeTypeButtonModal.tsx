import React, { useState } from "react";
import { Button } from "react-bootstrap";
import AddForm from "../subjects/AddGrade";
import AddGradeTypeForm from "../subjects/AggGradeType";
import ModalWithStatistics from "./ModalWithStatistics";

interface IButtonModalProps {
  gradeTypeId: number;
  userGuid: string;
  userId:number;
}
const GradeButtonModal = (props: IButtonModalProps) => {
const [AddGradeTypeShow, setAddGradeType] = useState(false);
  const { gradeTypeId, userGuid, userId } = props;
  const [AddGradeShow, setAddGrade] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  return (

<>
<span>
        <Button
          style={{ margin: "10px" }}
          variant="primary"
          onClick={() => setAddGradeType(true)}
        >
          Dodaj Typ Oceny
        </Button>
        <AddGradeTypeForm
          show={AddGradeTypeShow}
          onHide={() => setAddGradeType(false)}
        />
      </span>




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

  </>


  );
};

export default GradeButtonModal;


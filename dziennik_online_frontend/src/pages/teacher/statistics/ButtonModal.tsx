import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ModalWithStatistics from "./ModalWithStatistics";
import * as Icon from "react-bootstrap-icons";

interface IButtonModalProps {
  gradeTypeId: number;
  userGuid: string;
  gradeTypeName: string;
}
const ButtonModal = (props: IButtonModalProps) => {
  const { gradeTypeId, userGuid, gradeTypeName } = props;
  const [modalShow, setModalShow] = useState(false);
  return (
    <span>
      <Button
        style={{ borderRadius: "5px" }}
        variant="primary"
        onClick={() => setModalShow(true)}
      >
        {<Icon.BarChartFill />}
      </Button>
      <ModalWithStatistics
        gradeTypeName={gradeTypeName}
        show={modalShow}
        onHide={() => setModalShow(false)}
        gradeTypeId={gradeTypeId}
        userGuid={userGuid}
      />
    </span>
  );
};

export default ButtonModal;

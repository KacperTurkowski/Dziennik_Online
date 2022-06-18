import React, { MouseEventHandler } from "react";
import { Button, Modal } from "react-bootstrap";
import GradeTypeStatistics from "./GradeTypeStatistics";

interface IModalWithStatistics {
  gradeTypeId: number;
  userGuid: string;
  onHide: MouseEventHandler;
  show: boolean;
  gradeTypeName: string;
}

const ModalWithStatistics = (props: IModalWithStatistics) => {
  const { gradeTypeId, userGuid, onHide, show, gradeTypeName } = props;
  return (
    <Modal size="xl" centered={true} show={show}>
      <Modal.Body>
        <GradeTypeStatistics
          gradeTypeId={gradeTypeId}
          userGuid={userGuid}
          gradeTypeName={gradeTypeName}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Zamknij</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalWithStatistics;

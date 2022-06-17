import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ModalWithStatistics from "./ModalWithStatistics";

interface IButtonModalProps {
    gradeTypeId: number;
    userGuid: string;
    gradeTypeName: string;
}

const ButtonModal = (props: IButtonModalProps) => {
    const {gradeTypeId, userGuid, gradeTypeName} = props;
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
          <Button
              style={{marginRight: "10px"}}
              variant="primary"
              onClick={() => setModalShow(true)}
          >
            Statystyki
          </Button>
          <ModalWithStatistics
              gradeTypeName={gradeTypeName}
              show={modalShow}
              onHide={() => setModalShow(false)}
              gradeTypeId={gradeTypeId}
              userGuid={userGuid}
          />
        </>
    );
};

export default ButtonModal;

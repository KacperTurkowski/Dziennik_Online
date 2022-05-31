import React, { MouseEventHandler } from "react";
import { Button, Modal } from "react-bootstrap";
import GradeTypeStatistics from "./GradeTypeStatistics";

interface IModalWithStatistics {
    gradeTypeId: number;
    userGuid: string;
    onHide: MouseEventHandler;
    show: boolean;
}

const ModalWithStatistics = (props: IModalWithStatistics) => {
    const {gradeTypeId, userGuid, onHide, show} = props;
    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
        >
            <Modal.Body>
                <GradeTypeStatistics gradeTypeId={gradeTypeId} userGuid={userGuid}/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Zamknij</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalWithStatistics;
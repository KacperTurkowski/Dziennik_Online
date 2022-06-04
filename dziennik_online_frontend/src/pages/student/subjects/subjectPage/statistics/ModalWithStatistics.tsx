import React, { MouseEventHandler } from "react";
import { Button, Modal } from "react-bootstrap";
import GradeTypeStatistics from "./GradeTypeStatistics";

interface IModalWithStatistics {
    gradeTypeId: number;
    onHide: MouseEventHandler;
    show: boolean;
}

const ModalWithStatistics = (props: IModalWithStatistics) => {
    const {gradeTypeId, onHide, show} = props;
    return (
        <Modal size="xl" centered={true} show={show}>
            <Modal.Body>
                <GradeTypeStatistics gradeTypeId={gradeTypeId}/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Zamknij</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalWithStatistics;
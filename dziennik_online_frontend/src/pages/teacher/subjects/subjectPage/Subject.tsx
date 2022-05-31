import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Link, Routes, Route, useNavigate, useParams } from "react-router-dom";
import ModalWithStatistics from "../../statistics/ModalWithStatistics";

const Subject = (): JSX.Element => {
    const { subject } = useParams();
    const navigate = useNavigate();
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            Wybrany przedmiot: {subject}

            {/*Tymczasowe wywołanie modalu do statystyk. Trzeba przerobic jako wywołanie z danej kolumny ocen. */}
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Pokaz statystyki
            </Button>

            <ModalWithStatistics
                show={modalShow}
                onHide={() => setModalShow(false)}
                gradeTypeId={33}
                userGuid={'ff'}
            />

        </>
    )
}

export default Subject;
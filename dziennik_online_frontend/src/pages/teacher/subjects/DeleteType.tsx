import React, { useState } from "react";
import { Alert, Button, Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../../components/loading/Loading";
import useAuth from "../../../context/AuthContext/useAuth";
import {deleteType} from "../../../services/teacherSubjects";
import {DeleteTypeInterface} from "../helper";

const DeleteGrade = (props: DeleteTypeInterface) => {
    const [loading, setLoading] = useState<boolean>(false);
    const {handleHide, show, gradeTypeId, handleSuccess} = props;
    const {user} = useAuth();
    const {subject} = useParams();
    useNavigate();
    const handleSubmit = async (event: any): Promise<void> => {
        setLoading(true)
        const userGuid = user?.guid || '';
        const subjectId = Number(subject);
        console.log(subjectId)
        event.preventDefault();
        try {
            await deleteType(userGuid, subjectId, gradeTypeId);
            handleSuccess();
            handleHide();
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Modal centered={true} show={show}>
            <Alert variant="danger" style={{marginBottom: "0", textAlign: "center"}}>
                <Alert.Heading>Usuń kolumnę</Alert.Heading>
                <p> Czy napewno chcesz usunąć kolumnę?</p>

                {loading && <div style={{width: '50px', height: '50px', position: 'relative', left: '45%', marginBottom: '10px'}}>
                    <Loading />
                </div> }

                <Button onClick={handleSubmit} style={{background: "#6CD9B1"}}>Usuń</Button> {' '}
                <Button onClick={handleHide} style={{background: "#F277A4"}}>Anuluj</Button>
            </Alert>
        </Modal>
    );
};

export default DeleteGrade;

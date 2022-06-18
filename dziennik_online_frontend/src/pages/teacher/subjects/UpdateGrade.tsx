import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../../components/loading/Loading";
import useAuth from "../../../context/AuthContext/useAuth";
import { updateGrade } from "../../../services/teacherSubjects";
import { UpdateGradeInterface } from "../helper";

const UpgradeGrade = ({grade, gradeTypeId, onHide, show}: UpdateGradeInterface) => {
    const {subject} = useParams();
    const {user} = useAuth();
    const navigate = useNavigate()

    const [loading, setLoading] = useState<boolean>(false);
    const [commentaryToUpdate, setCommentaryToUpdate] = useState(grade.commentary);
    const [valueToUpdate, setValueToUpdate] = useState(grade.value);
    const [disabled, setDisabled] = useState(true);

    function handleChangeCommentary(event: any) {
        setCommentaryToUpdate(event.target.value.toString());
    }

    function handleChangeValue(event: any) {
        setValueToUpdate(Number(event.target.value));
        if ([1,2,3,4,5,6].includes(Number(event.target.value))) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }

    async function handleSubmit(event: any) {
        setLoading(true);
        const gradeId: number = grade.id;
        const userGuid: string = user?.guid ?? "";
        const subjectId: number = Number(subject);
        const studentId: number = grade.userId;

        event.preventDefault();

        try {
            await updateGrade(
                commentaryToUpdate, valueToUpdate, studentId, subjectId, gradeTypeId, gradeId, userGuid
            );
            navigate(0);
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false);
        }
    }

    return (
        <Modal centered={true} show={show}>
            <Modal.Body>
                <Form.Label style={{fontWeight: "bold"}}>
                    {" "}
                    Zaktualizuj ocene
                </Form.Label>
                <Form onSubmit={handleSubmit}>
                    <div style={{margin: "5px"}} className="form-group">
                        <small>Ocena </small>
                        <Form.Control
                            type="number"
                            min={1}
                            max={6}
                            className="form-control"
                            id="value"
                            placeholder={valueToUpdate.toString()}
                            onChange={handleChangeValue}
                        />
                    </div>
                    <div style={{margin: "5px"}} className="form-group">
                        <small>Komentarz </small>
                        <Form.Control
                            type="text"
                            className="form-control"
                            id="commentary"
                            value={commentaryToUpdate}
                            onChange={handleChangeCommentary}
                        />
                    </div>
                </Form>
                {loading && <div style={{width: '50px', height: '50px', position: 'relative', left: '45%', marginBottom: '10px'}}>
                    <Loading />
                </div> }

            </Modal.Body>
            <Modal.Footer>
                <button
                    onClick={handleSubmit}
                    className="btn btn-primary"
                    disabled={disabled}
                >
                    Zaktualizuj
                </button>
                <Button onClick={onHide}>Anuluj</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UpgradeGrade;

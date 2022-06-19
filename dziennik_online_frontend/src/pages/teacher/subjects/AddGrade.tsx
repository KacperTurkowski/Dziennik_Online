import React, { MouseEventHandler, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../../components/loading/Loading";
import useAuth from "../../../context/AuthContext/useAuth";
import { addGrade } from "../../../services/teacherSubjects";

export interface GradeInterfaceProps {
    onHide: MouseEventHandler;
    show: boolean;
    gradeTypeId: number;
    userId: number;
    handleSuccess: () => void;
}

const AddForm = (props: GradeInterfaceProps) => {
    const [loading, setLoading] = useState<boolean>(false);
    const {onHide, show, userId, gradeTypeId, handleSuccess} = props;
    const {subject} = useParams();
    const {user} = useAuth();
    const currentUserGuid: string = user?.guid ?? "";
    const currentSubjectId: number = Number(subject);
    const [commentaryToAdd, setCommentaryToAdd] = useState("");
    const [valueToAdd, setValueToAdd] = useState<number|string>('');
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();

    function handleChangeCommentary(event: any) {
        setCommentaryToAdd(event.target.value.toString());
    }

    function handleChangeValue(event: any) {
        const grade = Number(event.target.value);

        if ( Number.isInteger(grade) && grade > 0 && grade < 7 ) {
            setValueToAdd(Number(event.target.value));
            setDisabled(false);
        } else if ( grade == 0 ) {
            setValueToAdd('');
            setDisabled(true);
        }
    }

    const handleSubmit = async (event: any): Promise<void> => {
        setLoading(true);
        event.preventDefault();
        const gradeValue: number = Number(valueToAdd);

        try {
            await addGrade(
                currentUserGuid,
                currentSubjectId,
                commentaryToAdd,
                gradeValue,
                userId,
                gradeTypeId
            );
            handleSuccess();
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal centered={true} show={show}>
            <Modal.Body>
                <Form.Label style={{fontWeight: "bold"}}> Dodaj ocene</Form.Label>
                <Form>
                    <div style={{margin: "5px"}} className="form-group">
                        <small>Ocena </small>
                        <Form.Control
                            type="number"
                            min={1}
                            max={6}
                            className="form-control"
                            id="value"
                            placeholder="np. 5"
                            value={valueToAdd}
                            onChange={handleChangeValue}
                        />
                    </div>
                    <div style={{margin: "5px"}} className="form-group">
                        <small>Komentarz </small>
                        <Form.Control
                            type="text"
                            className="form-control"
                            id="commentary"
                            placeholder="np. ...przykladowy komentarz"
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
                    Zapisz
                </button>
                <Button onClick={onHide}>Zamknij</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddForm;

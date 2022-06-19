import React, { useState } from "react";
import { Button } from "react-bootstrap";
import AddForm from "../subjects/AddGrade";

interface IButtonModalProps {
    gradeTypeId: number;
    userGuid: string;
    userId: number;
    fetchedAgain: () => void;

}

const GradeButtonModal = (props: IButtonModalProps) => {
    const {gradeTypeId, userGuid, userId, fetchedAgain} = props;
    const [AddGradeShow, setAddGrade] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    return (
        <span>
            <Button
                style={{margin: "10px"}}
                variant="primary"
                onClick={() => setAddGrade(true)}
            >
             +
            </Button>
            <AddForm
                gradeTypeId={gradeTypeId}
                userId={userId}
                show={AddGradeShow}
                onHide={() => setAddGrade(false)}
                handleSuccess={() => fetchedAgain()}
            />
      </span>
    );
};

export default GradeButtonModal;


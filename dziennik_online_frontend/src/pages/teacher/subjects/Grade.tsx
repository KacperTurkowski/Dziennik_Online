import React, { useState } from "react";
import {Badge, OverlayTrigger, Popover} from "react-bootstrap";
import { Grade as GradeInterface } from '../helper';
import DeleteGrade from "./DeleteGrade";
import UpgradeGrade from "./UpdateGrade";

interface IGrade {
    grade: GradeInterface;
    gradeTypeId: number,
    checked: boolean
}

export const Grade = ({grade, gradeTypeId, checked}: IGrade): JSX.Element => {
    const [DeleteShow, setDeleteGrade] = useState(false);
    const [UpgradeShow, setUpdateGrade] = useState(false);

    const handleLeftClick = (event: any): void => {
        event.preventDefault();
        if ( event.detail === 2 ) {
            setUpdateGrade(true);
        }
    }

    const handleRightClick = (event: any): void => {
        event.preventDefault();
        setDeleteGrade(true);
    }

    function getGradeColor(value: number) {
        if(checked) {
            if(value === 1) return 'danger';
            if(value === 6) return 'success';
            else return "primary";
        }
        else return "primary";
    }

    const renderTooltip = (): JSX.Element => {
        return (
            <Popover id={`popover-positioned-left`}>
                <Popover.Body>
                    {grade.commentary ?
                        <>
                            <p>Dodany komentarz: <br/>
                                <strong>{grade.commentary}</strong></p>
                        </>
                        : <p>Brak komentarza</p>
                    }
                    <p><em>Kliknij dwukrotnie aby edytować, kliknij prawym aby usunąć</em></p>
                </Popover.Body>
            </Popover>
        )
    }

    return (
        <>
            <OverlayTrigger
                overlay={renderTooltip()}
                placement={'left'}
                key={grade.id}
            >
                <span
                    style={{cursor: "pointer"}}
                    onClick={handleLeftClick}
                    onContextMenu={handleRightClick}
                >
                    <Badge bg={getGradeColor(grade.value)}>{grade.value}</Badge>
                </span>
            </OverlayTrigger>

            <UpgradeGrade
                show={UpgradeShow}
                onHide={() => setUpdateGrade(false)}
                grade={grade}
                gradeTypeId={gradeTypeId}
            />
            <DeleteGrade
                show={DeleteShow}
                handleHide={() => setDeleteGrade(false)}
                gradeTypeId={gradeTypeId}
                gradeId={grade.id}
            />
        </>
    )
}
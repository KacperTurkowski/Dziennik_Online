import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useNavigate, useParams } from "react-router-dom";
import { Widget } from "../../../../components/widget/Widget";
import useAuth from "../../../../context/AuthContext/useAuth";
import useStudent from "../../../../context/StudentContext/useStudent";
import { getStudentAllGrades, getStudentAvgGradeForSubject } from "../../../../services/studentApi";
import { AverageWidget } from "./AverageWidget";
import { Grade } from "./Grade";
import { Loader } from "./Loader";
import ModalWithStatistics from "./statistics/ModalWithStatistics";

import './style.css'

export const Subject = (): JSX.Element => {
    const {subject} = useParams();
    const {user} = useAuth();
    const navigate = useNavigate()
    const {actualSubject, setActualSubject} = useStudent();
    const [grades, setGrades] = useState<any[] | null>(null);
    const [avgGrade, setAvgGrade] = useState<number | null>(null);
    const [modalShow, setModalShow] = useState(false);
    const [activeGradeId, setActiveGradeId] = useState<number>(0);

    useEffect(() => {
        setActualSubject(Number(subject));

        const guid: string = user?.guid || '';
        const subjectId: number = Number(subject);
        setGrades([]);
        setAvgGrade(null);

        getStudentAllGrades(subjectId, guid)
            .then(grades => setGrades(grades))
            .catch(error => navigate('nomatch'))

        getStudentAvgGradeForSubject(Number(subject), guid)
            .then(avgGrade => setAvgGrade(Number(avgGrade['average'])))
            .catch(error => navigate('nomatch'))

    }, [subject])

    return (
        <Container fluid className={'students-subject'}>
            <Row className={'title-row'}>
                <h4 className="display-6">{actualSubject && actualSubject.title}</h4>
            </Row>

            <Row className={'student-grades-row'}>
                <Col md={10}>
                    <Widget header={'Twoje oceny'} icon={<Icon.MortarboardFill/>}>
                        {grades != null && grades.length > 0 ?
                            <Table className={'student-grades-table'}>
                                <thead>
                                <tr>
                                    <th>Rodzaj oceny</th>
                                    <th>Ocena</th>
                                    <th>Średnia klasy</th>
                                    <th>Mediana klasy</th>
                                </tr>
                                </thead>
                                <tbody>
                                {grades.map((grade, index) =>
                                    <tr key={index}>
                                        <th
                                            onClick={() => {
                                                setActiveGradeId(grade['gradeTypeId'])
                                                setModalShow(true)
                                            }}
                                        >
                                            {grade['gradeTypeName']}
                                        </th>
                                        <td>{grade['gradeData'] ? <Grade grade={grade['gradeData']}/> : '---'}</td>
                                        <td>{Number(grade['average']).toPrecision(3)}</td>
                                        <td>{Number(grade['median']).toPrecision(3)}</td>
                                    </tr>
                                )}
                                </tbody>
                            </Table> :  grades == null ? <Loader/> : <div>Brak ocen</div>}
                    </Widget>
                </Col>
                <Col md={2} className={'student-average'}>
                    <AverageWidget avgGrade={avgGrade}/>
                </Col>
            </Row>

            <ModalWithStatistics
                show={modalShow}
                onHide={() => setModalShow(false)}
                gradeTypeId={activeGradeId}
            />
        </Container>
    )
}
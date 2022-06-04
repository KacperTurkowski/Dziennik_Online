import React, { useEffect, useState } from "react";
import { Container, Row, Table, Badge, Col } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import Loading from "../../../../components/loading/Loading";
import { Widget } from "../../../../components/widget/Widget";
import useAuth from "../../../../context/AuthContext/useAuth";
import useStudent from "../../../../context/StudentContext/useStudent";
import { getStudentAllGrades, getStudentAvgGradeForSubject } from "../../../../services/studentApi";

import './style.css'
import { Grade } from "./Grade";
import ModalWithStatistics from "./statistics/ModalWithStatistics";

export const Subject = (): JSX.Element => {
    const {subject} = useParams();
    const {user} = useAuth();
    const {actualSubject, setActualSubject} = useStudent();
    const [grades, setGrades] = useState<any[]>([]);
    const [avgGrade, setAvgGrade] = useState<number>(0);
    const [modalShow, setModalShow] = useState(false);
    const [activeGradeId, setActiveGradeId] = useState<number>(0);

    useEffect(() => {
        setActualSubject(Number(subject));

        const guid: string = user?.guid || '';
        const subjectId: number = Number(subject);
        setGrades([]);
        setAvgGrade(0);

        getStudentAllGrades(subjectId, guid)
            .then(grades => {
                setGrades(grades);
            })

        getStudentAvgGradeForSubject(Number(subject), guid)
            .then(avgGrade => setAvgGrade(Number(avgGrade['average'])))

    }, [subject])

    const getLoading = () => {
        return (
            <div className={'loading'}>
                <Loading/>
            </div>
        )
    }

    return (
        <Container fluid className={'students-subject'}>
            <Row className={'title-row'}>
                <h4>{actualSubject && actualSubject.title}</h4>
            </Row>

            <Row className={'student-grades-row'}>
                <Col md={10}>
                    <Widget header={'Twoje oceny'} icon={<Icon.MortarboardFill/>}>
                        {grades.length > 0 ?
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
                                {grades.map(grade =>
                                    <tr>
                                        <th
                                            onClick={() => {
                                                setActiveGradeId(grade['gradeTypeId'])
                                                setModalShow(true)
                                            }}
                                        >
                                            {grade['gradeTypeName']}
                                        </th>
                                        <td><Grade grade={grade['gradeData']} /></td>
                                        <td>{grade['average']}</td>
                                        <td>{grade['median']}</td>
                                    </tr>
                                )}
                                </tbody>
                            </Table> : getLoading()}
                    </Widget>
                </Col>
                <Col md={2} className={'student-average'}>
                    <Widget header={'Średnia z przedmiotu'} icon={<Icon.MortarboardFill/>}>
                        <div>{avgGrade > 0 ?
                            <h1 className={'text-center'}>{avgGrade}</h1>
                            : getLoading()}</div>
                    </Widget>
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
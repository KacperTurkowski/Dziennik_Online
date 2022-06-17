import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Widget } from "../../../components/widget/Widget";
import useAuth from "../../../context/AuthContext/useAuth";
import useStudent from "../../../context/StudentContext/useStudent";
import { LatestGrades } from "./LatestGrades";
import './style.css';

export const Dashboard = (): JSX.Element => {
    const {user} = useAuth();
    const {subjects} = useStudent();

    return (
        <Container fluid={true}>
            <Row className={'title-row'}>
                <h4 className="display-6">Witaj, {user?.firstName} {user?.lastName}</h4>
            </Row>
            <Row>
                <Col md={8}>
                    <Widget header={'Ostatnio otrzymane oceny'} icon={<Icon.SendPlus/>}>
                        <LatestGrades/>
                    </Widget>

                </Col>
                <Col md={4}>
                    <Widget header={'Liczba przedmiotów'}>
                        <h1 className={'text-center'}>{subjects.length}</h1>
                    </Widget>
                </Col>
            </Row>
        </Container>
    )
}
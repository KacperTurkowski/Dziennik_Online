import React from "react";
import { Col, Container, Row, Card, Table } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Widget } from "../../../components/widget/Widget";
import useAuth from "../../../context/AuthContext/useAuth";
import { LatestGrades } from "./LatestGrades";
import './style.css';

export const Dashboard = (): JSX.Element => {
    const {user} = useAuth();

    return (
        <Container fluid={true}>
            <Row className={'title-row'}>
                <h3>Witaj {user?.firstName} {user?.lastName}</h3>
            </Row>
            <Row>
                <Col md={8}>
                    <Widget header={'Ostatnio otrzymane oceny'} icon={<Icon.SendPlus />}>
                        <LatestGrades />
                    </Widget>

                </Col>
                <Col md={4}>
                    <Widget header={'Another widget'}>
                        <>Another widget</>
                    </Widget>
                </Col>
            </Row>
        </Container>
    )
}
import * as React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from 'react-router-dom';
import './style.css';
import StudentProvider from "../../context/StudentContext/StudentProvider";

interface IMain {
    navigation: JSX.Element;
}

const Main = (props: IMain): JSX.Element => {
    return (
        <StudentProvider>
            <Container fluid={true}>
                <Row>
                    <Col md={2} className={'side-bar'}>
                        {props.navigation}
                    </Col>
                    <Col md={10}>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </StudentProvider>
    )
}

export default Main;
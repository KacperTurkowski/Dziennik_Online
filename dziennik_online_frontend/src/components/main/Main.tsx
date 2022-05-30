import * as React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from 'react-router-dom';
import './style.css';

interface IMain {
    navigation: JSX.Element;
}

const Main = (props: IMain): JSX.Element => {
    return (
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
    )
}

export default Main;
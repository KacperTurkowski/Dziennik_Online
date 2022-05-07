import * as React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { Outlet, useNavigate } from 'react-router-dom';
import NavMenu from '../navbar/NavMenu';
import './style.css';

const Main = (): JSX.Element => {
    return (
        <Container fluid={true}>
            <Row>
                <Col md={2} className={'side-bar'}>
                    <NavMenu/>
                </Col>
                <Col md={10}>
                    <Outlet/>
                </Col>
            </Row>
        </Container>
    )
}

export default Main;
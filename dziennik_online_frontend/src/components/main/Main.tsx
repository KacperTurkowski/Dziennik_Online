import * as React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { Outlet, useNavigate } from 'react-router-dom';
import useAuth from "../../context/AuthContext/useAuth";
import NavMenu from '../NavigationMenu/NavMenu';
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
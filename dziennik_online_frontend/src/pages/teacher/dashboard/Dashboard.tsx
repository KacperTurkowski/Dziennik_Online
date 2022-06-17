import React from "react";
import { Row, Container } from "react-bootstrap";
import { Widget } from "../../../components/widget/Widget";
import useAuth from "../../../context/AuthContext/useAuth";

export const Dashboard = (): JSX.Element => {
    const {user} = useAuth();

    return (
        <Container fluid={true}>
            <Row className={'title-row'}>
                <h3>Witaj {user?.firstName} {user?.lastName}</h3>
            </Row>
            <Row>
                <Widget header={'Informacja'}>
                    <h6>Skorzystaj z menu po lewej stronie, aby sprawnie przejść do klas w których pracujesz.</h6>
                </Widget>
            </Row>
        </Container>
    )
}
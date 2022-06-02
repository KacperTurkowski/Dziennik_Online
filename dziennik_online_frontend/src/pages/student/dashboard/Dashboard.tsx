import { Col, Container, Row, Card, Table } from "react-bootstrap";
import useAuth from "../../../context/AuthContext/useAuth";
import { LatestGrades } from "./LatestGrades";
import { Widget } from "./Widget";
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
                    <Widget header={'Ostatnio otrzymane oceny'}>
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
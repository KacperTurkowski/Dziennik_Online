import { Alert, Col, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import './style.css'

const NoMatch = (): JSX.Element => {
    return (
        <Row className={'no-match'}>
            <Col>
                <Alert variant={'danger'}>
                    <h3>
                        <Icon.ConeStriped /> Cos poszlo nie tak <Icon.ConeStriped />
                    </h3>
                </Alert>
            </Col>
        </Row>
    )
}

export default NoMatch;
import { Badge, Col, OverlayTrigger, Popover, Row } from "react-bootstrap";

interface IGrade {
    grade: any;
}

export const Grade = ({grade}: IGrade): JSX.Element => {
    const gradeColor = Number(grade['value']) > 1 ? 'primary' : 'warning';

    const getGradePopover = (): JSX.Element => {
        return (
            <Popover id={`popover-positioned-right`}>
                <Popover.Body className={'grade-popover'}>
                    <Row className={'grade-popover-row'}>
                        <Col md={6}>Waga: </Col>
                        <Col md={6}>{grade['weight']}</Col>
                    </Row>
                    <Row className={'grade-popover-row'}>
                        <Col md={6}>Data wystawienia: </Col>
                        <Col md={6}>{new Date(grade['date']).toLocaleString()}</Col>
                    </Row>
                    <Row className={'grade-popover-row'}>
                        <Col md={6}>Komentarz: </Col>
                        <Col md={6}><strong>{grade['commentary']}</strong></Col>
                    </Row>
                </Popover.Body>
            </Popover>
        )
    }

    return (
        <>
            <OverlayTrigger
                trigger="click"
                key={'left'}
                placement={'left'}
                overlay={getGradePopover()}
            >
                <Badge bg={gradeColor}>{grade['value']}</Badge>
            </OverlayTrigger>
        </>
    )
}
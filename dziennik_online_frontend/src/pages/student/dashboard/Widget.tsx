import { Col, Container, Row, Card, Table } from "react-bootstrap";

interface IWidget {
    header: string;
    children?: JSX.Element,
}

export const Widget = ({ header, children }: IWidget): JSX.Element => {
    return (
        <Card body className={'widget'}>
            <div className={'widget-header'}>
                <h6>{header}</h6>
            </div>
            {children}
        </Card>
    )
}
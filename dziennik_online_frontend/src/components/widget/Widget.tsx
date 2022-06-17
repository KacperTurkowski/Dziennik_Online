import { Card } from "react-bootstrap";
import './style.css';

interface IWidget {
    header: string;
    icon?: JSX.Element;
    children?: JSX.Element;
}

export const Widget = ({header, icon, children}: IWidget): JSX.Element => {
    return (
        <Card body className={'widget'}>
            <div className={'widget-header'}>
                <h6>{icon} {header}</h6>
            </div>
            {children}
        </Card>
    )
}
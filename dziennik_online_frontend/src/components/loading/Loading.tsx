import { Spinner } from "react-bootstrap";
import './style.css'
const Loading = () => {
    return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}

export default Loading;
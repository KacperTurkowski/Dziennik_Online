import { useParams } from "react-router-dom";

const Subject = (): JSX.Element => {
    const { subject } = useParams();

    return (
        <>Wybrany przedmiot: {subject}</>
    )
}

export default Subject;
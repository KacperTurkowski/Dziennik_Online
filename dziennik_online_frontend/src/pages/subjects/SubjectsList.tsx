import { Outlet } from "react-bootstrap-icons";

const SubjectsList = (): JSX.Element => {
    return (
        <>
            Twoje przedmioty
            <Outlet />
        </>
    )
}

export default SubjectsList;
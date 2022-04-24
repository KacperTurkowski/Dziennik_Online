import { Link, Outlet, useNavigate } from 'react-router-dom';
import useAuth from "../../context/AuthContext/useAuth";

const Main = (): JSX.Element => {
    const {user, onLogout} = useAuth();
    const navigate = useNavigate()

    return (
        <>
            Zalogowany jako: {user?.firstName} {user?.lastName}
            <div>
                <button onClick={() => navigate("/")}>Home</button>
                <button onClick={() => navigate("/oceny")}>Oceny</button>
                <button onClick={onLogout}>Wyloguj</button>
            </div>
            <Outlet />
        </>
    )
}

export default Main;
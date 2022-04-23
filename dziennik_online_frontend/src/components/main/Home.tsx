import useAuth from "../../context/AuthContext/useAuth";

const Home = (): JSX.Element => {
    const {user, onLogout} = useAuth();

    return (
        <>
            Zalogowany jako: {user?.firstName} {user?.lastName}
            <div>
                <button onClick={onLogout}>Wyloguj</button>
            </div>
        </>
    )
}

export default Home;
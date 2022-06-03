import useAuth from "../../../context/AuthContext/useAuth";

export const Dashboard = (): JSX.Element => {
    const {user} = useAuth();

    return (
        <>
            <h4>Witaj {user?.firstName} {user?.lastName}</h4>
        </>
    )
}
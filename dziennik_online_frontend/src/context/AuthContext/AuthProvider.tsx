import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserInterface } from "../../interfaces/UserInterface";
import AuthContext from "./AuthContext";

const AuthProvider = ({children}: any) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<UserInterface | null>(null);

    const getUserFromStorage = (): UserInterface | null => {
        const userFromStorage = localStorage.getItem('user');

        if (!!userFromStorage) {
            const userFromStorageParsed = JSON.parse(userFromStorage);
            const {firstName, lastName, role, guid} = userFromStorageParsed;

            return {firstName, lastName, role, guid} as UserInterface;
        }

        return null;
    }

    const getDefaultUser = () => {
        if (user === null) {
            return getUserFromStorage();
        }

        return user;
    }

    const handleLogin = async(userObject: any) => {
        const {firstName, lastName, role, guid} = userObject;

        setUser({firstName, lastName, role, guid} as UserInterface);
        localStorage.setItem('user', JSON.stringify(userObject));
        navigate('/');
    }

    const handleLogout =  async() => {
        setUser(null);
        localStorage.removeItem('user');
        navigate('/login');
    }

    return (
        <AuthContext.Provider value={{
            user: getDefaultUser(),
            onLogin: handleLogin,
            onLogout: handleLogout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
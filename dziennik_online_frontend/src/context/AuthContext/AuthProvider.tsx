import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserInterface } from "../../interfaces/UserInterface";
import AuthContext from "./AuthContext";

const AuthProvider = ({children}: any) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<UserInterface | null>(null);

    useEffect(() => {
        if (user === null) {
            loadUserFromStorage();
        }
    });

    const loadUserFromStorage = () => {
        const userFromStorage = localStorage.getItem('user');

        if (!!userFromStorage) {
            const userFromStorageParsed = JSON.parse(userFromStorage);
            const {firstName, lastName, role, guid} = userFromStorageParsed;

            setUser({firstName, lastName, role, guid} as UserInterface);
            navigate('/');
        }
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
    }

    return (
        <AuthContext.Provider value={{
            user: user,
            onLogin: handleLogin,
            onLogout: handleLogout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserInterface } from "../../interfaces/UserInterface";
import AuthContext from "./AuthContext";

const AuthProvider = ({children}: any) => {
    const [user, setUser] = useState<UserInterface | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (user === null) {
            loadUserFromStorage();
        }
    });

    const loadUserFromStorage = () => {
        const userFromStorage = localStorage.getItem('user');

        if (!!userFromStorage) {
            const userFromStorageParsed = JSON.parse(userFromStorage);

            setUser({
                firstName: userFromStorageParsed['firstName'] as string,
                lastName: userFromStorageParsed['lastName'] as string,
                role: userFromStorageParsed['role'] as string,
                guid: userFromStorageParsed['guid'] as string
            } as UserInterface);

            navigate('/');
        }
    }

    const handleLogin = async(userObject: any) => {
        const user: UserInterface = {
            firstName: userObject['firstName'] as string,
            lastName: userObject['lastName'] as string,
            role: userObject['role'] as string,
            guid: userObject['guid'] as string
        } as UserInterface;

        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
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
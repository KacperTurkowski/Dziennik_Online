import { createContext } from "react";
import { IAuthContext } from "./interfaces/IAuthContext";

const AuthContext = createContext<IAuthContext>({
    user: null,
    onLogin: userObject => {},
    onLogout: () => {}
});

export default AuthContext;
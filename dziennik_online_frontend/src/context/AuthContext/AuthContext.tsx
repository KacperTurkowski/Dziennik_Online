import { createContext } from "react";
import { UserInterface } from "../../interfaces/UserInterface";

interface IAuthContext {
    user: UserInterface | null,
    onLogin: (data: JSON) => void,
    onLogout: () => void
}

const AuthContext = createContext<IAuthContext>({
    user: null,
    onLogin: userObject => {},
    onLogout: () => {}
});

export default AuthContext;
import { UserInterface } from "../../../interfaces/UserInterface";

export interface IAuthContext {
    user: UserInterface | null,
    onLogin: (data: JSON) => void,
    onLogout: () => void
}
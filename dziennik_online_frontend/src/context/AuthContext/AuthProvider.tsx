import AuthContext from "./AuthContext";

const AuthProvider = ({children}: any) => {
    return (
        <AuthContext.Provider value={{
            login: ''
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
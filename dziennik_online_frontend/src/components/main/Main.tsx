import * as React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useAuth from "../../context/AuthContext/useAuth";
import NavMenu from '../NavigationMenu/NavMenu'; 
const Main = (): JSX.Element => {
    const {user, onLogout} = useAuth();
    const navigate = useNavigate()

    return (
        <>
            <tbody>
                <tr>
                     <td>
                        <NavMenu/>
                     </td>
                    <td className="main-column-styles">
                        Zalogowany jako: {user?.firstName} {user?.lastName}
                        <div>
                            <button onClick={onLogout}>Wyloguj</button>
                        </div>
                         <Outlet />
                    </td>
                </tr>
          
            </tbody>
        </>
    )
}

export default Main;
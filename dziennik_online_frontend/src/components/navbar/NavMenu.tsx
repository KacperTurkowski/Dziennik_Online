import React from 'react';
import * as Icon from "react-bootstrap-icons";
import {useNavigate } from 'react-router-dom';
import useAuth from "../../context/AuthContext/useAuth";
import './styles.css'

interface INavMenu {
    navItems: JSX.Element;
}

const NavMenu = (props: INavMenu) => {
    const {user, onLogout} = useAuth();
    const navigate = useNavigate();

    const loggedUser = () => {
        return (
            <div className={'logged-user'}>
                <p><strong>{user?.firstName} {user?.lastName}</strong></p>
                <p>{user?.role}</p>
            </div>
        )
    }

    return (
        <div className='nav-menu'>
            {loggedUser()}
            <ul className='nav-menu-list'>
                {props.navItems}
                <li key={'logout'} onClick={onLogout} className='list-item'>
                    <div>
                        <p id="icon">{<Icon.BoxArrowRight />}</p>
                        <p id="title">Wyloguj</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default NavMenu;

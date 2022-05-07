import React from 'react';
import * as Icon from "react-bootstrap-icons";
import {useNavigate } from 'react-router-dom';
import useAuth from "../../context/AuthContext/useAuth";
import { IMenuContent } from "./interfaces/IMenuContent";
import menuContent from './MenuContent';
import './styles.css'

const NavMenu = () => {
    const {user, onLogout} = useAuth();
    const navigate = useNavigate();

    const logoutElement = () => {
        return (
            <li
                key={'logout'}
                onClick={onLogout}
                className='list-item'
            >
                <p id="icon">{<Icon.BoxArrowRight />}</p>
                <p id="title">Wyloguj</p>
            </li>
        )
    }

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
                {menuContent.map((menuItem: IMenuContent) => {
                    return (
                        <li
                            key={menuItem.title}
                            onClick={() => {navigate(`${menuItem.link}`)}}
                            className='list-item'
                            id = {window.location.pathname === menuItem.link ? "active" : ""}
                        >
                            <p id="icon">{menuItem.icon}</p>
                            <p id="title"> {menuItem.title}</p>
                        </li>
                    )
                })}
                {logoutElement()}
            </ul>
        </div>
    )
}

export default NavMenu;
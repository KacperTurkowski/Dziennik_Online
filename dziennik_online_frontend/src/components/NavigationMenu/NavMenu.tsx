import React from 'react';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import {useNavigate } from 'react-router-dom';
import './styles.css'
import {MenuContent} from './MenuContent';

function NavMenu(){
    const navigate = useNavigate();
    return (
        <div className='nav-menu'> 
        <ul className='nav-menu-list'>
        {MenuContent.map((menuItem)=>{
            return(
                <li key={menuItem.title} 
                onClick={()=>{navigate(`${menuItem.link}`)}} 
                className='list-item'
                id = {window.location.pathname === menuItem.link ? "active" : ""}>
                    <p id="icon">{menuItem.icon}</p>
                    <p id="title"> {menuItem.title}</p>
                </li>
            )
        })}
        </ul>
        </div>
    )
       
}

export default NavMenu;
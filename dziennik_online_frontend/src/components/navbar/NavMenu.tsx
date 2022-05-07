import React, { useEffect, useState } from 'react';
import * as Icon from "react-bootstrap-icons";
import {useNavigate } from 'react-router-dom';
import useAuth from "../../context/AuthContext/useAuth";
import './styles.css'
import { SubjectInterface } from "../../interfaces/SubjectInterface";
import { getFakeTeacherSubjects } from "../../services/teacherSubjects";
import NavItem from "./NavItem";

const NavMenu = () => {
    const [subjects, setSubjects] = useState<SubjectInterface[]>();
    const {user, onLogout} = useAuth();
    const navigate = useNavigate();

    useEffect( () => {
        getFakeTeacherSubjects()
            .then(subjects => {
                const subjectList = subjects.map((subject: any) => {
                    return {
                        id: subject['id'],
                        classId: subject['classId'],
                        title: subject['schoolSubjectName'],
                        link: `/przedmioty/${subject['schoolSubjectName'].toLowerCase()}`
                    }
                })
                setSubjects(subjectList)
            })
    }, [])

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
                <NavItem icon={<Icon.HouseFill />} link={'/'} title={'Główna'}/>
                <li key={'przedmioty'} className='list-item list-item-category'>
                    <div>
                        <p id="icon"><Icon.ListUl /></p>
                        <p id="title">Przedmioty</p>
                    </div>
                    <ul className={'nav-menu-sublist'}>
                        {subjects && subjects.map(subject =>
                            <NavItem icon={<Icon.JournalText />} link={subject.link} title={subject.title}/>
                        )}
                    </ul>
                </li>
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

// {menuContent.map((menuItem: IMenuContent) => {
//     return (
//         <li
//             key={menuItem.title}
//             onClick={() => {navigate(`${menuItem.link}`)}}
//             className='list-item'
//             id = {window.location.pathname === menuItem.link ? "active" : ""}
//         >
//             <div>
//                 <p id="icon">{menuItem.icon}</p>
//                 <p id="title"> {menuItem.title}</p>
//             </div>
//
//             <ul className={'nav-menu-sublist'}>
//                 <li className={'list-item'}>
//                     <div>
//                         <p id="icon">{menuItem.icon}</p>
//                         <p id="title"> {menuItem.title}</p>
//                     </div>
//                 </li>
//             </ul>
//
//         </li>
//     )
// })}

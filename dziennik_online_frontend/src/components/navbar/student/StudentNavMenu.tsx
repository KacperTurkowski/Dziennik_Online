import React, { useEffect, useState } from "react";
import * as Icon from "react-bootstrap-icons";
import useAuth from "../../../context/AuthContext/useAuth";
import useStudent from "../../../context/StudentContext/useStudent";
import { SubjectInterface } from "../../../interfaces/SubjectInterface";
import { getStudentSubjects } from "../../../services/studentApi";
import Loading from "../../loading/Loading";
import NavItem from "../NavItem";
import NavMenu from "../NavMenu";

const StudentNavMenu = () => {
    const {user} = useAuth();
    const {subjects, saveSubjects} = useStudent();

    useEffect( () => {
        const guidUser: string = user?.guid || '';

        getStudentSubjects(guidUser)
            .then(subjects => {
                saveSubjects(subjects);
            })
    }, [])

    const getLoading = () => {
        return (
            <div className={'loading'}>
                <Loading />
            </div>
        )
    }

    const getNavItems = (): JSX.Element => {
        return (
            <>
                <NavItem icon={<Icon.HouseFill/>} link={'/student'} title={'Główna'}/>
                <li key={'przedmioty'} className='list-item list-item-category'>
                    <div>
                        <p id="icon"><Icon.ListUl/></p>
                        <p id="title">Przedmioty</p>
                    </div>
                    <ul className={'nav-menu-sublist'}>
                        {subjects ? subjects.map((subject, index) =>
                            <NavItem
                                key={index}
                                icon={<Icon.JournalText/>}
                                link={subject.link}
                                title={subject.title}
                            />
                        ) : getLoading()}
                    </ul>
                </li>
            </>
        )
    }

    return (
        <NavMenu navItems={getNavItems()}/>
    )
}

export default StudentNavMenu;
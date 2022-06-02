import React, { useEffect, useState } from "react";
import * as Icon from "react-bootstrap-icons";
import useAuth from "../../../context/AuthContext/useAuth";
import { SubjectInterface } from "../../../interfaces/SubjectInterface";
import { getStudentSubjects } from "../../../services/studentApi";
import Loading from "../../loading/Loading";
import NavItem from "../NavItem";
import NavMenu from "../NavMenu";

const StudentNavMenu = () => {
    const [subjects, setSubjects] = useState<SubjectInterface[]>();
    const {user} = useAuth();

    useEffect( () => {
        const guidUser: string = user?.guid || '';

        getStudentSubjects(guidUser)
            .then(subjects => {
                const subjectList = subjects.map((subject: any) => {
                    return {
                        id: subject['id'],
                        classId: subject['classId'],
                        title: subject['schoolSubjectName'],
                        link: `przedmioty/${subject['id']}`
                    }
                })
                setSubjects(subjectList)
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
            <> <NavItem icon={<Icon.HouseFill/>} link={'/student'} title={'Główna'}/>
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
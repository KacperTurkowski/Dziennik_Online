import React, { useEffect, useState } from "react";
import * as Icon from "react-bootstrap-icons";
import useAuth from "../../../context/AuthContext/useAuth";
import { SubjectInterface } from "../../../interfaces/SubjectInterface";
import { getTeacherSubjects } from "../../../services/teacherSubjects";
import Loading from "../../loading/Loading";
import NavItem from "../NavItem";
import NavMenu from "../NavMenu";

const TeacherNavMenu = () => {
    const [subjects, setSubjects] = useState<SubjectInterface[]>();
    const {user} = useAuth();

    useEffect( () => {
        const guidUser: string = user?.guid || '';

        getTeacherSubjects(guidUser)
            .then(subjects => {
                const subjectList = subjects.map((subject: any) => {
                    return {
                        id: subject['id'],
                        classId: subject['classId'],
                        title: `${subject['schoolSubjectName']} - ${subject['className']}`,
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
            <>
                <NavItem icon={<Icon.HouseFill />} link={'/teacher'} title={'Główna'}/>
                <li className='list-item list-item-category'>
                    <div>
                        <p id="icon"><Icon.ListUl /></p>
                        <p id="title">Przedmioty</p>
                    </div>
                    <ul className={'nav-menu-sublist'}>
                        {subjects ? subjects.map(subject =>
                            <NavItem
                                icon={<Icon.JournalText />}
                                link={subject.link}
                                title={subject.title}
                            />
                        )
                        : getLoading()}
                    </ul>
                </li>
            </>
        )
    }

    return (
        <NavMenu navItems={getNavItems()} />
    )
}

export default TeacherNavMenu;
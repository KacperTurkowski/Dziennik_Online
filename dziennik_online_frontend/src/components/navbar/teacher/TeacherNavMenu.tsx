import React, { useEffect, useState } from "react";
import * as Icon from "react-bootstrap-icons";
import { SubjectInterface } from "../../../interfaces/SubjectInterface";
import { getFakeTeacherSubjects } from "../../../services/teacherSubjects";
import NavItem from "../NavItem";
import NavMenu from "../NavMenu";

const TeacherNavMenu = () => {
    const [subjects, setSubjects] = useState<SubjectInterface[]>();

    useEffect( () => {
        getFakeTeacherSubjects()
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

    const getNavItems = (): JSX.Element => {
        return (
            <> <NavItem icon={<Icon.HouseFill />} link={'/teacher'} title={'Główna'}/>
                <li key={'przedmioty'} className='list-item list-item-category'>
                    <div>
                        <p id="icon"><Icon.ListUl /></p>
                        <p id="title">Przedmioty</p>
                    </div>
                    <ul className={'nav-menu-sublist'}>
                        {subjects && subjects.map(subject =>
                            <NavItem
                                icon={<Icon.JournalText />}
                                link={subject.link}
                                title={subject.title}
                            />
                        )}
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
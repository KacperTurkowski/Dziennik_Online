import { useState } from "react";
import { SubjectInterface } from "../../interfaces/SubjectInterface";
import StudentContext from "./StudentContext";

const StudentProvider = ({children}: any) => {
    const [subjects, setSubjects] = useState<SubjectInterface[]>([]);
    const [actualSubject, setActualSubject] = useState<SubjectInterface>({} as SubjectInterface);

    const saveStudentSubjects = (subjects: JSON[]): void => {
        const subjectList: SubjectInterface[] = subjects.map((subject: any) => {
            return {
                id: subject['id'],
                classId: subject['classId'],
                title: subject['schoolSubjectName'],
                link: `przedmioty/${subject['id']}`
            }
        })

        setSubjects(subjectList);
    }

    const saveActualSubject = (idSubject: number): void => {
        const actualSubject = subjects.find(subject => subject.id === idSubject);
        if (actualSubject) {
            setActualSubject(actualSubject);
        }
    }

    return (
        <StudentContext.Provider value={{
            subjects: subjects,
            actualSubject: actualSubject,
            saveSubjects: saveStudentSubjects,
            setActualSubject: saveActualSubject
        }}>
            {children}
        </StudentContext.Provider>
    )
}

export default StudentProvider;
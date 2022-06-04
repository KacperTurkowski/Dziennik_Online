import { createContext } from "react";
import { SubjectInterface } from "../../interfaces/SubjectInterface";


interface IStudentContext {
    subjects: SubjectInterface[],
    actualSubject: SubjectInterface,
    saveSubjects: (subjects: JSON[]) => void,
    setActualSubject: (idSubject: number) => void
}


const StudentContext = createContext<IStudentContext>({
    subjects: [],
    actualSubject: {} as SubjectInterface,
    saveSubjects: subjects => {
    },
    setActualSubject: idSubject => {
    }
});

export default StudentContext;
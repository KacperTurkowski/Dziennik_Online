import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../../context/AuthContext/useAuth";
import { getStudentsGrades } from "../../../../services/teacherSubjects";
import { Button } from "react-bootstrap";
import DeleteForm from "../DEleteGrade";
import AddForm from "../AddGrade";
import { fff, StudentsGrades } from "../../helper";
import AddGradeTypeForm from "../AggGradeType";
import UpgradeGrade from "../UpdateGrade";
import ButtonModal from "../../statistics/ButtonModal";

const Subject = (): JSX.Element => {
  const { subject } = useParams();
  const { user } = useAuth();
  const userGuid: string = user?.guid ?? "";
  const subjectId: number = Number(subject);
  const [AddGradeShow, setAddGrade] = useState(false);
  const [DeleteShow, setDeleteGrade] = useState(false);
  const [UpgradeShow, setUpdateGrade] = useState(false);
  const [AddGradeTypeShow, setAddGradeType] = useState(false);

  const [currentClassAndSubject, setCurrentClassAndSubject] = useState({
    className: "",
    schoolSubjectName: "",
  });
  useEffect(() => {
    getStudentsGrades(userGuid, subjectId).then((classAndSubjectData) => {
      const currentClassAndSubject = () => {
        return {
          className: classAndSubjectData.subject.className,
          schoolSubjectName: classAndSubjectData.subject.schoolSubjectName,
        };
      };
      setCurrentClassAndSubject(currentClassAndSubject);
    });
  }, [subject]);

  const [studentsGrades, setStudentsGrades] = useState<StudentsGrades>();
  useEffect(() => {
    getStudentsGrades(userGuid, subjectId).then((gradesData) => {
      const studentsGrades = () => {
        return gradesData;
      };
      setStudentsGrades(studentsGrades);
    });
  }, [subject]);

  return (
    <>
      <div
        style={{
          marginTop: "15px",
          marginBottom: "25px",
          fontSize: "25px",
          fontWeight: "600",
        }}
      >
        <span style={{ marginRight: "15px" }}>
          Wybrany przedmiot:
          <span
            style={{ fontWeight: "800", marginLeft: "5px", color: "#503FBF" }}
          >
            {currentClassAndSubject?.schoolSubjectName}{" "}
          </span>
        </span>
        <span>
          {" "}
          Wybrana klasa:
          <span
            style={{ fontWeight: "800", marginLeft: "5px", color: "#503FBF" }}
          >
            {currentClassAndSubject?.className}
          </span>{" "}
        </span>
      </div>
      {/* {getLoading()} */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID Ucznia</th>
            <th>Imie i Nazwisko</th>
            {studentsGrades?.gradeTypes.map((subject) => (
              <th key={subject.gradeTypeId}>
                {subject.name} {`(${subject.gradeTypeId})`}
                <ButtonModal
                  gradeTypeId={subject.gradeTypeId}
                  userGuid={userGuid}
                  gradeTypeName={subject.name}
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {studentsGrades?.students.map((student) => (
            <>
              <tr key={student.id}>
                <td style={{ textAlign: "center" }}>{student.id}</td>
                <td>
                  {student.name} {student.surname}
                </td>
                {studentsGrades?.gradeTypeWithGrades.map((item) => (
                  <>
                    <td style={{ textAlign: "center" }}>
                      {item.grades
                        .filter((grade) => grade.userId === student.id)
                        .map((grade) => (
                          <span className="grade">{grade.value}</span>
                        ))}
                    </td>
                  </>
                ))}
              </tr>
              <tr></tr>
            </>
          ))}
        </tbody>
      </table>
      <span>
        <Button
          style={{ margin: "10px" }}
          variant="primary"
          onClick={() => setAddGrade(true)}
        >
          Dodaj Ocene
        </Button>
        <AddForm show={AddGradeShow} onHide={() => setAddGrade(false)} />
      </span>
      <span>
        <Button
          style={{ margin: "10px" }}
          variant="primary"
          onClick={() => setDeleteGrade(true)}
        >
          Usun Ocene
        </Button>
        <DeleteForm show={DeleteShow} onHide={() => setDeleteGrade(false)} />
      </span>
      <span>
        <Button
          style={{ margin: "10px" }}
          variant="primary"
          onClick={() => setUpdateGrade(true)}
        >
          Zaktualizuj Ocene
        </Button>
        <UpgradeGrade show={UpgradeShow} onHide={() => setUpdateGrade(false)} />
      </span>
      <span>
        <Button
          style={{ margin: "10px" }}
          variant="primary"
          onClick={() => setAddGradeType(true)}
        >
          Dodaj Typ Oceny
        </Button>
        <AddGradeTypeForm
          show={AddGradeTypeShow}
          onHide={() => setAddGradeType(false)}
        />
      </span>
    </>
  );
};

export default Subject;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../../context/AuthContext/useAuth";
import { getStudentsGrades } from "../../../../services/teacherSubjects";
import { Badge, Button } from "react-bootstrap";
import AddForm from "../AddGrade";
import { StudentsGrades } from "../../helper";
import AddGradeTypeForm from "../AggGradeType";
import { Grade } from "../Grade";
import ButtonModal from "../../statistics/ButtonModal";
import GradeButtonModal from "../../statistics/GradeButtonModal";
import * as Icon from "react-bootstrap-icons";

const Subject = (): JSX.Element => {
  const { subject } = useParams();
  const { user } = useAuth();
  const userGuid: string = user?.guid ?? "";
  const subjectId: number = Number(subject);
  const [AddGradeShow, setAddGrade] = useState(false);
  const [DeleteShow, setDeleteGrade] = useState(false);
  const [UpgradeShow, setUpdateGrade] = useState(false);
  const [AddGradeTypeShow, setAddGradeType] = useState(false);
  const [gradeTypWeight, setGradeTypeWeight] = useState(0);

  const [currentClassAndSubject, setCurrentClassAndSubject] = useState({
    className: "",
    schoolSubjectName: "",
  });
  const [studentsGrades, setStudentsGrades] = useState<StudentsGrades | null>();

  useEffect(() => {
    setStudentsGrades(null);
    setCurrentClassAndSubject({className: '', schoolSubjectName: ''});

    getStudentsGrades(userGuid, subjectId).then((classAndSubjectData) => {
      const currentClassAndSubject = () => {
        return {
          className: classAndSubjectData.subject.className,
          schoolSubjectName: classAndSubjectData.subject.schoolSubjectName,
        };
      };
      setCurrentClassAndSubject(currentClassAndSubject);
      setStudentsGrades(classAndSubjectData);
    });
  }, [subject]);

  function handleValueSubmit(event: any) {
    setGradeTypeWeight(Number(event.target.value));
  }

  // function handleChangeValue(event: any) {
  //   const gradeDetailsToAddTemp = [{
  //     commentary: gradeDetailsToAdd[0].commentary,
  //     value: Number(event.target.value),
  //     studentId: gradeDetailsToAdd[0].studentId,
  //   }];
  //   setGradeDetailsToAdd(gradeDetailsToAddTemp);
  // }

  // function handleChangeCommentary(event: any) {
  //   const gradeDetailsToAddTemp = [{
  //     commentary: event.target.value.toString(),
  //     value: gradeDetailsToAdd[0].value,
  //     studentId: gradeDetailsToAdd[0].studentId,
  //   }];
  //   setGradeDetailsToAdd(gradeDetailsToAddTemp);
  // }

  // function handleChangeStudentId(event: any) {
  //   const gradeDetailsToAddTemp =[{
  //     commentary: gradeDetailsToAdd[0].commentary,
  //     value: gradeDetailsToAdd[0].value,
  //     studentId: Number(event.target.value),
  //   }];
  //   setGradeDetailsToAdd(gradeDetailsToAddTemp);
  // }

  // function handleChangeGradeTypeName(event: any) {
  //   setGradeTypeNameToAdd(event.target.value.toString());
  // }

  // function handleChangeGradeTypWeight(event: any) {
  //   setGradeTypeWeightToAdd(Number(event.target.value));
  // }

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
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Imie i Nazwisko</th>
            {studentsGrades?.gradeTypes.map((subject) => (
              <th key={subject.gradeTypeId}>
                <div className="grade-cell-heading">
                  <span>{subject.name}</span>
                  <ButtonModal
                    gradeTypeId={subject.gradeTypeId}
                    userGuid={userGuid}
                    gradeTypeName={subject.name}
                  />
                </div>
              </th>
            ))}
            <th>
              <input style={{ width: "100%" }} placeholder="Nowy Typ Oceny" />
            </th>
          </tr>
        </thead>
        <tbody>
          {studentsGrades?.students.map((student) => {
            return (
              <>
                <tr key={student.id}>
                  <td>
                    {student.name} {student.surname}
                  </td>
                  {studentsGrades?.gradeTypeWithGrades.map((item) => {
                    const userGrade = item.grades.filter(
                      (grade) => grade.userId === student.id
                    );
                    return (
                      <>
                        <td style={{ textAlign: "center" }}>
                          <div className="grade-cell">
                            <div>
                              {userGrade.map((grade) => (
                                  <Grade grade={grade} gradeTypeId={item.gradeTypeId} />
                              ))}
                            </div>
                            {userGrade.length === 0 && (
                              <GradeButtonModal
                                userId={student.id}
                                userGuid={userGuid}
                                gradeTypeId={item.gradeTypeId}
                              />
                            )}
                          </div>
                        </td>
                      </>
                    );
                  })}
                  <td className="grade-cell">
                    <input
                      placeholder={"np. 3"}
                      maxLength={1}
                      style={{ width: "19%" }}
                    ></input>
                    <input
                      placeholder={"np. ...komentarz"}
                      maxLength={1}
                      style={{ width: "79%", marginLeft: "5px" }}
                    ></input>
                  </td>
                </tr>
                <tr></tr>
              </>
            );
          })}
        </tbody>
        <tfoot>
          <>
            <Button
              style={{ margin: "10px" }}
              variant="primary"
              onClick={() => setAddGradeType(true)}
            >
              Dodaj wage
            </Button>
            <AddGradeTypeForm
              show={AddGradeTypeShow}
              onHide={() => setAddGradeType(false)}
              //    onSubmit={handleValueSubmit}
            />
          </>
          <>
            <Button
              style={{ margin: "10px" }}
              variant="primary"
              onClick={() => setAddGradeType(true)}
            >
              Zapisz
            </Button>
            <AddGradeTypeForm
              show={AddGradeTypeShow}
              onHide={() => setAddGradeType(false)}
              //   onSubmit={handleValueSubmit}
            />
          </>
        </tfoot>
      </table>
      {/* <span>
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
      </span> */}
    </>
  );
};

export default Subject;

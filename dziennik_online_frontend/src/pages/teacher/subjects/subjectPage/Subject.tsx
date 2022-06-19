// @ts-ignore
import React, { useEffect, useState } from "react";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../../../context/AuthContext/useAuth";
import {
  addGradeType,
  getStudentsGrades,
} from "../../../../services/teacherSubjects";
import { GradeTypeWithGrades, StudentsGrades } from "../../helper";
import ButtonModal from "../../statistics/ButtonModal";
import GradeButtonModal from "../../statistics/GradeButtonModal";
// import AddGradeTypeForm from "../AggGradeType";
import { Grade } from "../Grade";
import DeleteType from "../DeleteType";

const Subject = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const [fetchGradesAgain, setFetchGradesAgain] = useState<boolean>(false);

  const { subject } = useParams();
  const { user } = useAuth();
  const userGuid: string = user?.guid ?? "";
  const subjectId: number = Number(subject);
  const [gradeTypeName, setGradeTypeNameToAdd] = useState("");
  const [gradeTypWeight, setGradeTypeWeightToAdd] = useState(0);
  const [gradeTypeIdToDelete, setgradeTypeIdToDelete] = useState(0);
  const [checked, setChecked] = React.useState(false);
  const [deleteShow, setDeleteType] = React.useState(false);
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const navigate = useNavigate();

  const handleChange = () => {
    setChecked(!checked);
  };

  const handleRightClick = (event: any): void => {
    const gradeTypeIdToDelete = event.target.value;
    event.preventDefault();
    setgradeTypeIdToDelete(gradeTypeIdToDelete);
    setDeleteType(true);
  };

  const renderTooltip = (
    gradeTypeWithGrades: GradeTypeWithGrades | undefined
  ): JSX.Element => {
    const weight = gradeTypeWithGrades?.weight;
    return (
      <Popover id={`popover-positioned-left`}>
        <Popover.Body>
          <>
            <p>
              Waga: <br />
              <strong>{weight}</strong>
            </p>
          </>
          <p>
            <em>Kliknij prawym, aby usunąć</em>
          </p>
        </Popover.Body>
      </Popover>
    );
  };

  const [currentClassAndSubject, setCurrentClassAndSubject] = useState({
    className: "",
    schoolSubjectName: "",
  });
  const [studentsGrades, setStudentsGrades] = useState<StudentsGrades | null>();
  const [gradeDetailsToAdd, setGradeDetailsToAdd] = useState<any[]>([]);

  useEffect(() => {
    setStudentsGrades(null);
    setCurrentClassAndSubject({ className: "", schoolSubjectName: "" });

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
  }, [subject, fetchGradesAgain]);

  function handleValueWeighChange(event: any) {
    setGradeTypeWeightToAdd(event.target.value);
  }

  function handleTypeNameChange(event: any) {
    if (event.target.value.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
    setGradeTypeNameToAdd(event.target.value);
  }

  const handleValueSubmit = async (event: any): Promise<void> => {
    event.preventDefault();
    try {
      await addGradeType(
        gradeTypeName,
        gradeTypWeight,
        userGuid,
        subjectId,
        gradeDetailsToAdd
      );
      navigate(0);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  function handleChangeValue(userId: number) {
    return (event: any) => {
      const stateCopy = JSON.parse(JSON.stringify(gradeDetailsToAdd));
      const studentObject = stateCopy.find(
        (el: any) => el.studentId === userId
      );
      const studentObjectIndex = stateCopy.findIndex(
        (el: any) => el.studentId === userId
      );
      if (studentObjectIndex > -1) {
        stateCopy.splice(studentObjectIndex, 1);
      }
      if (studentObject) {
        studentObject.value = Number(event.target.value); //  studentObject.commentary
        setGradeDetailsToAdd([...stateCopy, studentObject]);
      }
      if (typeof studentObject === "undefined") {
        const objectToPush = {
          commentary: "",
          value: +event.target.value,
          studentId: userId,
        };
        setGradeDetailsToAdd([...stateCopy, objectToPush]);
      }
    };
  }

  function handleChangeCommentaryValue(userId: number) {
    return (event: any) => {
      const stateCopy = JSON.parse(JSON.stringify(gradeDetailsToAdd));
      const studentObject = stateCopy.find(
        (el: any) => el.studentId === userId
      );
      const studentObjectIndex = stateCopy.findIndex(
        (el: any) => el.studentId === userId
      );
      if (studentObjectIndex > -1) {
        stateCopy.splice(studentObjectIndex, 1);
      }
      if (studentObject) {
        studentObject.commentary = event.target.value; //  studentObject.commentary
        setGradeDetailsToAdd([...stateCopy, studentObject]);
      }
      if (typeof studentObject === "undefined") {
        const objectToPush = {
          commentary: event.target.value,
          value: undefined,
          studentId: userId,
        };
        setGradeDetailsToAdd([...stateCopy, objectToPush]);
      }
    };
  }

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
        <span style={{ float: "right" }}>
          {" "}
          Pokoloruj oceny
          <input
            type="checkbox"
            style={{ marginLeft: "10px" }}
            checked={checked}
            onChange={handleChange}
          />
        </span>
      </div>
      <table
        className="table table-bordered"
        style={{ boxShadow: "5px 10px 10px -2px rgba(66, 68, 90, 1)" }}
      >
        <thead>
          <tr>
            <th>Imie i Nazwisko</th>
            {studentsGrades?.gradeTypes.map((subject) => (
              <th key={subject.gradeTypeId}>
                {subject.gradeTypeId === gradeTypeIdToDelete && (
                  <DeleteType
                    key={subject.gradeTypeId}
                    show={deleteShow}
                    handleHide={() => setDeleteType(false)}
                    handleSuccess={() => window.location.reload()}
                    gradeTypeId={subject.gradeTypeId}
                  />
                )}
                <div className="grade-cell-heading">
                  <OverlayTrigger
                    overlay={renderTooltip(
                      studentsGrades?.gradeTypeWithGrades?.find(
                        (x) => x.gradeTypeId === subject.gradeTypeId
                      )
                    )}
                    placement={"left"}
                    key={subject.name}
                  >
                    <span onContextMenu={handleRightClick}>
                      <li
                        style={{ listStyle: "none" }}
                        value={subject.gradeTypeId}
                      >
                        {subject.name + " "}
                        {"(" + subject.gradeTypeId + ")"}
                      </li>
                    </span>
                  </OverlayTrigger>
                  <ButtonModal
                    gradeTypeId={subject.gradeTypeId}
                    userGuid={userGuid}
                    gradeTypeName={subject.name}
                  />
                </div>
              </th>
            ))}

            <th style={{ maxWidth: "300px" }}>
              <input
                style={{ width: "100%" }}
                placeholder="Nowy Typ Oceny"
                value={gradeTypeName}
                onChange={handleTypeNameChange}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {studentsGrades?.students.map((student) => {
            return (
              <>
                <tr className={student.id.toString()} key={student.id}>
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
                                <Grade
                                  key={grade.userId}
                                  grade={grade}
                                  gradeTypeId={item.gradeTypeId}
                                  checked={checked}
                                  fetchedAgain={() =>
                                    setFetchGradesAgain(!fetchGradesAgain)
                                  }
                                />
                              ))}
                            </div>
                            {userGrade.length === 0 && (
                              <GradeButtonModal
                                userId={student.id}
                                userGuid={userGuid}
                                gradeTypeId={item.gradeTypeId}
                                fetchedAgain={() =>
                                  setFetchGradesAgain(!fetchGradesAgain)
                                }
                              />
                            )}
                          </div>
                        </td>
                      </>
                    );
                  })}
                  <td className="grade-cell">
                    <input
                      type={"number"}
                      min={1}
                      max={6}
                      placeholder={"np. 3"}
                      maxLength={1}
                      style={{ width: "19%" }}
                      onChange={handleChangeValue(student.id)}
                    />
                    <input
                      placeholder={"np. ...komentarz"}
                      style={{ width: "79%", marginLeft: "5px" }}
                      onChange={handleChangeCommentaryValue(student.id)}
                    />
                  </td>
                </tr>
                <tr />
              </>
            );
          })}
        </tbody>
        <tfoot>
          <tr />
        </tfoot>
      </table>
      <div style={{ float: "right", marginRight: "30px" }}>
        <>
          <label>Waga</label>
        </>
        <>
          <input
            type={"number"}
            style={{ margin: "10px", height: "37px" }}
            onChange={handleValueWeighChange}
            value={gradeTypWeight}
          />
        </>
        <>
          <Button
            style={{ margin: "10px" }}
            variant="primary"
            onClick={handleValueSubmit}
            disabled={buttonDisabled}
          >
            Zapisz
          </Button>
        </>
      </div>
    </>
  );
};

export default Subject;

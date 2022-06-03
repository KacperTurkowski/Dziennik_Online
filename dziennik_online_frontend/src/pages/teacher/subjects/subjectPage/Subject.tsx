import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link, Routes, Route, useNavigate, useParams } from "react-router-dom";
import { getFakeStudentsGrades } from "../../../../services/teacherSubjects";
import ModalWithStatistics from "../../statistics/ModalWithStatistics";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

const Subject = (): JSX.Element => {
  const { subject } = useParams();
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  let gradesAllTypes: any[] = [];
  let gradesAllTypesWithNames: any[] = [];
  let StudentsWithGrades: any[] = [];

  function switchSubject(subjectId?: string) {
    switch (subjectId) {
      case "10":
        return "Operations";
      case "14":
        return "Information Technology";
      default:
        return "Lekcja Wychowawcza";
    }
  }

  const subjectName = switchSubject(subject);
  //const subjectName = subject === '10' ? "Operations" : "Information Technology";

  const [data, setData] = useState<any[]>();
  console.log("data: ", data);
  useEffect(() => {
    getFakeStudentsGrades().then((data) => {
      const gradesPerPerson = data.map((data: any) => {
        return {
          data: data,
        };
      });
      setData(gradesPerPerson);
    });
  }, []);

  if (data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].data.subject.id.toString() === subject) {
        const grades = data[i].data.gradeTypeWithGrades;
        for (let j = 0; j < grades.length; j++) {
          let gradeType = grades[j].gradeTypeId;
          for (let k = 0; k < grades[j].grades.length; k++) {
            grades[j].grades.map(function (element: any) {
              element.gradeType = gradeType;
            });
            gradesAllTypes.push(grades[j].grades[k]);
          }
        }

        const gradesTypesNames = data[i].data.gradeTypes;
        for (let i = 0; i < gradesAllTypes.length; i++) {
          for (let j = 0; j < gradesTypesNames.length; j++) {
            gradesAllTypes.map(function (element: any) {
              if (element.gradeType === gradesTypesNames[j].gradeTypeId) {
                element.gradeTypeName = gradesTypesNames[j].name;
              }
            });
          }
          gradesAllTypesWithNames.push(gradesAllTypes[i]);
        }

        const students = data[i].data.students;
        for (let i = 0; i < gradesAllTypesWithNames.length; i++) {
          for (let j = 0; j < students.length; j++) {
            gradesAllTypesWithNames.map(function (element: any) {
              if (element.userId === students[j].id) {
                element.studentName =
                  students[j].name + " " + students[j].surname;
                // element.studentSurname = students[j].surname;
              }
            });
          }
          StudentsWithGrades.push(gradesAllTypesWithNames[i]);
        }
      }
    }
  }
  console.log("StudentsWithGrades: ", StudentsWithGrades);
  let dddd = [];
  return (
    <>
      Wybrany przedmiot:
      <span style={{ color: "#503FBF", fontWeight: "bold" }}>
        {" "}
        {subjectName}{" "}
      </span>
      {data
        ? data.map((item, index) =>
            data[index].data.subject.id.toString() === subject ? (
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Imie i Nazwisko</th>
                    <th>Test 1</th>
                    <th>Test 2</th>
                    <th>Egzamin</th>
                  </tr>
                </thead>
                <tbody>
                  {StudentsWithGrades.map((item, index) => (
                   
                    <tr key={item.id}>
                      <td>{item.studentName}</td>
                      <td>{item.gradeTypeName === "Test1" && item.value}</td>
                      <td> {item.gradeTypeName === "Test2" && item.value}</td>
                      <td> {item.gradeTypeName === "Exam" && item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              ""
            )
          )
        : ""}
      {/*Tymczasowe wywołanie modalu do statystyk. Trzeba przerobic jako wywołanie z danej kolumny ocen. */}
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Pokaz statystyki
      </Button>
      <ModalWithStatistics
        show={modalShow}
        onHide={() => setModalShow(false)}
        gradeTypeId={33}
        userGuid={"ff"}
      />
    </>
  );
};

export default Subject;

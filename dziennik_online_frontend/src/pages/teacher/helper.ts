import { MouseEventHandler } from "react";

export interface StudentsGrades {
  gradeTypeWithGrades: Array<GradeTypeWithGrades>;
  gradeTypes: Array<GradeType>;
  students: Array<Student>;
  subject: Array<Student>;
}

export interface GradeTypeWithGrades {
  gradeTypeId: number;
  grades: Array<Grade>;
}

export interface Grade {
  id: number;
  value: number;
  userId: number;
}

export interface GradeType {
  gradeTypeId: number;
  name: string;
}

export interface Student {
  name: string;
  surname: string;
  id: number;
  login: string;
}

export interface Subject {
  classId: number;
  className: string;
  id: number;
  schoolSubjectName: string;
}

export interface GradeInterface {
  onHide: MouseEventHandler;
  show: boolean;
}

//mock to testing purpose:
export let fff = {
  gradeTypeWithGrades: [
    {
      gradeTypeId: 1003,
      grades: [
        { id: 1021, value: 2, userId: 1001 },
        { id: 1022, value: 5, userId: 1002 },
        { id: 1023, value: 4, userId: 1003 },
        { id: 1024, value: 5, userId: 1004 },
        { id: 1025, value: 2, userId: 1005 },
        { id: 1026, value: 4, userId: 1006 },
      ],
    },
    {
      gradeTypeId: 1004,
      grades: [
        { id: 2021, value: 2, userId: 1001 },
        { id: 2022, value: 6, userId: 1002 },
        { id: 2023, value: 2, userId: 1003 },
        { id: 2024, value: 6, userId: 1004 },
        { id: 2025, value: 2, userId: 1005 },
        { id: 2026, value: 6, userId: 1006 },
      ],
    },
    {
      gradeTypeId: 1005,
      grades: [
        { id: 3021, value: 1, userId: 1001 },
        { id: 3022, value: 3, userId: 1002 },
        { id: 3023, value: 1, userId: 1003 },
        { id: 3024, value: 3, userId: 1004 },
        { id: 3025, value: 1, userId: 1005 },
        { id: 3026, value: 3, userId: 1006 },
      ],
    },
  ],
  gradeTypes: [
    { gradeTypeId: 1003, name: "Geometria" },
    { gradeTypeId: 1004, name: "Algebra" },
    { gradeTypeId: 1005, name: "Logika" },
  ],
  students: [
    {
      name: "Alicja",
      surname: "Kowalska",
      id: 1001,
      login: "alicjakowalska",
    },
    { name: "Emanuel", surname: "Wojtysiak", id: 1002, login: "emanuel" },
    { name: "Igor", surname: "Kwiatkowski", id: 1003, login: "igorkwiat" },
    { name: "Mikolaj", surname: "Stepien", id: 1004, login: "miki" },
    { name: "Ignacy", surname: "Krasinski", id: 1005, login: "ignacy" },
    { name: "Natalia", surname: "Górecka", id: 1006, login: "natka" },
    { name: "Miron", surname: "Krupa", id: 1007, login: "mironkrupa" },
    { name: "Anna", surname: "Witkowska", id: 1008, login: "aneczka" },
    { name: "Kryspin", surname: "Sokolowski", id: 1009, login: "kryspin" },
    { name: "Oktawia", surname: "Baranowska", id: 1010, login: "oktawia" },
  ],
};

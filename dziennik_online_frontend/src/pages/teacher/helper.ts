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
  weight: number;
}

export interface Grade {
  id: number;
  value: number;
  userId: number;
  commentary: string;
}

export interface GradeType {
  gradeTypeId: number;
  name: string;
  weight: number;
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

export interface UpdateGradeInterface {
  onHide: MouseEventHandler;
  handleSuccess: () => void;
  show: boolean;
  grade: Grade,
  gradeTypeId: number,
}

export interface DeleteGradeInterface {
  handleHide: () => void;
  handleSuccess: () => void;
  show: boolean;
  gradeId: number,
  gradeTypeId: number,
}

export interface DeleteTypeInterface {
  handleHide: () => void;
  handleSuccess: () => void;
  show: boolean;
  gradeTypeId: number;
}
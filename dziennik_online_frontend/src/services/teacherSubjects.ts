import axios from "axios";
import { API_URL } from "../config/API_URL";

import { getStatisticsForGradeTypeId, getTeacherSubject } from "../mocks/mocks";

export const getTeacherSubjects = async (uuid: string) => {
  try {
    const response = await axios.post(`${API_URL}/teacher/subjects`, {
      guid: uuid,
    });
    return response.data;
  } catch (e) {
    throw e;
  }
};

export const getStatisticsGradeTypeId = async (
  userGuid: string,
  gradeTypeId: number
) => {
  try {
    const response = await axios.post(
      `${API_URL}/teacher/statistics/columnChartData`,
      {
        userGuid,
        gradeTypeId,
      }
    );
    return response.data;
  } catch (e) {
    throw e;
  }
};

export const getStudentsGrades = async (
  userGuid: string,
  subjectId: number
) => {
  try {
    const response = await axios.post(`${API_URL}/teacher/grades/GetSubject`, {
      userGuid,
      subjectId,
    });
    return response.data;
  } catch (e) {
    throw e;
  }
};

//////////////////////////

export const addGrade = async (
  userGuid: string,
  subjectId: number,
  commentary: string,
  value: number,
  studentId: number,
  gradeTypeId: number
) => {
  try {
    const response = await axios.post(`${API_URL}/teacher/grades/AddGrade`, {
      userGuid,
      subjectId,
      commentary,
      value,
      gradeTypeId,
      studentId,
    });
    return response.data;
  } catch (e) {
    throw e;
  }
};

export const updateGrade = async (
  commentary: string,
  value: number,
  studentId: number,
  subjectId: number,
  gradeTypeId: number,
  gradeId: number,
  userGuid: string
) => {
  try {
    const response = await axios.post(`${API_URL}/teacher/grades/UpdateGrade`, {
      commentary,
      value,
      studentId,
      subjectId,
      gradeId,
      gradeTypeId,
      userGuid,
    });
    return response.data;
  } catch (e) {
    throw e;
  }
};

export const addGradeType = async (
  name: string,
  weight: number,
  userGuid: string,
  subjectId: number,
  gradeDetails: {
    commentary: string;
    value: number;
    studentId: number;
  }
) => {
  try {
    const response = await axios.post(
      `${API_URL}/teacher/grades/AddGradeType`,
      {
        name,
        weight,
        userGuid,
        subjectId,
        gradeDetails,
      }
    );
    return response.data;
  } catch (e) {
    throw e;
  }
};

export const updateGradeType = async (
  name: string,
  weight: number,
  userGuid: string,
  subjectId: number,
  gradeTypeId: number,
  gradeDetails: {
    commentary: string;
    value: number;
    studentId: number;
    gradeId: number;
  }
) => {
  try {
    const response = await axios.post(
      `${API_URL}/teacher/grades/UpdateGradeType`,
      {
        name,
        weight,
        userGuid,
        subjectId,
        gradeTypeId,
        gradeDetails,
      }
    );

    return response.data;
  } catch (e) {
    throw e;
  }
};

export const deleteGrade = async (
  userGuid: string,
  subjectId: number,
  gradeTypeId: number,
  gradeId: number
) => {
  try {
    const response = await axios.delete(
      `${API_URL}/teacher/grades/DeleteGrade`,
      {
        data: {
          userGuid,
          subjectId,
          gradeTypeId,
          gradeId,
        },
      }
    );
    return response.data;
  } catch (e) {
    throw e;
  }
};

export const deleteGradeType = async (
  userGuid: string,
  subjectId: number,
  gradeTypeId: number
) => {
  try {
    const response = await axios.post(
      `${API_URL}/teacher/grades/DeleteGradeType`,
      {
        userGuid,
        subjectId,
        gradeTypeId,
      }
    );
    return response.data;
  } catch (e) {
    throw e;
  }
};

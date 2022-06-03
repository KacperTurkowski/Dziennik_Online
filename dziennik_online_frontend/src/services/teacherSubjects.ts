import axios from "axios";
import { API_URL } from "../config/API_URL";
import {
  getStatisticsForGradeTypeId,
  getTeacherSubject,
  getGradesPerStudent,
  getGradesPerGradesTypes,
} from "../mocks/mocks";

export const getTeacherSubjects = async (uuid: string) => {
  try {
    const response = await axios.post(`${API_URL}/teacher/subjects`, {
      uuid,
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

export const getGradeTypeAndGrades = async (
  userGuid: string,
  subjectId: number,
  gradeTypeId: number
) => {
  try {
    const response = await axios.post(
      `${API_URL}/teacher/grades/GetGradeType`,
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

// =========================================================================================================================
//TODO remove those functions after integrate with backend
export const getFakeTeacherSubjects = async () => {
  try {
    const response = await getTeacherSubject();
    return response.data;
  } catch (e) {
    throw e;
  }
};

export const getFakeStatisticsForGradeTypeId = async () => {
  try {
    const response = await getStatisticsForGradeTypeId();
    return response.data;
  } catch (e) {
    throw e;
  }
};

export const getFakeStudentsGrades = async () => {
  try {
    const response = await getGradesPerStudent();
    return response.data;
  } catch (e) {
    throw e;
  }
};

export const getFakeGradesTypesAndGrades = async () => {
  try {
    const response = await getGradesPerGradesTypes();
    return response.data;
  } catch (e) {
    throw e;
  }
};

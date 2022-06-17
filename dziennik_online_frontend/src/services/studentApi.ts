import axios from "axios";
import { API_URL } from "../config/API_URL";

export const getStudentSubjects = async (uuid: string) => {
    try {
        const response = await axios.post(`${API_URL}/student/subjects`, {
            "guid": uuid
        });

        return response.data;
    } catch (e) {
        throw e;
    }
}

export const getStudentLatestGrade = async (uuid: string) => {
    try {
        const response = await axios.post(`${API_URL}/student/grades/GetStartReport`, {
            'guid': uuid
        })

        return response.data;
    } catch (e) {
        throw e;
    }
}

export const getStudentAllGrades = async (subjectId: number, uuid: string): Promise<any[]> => {
    try {
        const responseGrades = await axios.post(`${API_URL}/student/grades/GetGrades`, {
            'subjectId': subjectId,
            'guid': uuid
        })

        const responseGradesData = responseGrades.data;

        return await Promise.all(responseGradesData.map(async (grade: any) => {
            const {gradeId, gradeTypeId} = grade;

            const avgData = await getStudentAverageForGrade(gradeTypeId, uuid);
            if (gradeId > 0) {
                const gradeSpecific = await getStudentGradeSpecificInformation(gradeId, uuid);
                return {
                    ...grade,
                    ...avgData,
                    gradeData: gradeSpecific
                }
            }

            return {
                ...grade,
                ...avgData,
            }

        }));
    } catch (e) {
        throw e;
    }
}

export const getStudentAverageForGrade = async (gradeTypeId: number, uuid: string) => {
    try {
        const response = await axios.post(`${API_URL}/student/statistics/averageForGrade`, {
            'gradeTypeId': gradeTypeId,
            'userGuid': uuid
        })

        return response.data;
    } catch (e) {
        throw e;
    }
}

export const getStudentGradeSpecificInformation = async (gradeId: number, uuid: string) => {
    try {
        const response = await axios.post(`${API_URL}/student/grades/GetGrade`, {
            'gradeId': gradeId,
            'guid': uuid
        })

        return response.data;
    } catch (e) {
        throw e;
    }
}

export const getStudentAvgGradeForSubject = async (schoolSubjectId: number, uuid: string) => {
    try {
        const response = await axios.post(`${API_URL}/student/statistics/averageForStudent`, {
            'schoolSubjectId': schoolSubjectId,
            'studentGuid': uuid
        })

        return response.data;
    } catch (e) {
        throw e;
    }
}

export const getStudentChartData = async (gradeTypeId: number, uuid: string) => {
    try {
        const response = await axios.post(`${API_URL}/student/statistics/columnChartData`, {
            'gradeTypeId': gradeTypeId,
            'userGuid': uuid
        })

        return response.data;
    } catch (e) {
        throw e;
    }
}
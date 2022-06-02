import axios from "axios";
import { API_URL } from "../config/API_URL";
import { getStatisticsForGradeTypeId, getTeacherSubject } from "../mocks/mocks";

export const getTeacherSubjects = async (uuid: string) => {
    try {
        const response = await axios.post(`${API_URL}/teacher/subjects`, {
            uuid
        });

        return response.data;
    } catch (e) {
        throw e;
    }
}

export const getStatisticsGradeTypeId = async (userGuid: string, gradeTypeId: number) => {
    try {
        const response = await axios.post(`${API_URL}/teacher/statistics/columnChartData`, {
            userGuid, gradeTypeId
        });

        return response.data;
    } catch (e) {
        throw e;
    }
}

// =========================================================================================================================
//TODO remove those functions after integrate with backend
export const getFakeTeacherSubjects = async() => {
    try {
        const response = await getTeacherSubject();
        return response.data
    } catch (e) {
        throw e;
    }
}

export const getFakeStatisticsForGradeTypeId = async() => {
    try {
        const response = await getStatisticsForGradeTypeId();
        return response.data
    } catch (e) {
        throw e;
    }
}
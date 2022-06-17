import axios from "axios";
import { API_URL } from "../config/API_URL";

export const getTeacherSubjects = async (uuid: string) => {
    try {
        const response = await axios.post(`${API_URL}/teacher/subjects`, {
            "guid": uuid
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
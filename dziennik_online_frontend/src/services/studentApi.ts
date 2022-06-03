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
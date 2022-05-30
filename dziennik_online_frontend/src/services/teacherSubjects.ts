import axios from "axios";
import { API_URL } from "../config/API_URL";
import { getTeacherSubject } from "../mocks/mocks";

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

//TODO remove after integrate with backend
export const getFakeTeacherSubjects = async() => {
    try {
        const response = await getTeacherSubject();
        return response.data
    } catch (e) {
        throw e;
    }
}
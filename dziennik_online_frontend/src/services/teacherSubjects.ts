import axios from "axios";
import { API_URL } from "../config/API_URL";

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

export const getFakeTeacherSubjects = async() => {
    try {
        const response = await axios.get('https://mocki.io/v1/029bf526-104b-4be9-83ee-b8f5b6e7c5f4')
        return response.data
    } catch (e) {
        throw e;
    }
}
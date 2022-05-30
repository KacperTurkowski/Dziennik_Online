//TODO: zintegroowac z backendem - obecnie fakowe dane

import axios from "axios";
import { API_URL } from "../config/API_URL";
import { getUser } from "../mocks/mocks";

export const loginApi = async(login: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/authorization`, {
            login: login,
            password: password
        })

        return response.data;
    } catch (e) {
        throw e;
    }
}

//TODO remove after integrate with backend
export const loginFakeApi = async() => {
    try {
        const response = await getUser()
        return response.data
    } catch (e) {
        throw e;
    }
}
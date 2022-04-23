//TODO: zintegroowac z backendem - obecnie fakowe dane

import axios from "axios";
import { API_URL } from "../config/API_URL";

export const loginApi = async(login: string, password: string) => {
    const response = await axios.post(`${API_URL}/authorization`, {
        login: login,
        password: password
    })


}

export const loginFakeApi = async() => {
    try {
        const response = await axios.get('https://mocki.io/v1/168aa607-c717-4719-bc2d-9df24e0f7cb8')
        return response.data
    } catch (e) {
        throw e;
    }
}
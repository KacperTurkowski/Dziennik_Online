import axios from 'axios';
import { API_URL } from '../config/API_URL';

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
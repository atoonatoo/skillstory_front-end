// utils/api.ts
import axios from 'axios';
import {LoginRequest, LoginResponse} from "../types/auth";

export const auth = async (data: LoginRequest): Promise<LoginResponse> => {
    try {
        const response = await axios.post<LoginResponse>('http://localhost:8080/api/users/auth',data);
        return response.data; // 타입이 명확하게 지정됨
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        throw new Error('Login failed');
    }
}
// types/user.ts

export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    token: string; // 서버에서 반환하는 JWT 토큰
    userId: number;
}

export interface UserInfo {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
    career: string;
    role: string;
}
"use client";  // 이 줄을 추가하여 클라이언트 컴포넌트임을 명시
import React, {useState} from "react";
import {user} from "../api/user";
import {LoginRequest, UserInfo} from "../types/user";
import { useRouter } from 'next/navigation'; // Next.js의 라우터 훅

const loginForm = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const loginData: LoginRequest = { username, password }; // 타입 명시적 지정
        try {
            const response = await user(loginData);
            console.log('Login successful:', response.token);

            const userInfo: UserInfo = {
                id: response.userId,
                name: "jun kim",
                email: "asd123@naver.com",
                phoneNumber: "010-1234-5678",
                address: "인천시 부평구 삼산동",
                career: "경력 10년차 시니어 개발자",
                role: "ROLE_USER"
            };

            localStorage.setItem('userInfo',JSON.stringify(userInfo));
            router.push("/home");
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('Login failed. Please try again.');
            }
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            {error && <p>{error}</p>}
            <button type="submit">Login</button>
        </form>
    );
};

export default loginForm;
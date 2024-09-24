"use client";  // 이 줄을 추가하여 클라이언트 컴포넌트임을 명시
import React, {useState} from "react";
import {auth} from "../api/auth";
import {LoginRequest} from "../types/auth";

const LoginForm = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const loginData: LoginRequest = { username, password }; // 타입 명시적 지정
        try {
            
            
            const response = await auth(loginData);
            console.log('Login successful:', response.token);
            // 로그인 성공 후 처리 (예: 토큰 저장, 리다이렉트 등)
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

export default LoginForm;

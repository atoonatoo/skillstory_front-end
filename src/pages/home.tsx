"use client";
import React, {useEffect, useState} from "react";
import {UserInfo} from "../app/types/user";

const home = () => {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    useEffect(() => {
        const storeUserInfo = localStorage.getItem('userInfo');
        if (storeUserInfo) {
            setUserInfo(JSON.parse(storeUserInfo) as UserInfo)
        }
    }, []);

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            {userInfo ? (
                <>
                    <h1>{userInfo?.name}님 환영합니다.</h1>
                    <p>이메일 : {userInfo.email}</p>
                    <p>전화번호 : {userInfo.phoneNumber}</p>
                    <p>주소 : {userInfo.address}</p>
                    <p>경력 : {userInfo.career}</p>
                    <p>역할 : {userInfo.role}</p>
                </>
            ) : (
                <h1>사용자 정보를 가져오는 중입니다..</h1>
            )}
            <h1>님 환영합니다.</h1>
        </div>
    );
}

export default home;
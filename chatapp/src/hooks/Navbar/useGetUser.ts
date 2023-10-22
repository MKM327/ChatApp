import { useEffect, useState } from "react";
import cookies from "next/headers";
interface UserData {
    userId: number,
    accessToken: string
}
export default async function getAccessToken(): Promise<UserData> {

    //hardcoded For now
    const user = {
        username: "test1",
        password: "test1"
    }
    const response = await fetch('http://localhost:6543/auth/', {
        body: JSON.stringify(user),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok)
        throw new Error('Network response was not ok');
    const data = await response.json();
    const requestData =
    {
        userId: data.userId,
        accessToken: data.access_token
    }
    return requestData;
}
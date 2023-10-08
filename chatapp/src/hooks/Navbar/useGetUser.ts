import { useEffect, useState } from "react";
import cookies from "next/headers";
interface UserData {
    userId: number,
    accessToken: string
}
export default function useGetAccessToken() {
    const [userData, setUserData] = useState<UserData | null>(null);
    //for now
    useEffect(() => {
        if (localStorage.getItem("userData") != null) {
            const data = localStorage.getItem("userData");
            if (data != null)
                setUserData(JSON.parse(data));
            return;
        }
        signIn();

    }, []);
    async function signIn() {
        //hardCoded For now
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
        setUserData(requestData);
        localStorage.setItem("userData", JSON.stringify(requestData));
    }
    return { userData }
}
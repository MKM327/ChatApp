import { authContext } from "@/contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import useAuthContext from "../App/useAuthContext";
import axios from "axios";
import getAccessToken from "../Navbar/useGetUser";
import { cookies } from "next/headers";

export interface Profile {
    id: string;
    firstName: string;
    lastName: string;
    avatar: string;
    isOnline: string;
    email: string;
    lastSeen: string;
}

export default async function getProfile() {
    let { accessToken, userId } = await getAccessToken();
    const baseUrl = "http://localhost:6543/"
    const response = await fetch(baseUrl + "profile/get/" + userId, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken
        }
    });
    const data = await response.json();
    return data;
}

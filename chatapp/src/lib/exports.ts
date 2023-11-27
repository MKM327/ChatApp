import { getSession } from "next-auth/react";

export const BASE_URL = "http://localhost:6543/";
export const fetcher = async (url) => {
    const { access_token } = await getSession();
    const headers = {
        Authorization: `Bearer ${access_token}`,
    };

    const response = await fetch(url, { headers });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch data');
    }

    return data;
};
export const conversationFetcher = async (url: string) => {
    const { access_token } = await getSession();
    const headers = {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json'
    };
    const response = await fetch(url, { method: 'GET', headers });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch data');
    }
    return data;
}
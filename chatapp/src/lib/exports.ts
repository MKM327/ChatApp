import { getSession } from "next-auth/react";
type Method = "GET" | "POST" | "PUT" | "DELETE";
export const BASE_URL = "http://localhost:6543/";
export const fetcher = async (url: string, type: Method, ...rest: any[]) => {
    const { access_token } = await getSession();
    const headers = {
        Authorization: `Bearer ${access_token}`,
    };
    const response = await fetch(url, { headers, method: type, body: rest[0] ?? null });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch data');
    }

    return data;
};
export const postFetcher = async (url, body) => {
    const { access_token } = await getSession();
    const headers = {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
    };

    const response = await fetch(url, { method: 'POST', headers, body });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch data');
    }

    return data;
}

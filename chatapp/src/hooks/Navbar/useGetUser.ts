"use client"
export default async function useGetAccessToken() {

    //for testing purposes its hardcoded
    if (typeof window === 'undefined') return '';
    if (document.cookie.includes('access_token')) {
        return document.cookie.split('=')[1];
    }
    const user = {
        username: 'test1',
        password: 'test1',
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
    return data.access_token;
}
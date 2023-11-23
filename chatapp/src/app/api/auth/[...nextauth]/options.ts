import { BASE_URL } from "@/lib/exports";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            id: "credProvider",
            type: "credentials",
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Enter a username" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                let data = await fetch(`${BASE_URL}auth/`, {
                    body: JSON.stringify(credentials),
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                );
                if (data.status === 201) {
                    let UserData = await data.json();
                    return UserData;
                } else {
                    return null

                }
            },

        }
        ),

    ],
    callbacks: {
        async jwt({ token, user, }) {

            return { ...user, ...token }
        },
        async session({ session, token, user }) {
            return { userId: token.userId, access_token: token.access_token };
        },
        async signIn({ user, account, profile }) {
            return true;
        },

    }
}

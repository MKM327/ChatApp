import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { BASE_URL } from "@/lib/exports";
import { authOptions } from "./options";
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
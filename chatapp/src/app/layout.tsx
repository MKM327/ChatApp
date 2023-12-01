import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MessageCenter from "@/components/Messages/MessageCenter";
import CenterWrapper from "@/components/App/CenterWrapper";
import connectToSocket from "@/lib/connectToSocket";
import { authOptions } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatApp",
  description: "a chat app for everyone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (session === undefined) 
    redirect("/api/auth/signin/credentials");
  // await connectToSocket();
  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/34181772a6.js"
          crossOrigin="anonymous"
          async
        ></script>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className={inter.className}>
        <div className="bg-primary-color h-full w-full">
          <div className="w-11/12 m-auto h-full flex items-center">
            <div className="w-full h-4/5 rounded-lg bg-primary-color border flex border-text-color">
              <Navbar />
              <CenterWrapper>
                <MessageCenter />
                {children}
              </CenterWrapper>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

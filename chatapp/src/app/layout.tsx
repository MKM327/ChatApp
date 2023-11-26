import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MessageCenter from "@/components/Messages/MessageCenter";
import CenterWrapper from "@/components/App/CenterWrapper";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatApp",
  description: "a chat app for everyone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/34181772a6.js"
          crossOrigin="anonymous"
          async
        ></script>
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

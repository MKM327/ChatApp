import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}

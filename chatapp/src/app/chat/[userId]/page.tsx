"use client";
import ChatCenter from "@/components/Chat/ChatCenter";

export default function Page({
  params,
  searchParams,
}: {
  params: { userId: string };
  searchParams: URLSearchParams;
}) {
  return <ChatCenter userId={params.userId} />;
}

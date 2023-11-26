import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
export default async function App() {
  // connectToSocket();
  const session = await getServerSession(authOptions);
  if (session === undefined) {
    redirect("/api/auth/signin/credentials");
  }
  return <main className="flex-1 flex">Click to a user to chat</main>;
}

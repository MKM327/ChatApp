import App from "@/components/App/App";
import Messages from "@/components/Messages/Messages";
import MyImage from "@/components/MyImage";
import Navbar from "@/components/Navbar/Navbar";
import { AuthProvider } from "@/contexts/AuthContext";
import useGetUser from "@/hooks/Navbar/useGetUser";
export default function Page() {
  return (
    <AuthProvider>
     <App />
    </AuthProvider>
  );
}

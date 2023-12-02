import { useHandleChat } from "@/hooks/Chat/useHandleChat";
import { createContext } from "react";
interface ChatContextProviderProps {
  isTyping: boolean;
  setIsTyping: (value: boolean) => void;
  message: string;
  setMessage: (value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ChatContext = createContext<ChatContextProviderProps | null>(null);

function ChatProvider({ children }: { children: React.ReactNode }) {
  const { handleSubmit, isTyping, message, setIsTyping, setMessage } =
    useHandleChat();
  return (
    <ChatContext.Provider
      value={{ isTyping, handleSubmit, message, setIsTyping, setMessage }}
    >
      {children}
    </ChatContext.Provider>
  );
}
export { ChatProvider, ChatContext };

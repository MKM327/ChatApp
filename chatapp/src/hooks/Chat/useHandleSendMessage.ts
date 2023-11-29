import { useRef } from "react";

export function useHandleSendMessage() {
    const messageRef = useRef<HTMLInputElement>(null);
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }
    return { messageRef, handleSubmit }
}
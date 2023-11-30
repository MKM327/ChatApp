import { useState } from "react";

type CardState = "OPEN" | "CLOSED";
export function useManageCardState() {
    const [cardState, setCardState] = useState<CardState>("CLOSED");
    function swapState() {
        setCardState(cardState === "OPEN" ? "CLOSED" : "OPEN");
    }
    return { cardState, swapState };
}
"use client"
import { useState } from "react";
type NavbarNames = "chat" | "groups" | "saved" | "settings"
export default function useGetRoutes() {
    const [activeTab, setActiveTab] = useState<NavbarNames>("chat");
    function setActive(name: NavbarNames) {
        setActiveTab(name);
    }
    return { activeTab, setActiveTab: setActive };
}
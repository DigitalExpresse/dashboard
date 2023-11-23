import { useContext } from "react";
import { AnimatePresence } from "framer-motion";
import { SidebarContext } from "../../contexts/SidebarContext.tsx";
import './sidebar.css';
import {SidebarDesktop} from "./SidebarDesktop.tsx";


export function SidebarDesktopContainer() {
    const { sidebarOpenDesktop } = useContext(SidebarContext);

    return (
        <AnimatePresence mode="wait">
            {sidebarOpenDesktop && (
                <>
                    <SidebarDesktop />
                </>
            )}
        </AnimatePresence>
    );
}






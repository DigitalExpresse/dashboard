import { useContext } from "react";
import { AnimatePresence } from "framer-motion";
import { SidebarContext } from "../../../contexts/SidebarContext.tsx";
import '../sidebar.css';
import {CloseSidebarDesktop} from "./CloseSidebarDesktop.tsx";
import {OpenSidebarDesktop} from "./OpenSidebarDesktop.tsx";


export function SidebarDesktopContainer() {

    const { sidebarOpenDesktop } = useContext(SidebarContext);
    const url = window.location.href;

    return (
        <div id={"sidebarDesktopContainer"} className={url.includes("connection") ? "hidden" : "relative z-40"}>
            <AnimatePresence mode="wait">
                {!sidebarOpenDesktop && <CloseSidebarDesktop />}
                {sidebarOpenDesktop && <OpenSidebarDesktop />}
            </AnimatePresence>
        </div>
    );
}






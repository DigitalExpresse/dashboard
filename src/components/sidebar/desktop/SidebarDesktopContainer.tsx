import { useContext } from "react";
import { AnimatePresence } from "framer-motion";
import { SidebarContext } from "../../../contexts/SidebarContext.tsx";
import '../sidebar.css';
import {CloseSidebarDesktop} from "./closeSidebarDesktop/CloseSidebarDesktop.tsx";
import {OpenSidebarDesktop} from "./openSidebarDesktop/OpenSidebarDesktop.tsx";
import {useUrlContext} from "../../../contexts/UrlContext.tsx";


export function SidebarDesktopContainer() {

    const { sidebarOpenDesktopIsActive } = useContext(SidebarContext);
    const {currentUrl} = useUrlContext();

    return (
        <div id={"sidebarDesktopContainer"} className={currentUrl.includes("connection") ? "hidden" : "relative z-40"}>
            <AnimatePresence mode="wait">
                {!sidebarOpenDesktopIsActive && <CloseSidebarDesktop />}
                {sidebarOpenDesktopIsActive && <OpenSidebarDesktop />}
            </AnimatePresence>
        </div>
    );
}






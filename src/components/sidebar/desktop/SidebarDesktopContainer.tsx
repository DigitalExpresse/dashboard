import { AnimatePresence } from "framer-motion";
import {useSidebarContext} from "../../../contexts/SidebarContext.tsx";
import '../sidebar.css';
import {CloseSidebarDesktop} from "./closeSidebarDesktop/CloseSidebarDesktop.tsx";
import {OpenSidebarDesktop} from "./openSidebarDesktop/OpenSidebarDesktop.tsx";
import {useUrlContext} from "../../../contexts/UrlContext.tsx";


export function SidebarDesktopContainer() {

    const { sidebarOpenDesktopIsActive } = useSidebarContext()
    const {currentUrl} = useUrlContext();

    return (
        <>

            {
                sidebarOpenDesktopIsActive ?
                <div className="w-[370px] bg-primaryBg"></div>
                :
                <div className="w-[88px] bg-primaryBg"></div>
            }

            <div id={"sidebarDesktopContainer"} className={currentUrl.includes("connection") ? "hidden" : "z-40 fixed"}>
                <AnimatePresence mode="wait">
                    {!sidebarOpenDesktopIsActive && <CloseSidebarDesktop/>}
                    {sidebarOpenDesktopIsActive && <OpenSidebarDesktop/>}
                </AnimatePresence>
            </div>
        </>

    );
}






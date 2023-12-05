import { AnimatePresence } from "framer-motion";
import {SidebarMobile} from "./SidebarMobile.tsx";
import {useSidebarMobileContainer} from "./sidebarMobileContainerService.tsx";

export function SidebarMobileContainer() {
    const {
        sidebarRef,
        handleFocusOut,
        sidebarOpenMobileIsActive,
        currentUrl,
    } = useSidebarMobileContainer();

    return (
        <div className={currentUrl.includes("connection") ? "hidden" : "z-[1000]"}>
            <AnimatePresence mode="wait">
                {sidebarOpenMobileIsActive && (
                    <>
                        <SidebarMobile sidebarRef={sidebarRef} handleFocusOut={handleFocusOut} />
                        <div
                            className={
                                "fixed top-0 left-0 w-screen h-screen bg-sidebar z-40 backdrop-filter backdrop-blur-[0.2px] transition-opacity duration-300 !overflow-y-scroll"
                            }
                        ></div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}

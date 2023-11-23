import { useContext, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { SidebarContext } from "../../../contexts/SidebarContext.tsx";
import '../sidebar.css';
import {SidebarMobile} from "./SidebarMobile.tsx";
import {blockOrUnblockScroll, focusSidebarForBlur} from "../sidebarService.tsx";


export function SidebarMobileContainer() {
    const { sidebarOpenMobile, setSidebarOpenMobile } = useContext(SidebarContext);
    const sidebarRef: any = useRef(null);

    const handleFocusOut = (event: any) => {
        const relatedTarget = event.relatedTarget || document.activeElement;
        if (sidebarRef.current && !sidebarRef.current.contains(relatedTarget)) {
            setSidebarOpenMobile(false);
        }
    };


    useEffect(() => {

        if (sidebarOpenMobile) focusSidebarForBlur();

        blockOrUnblockScroll(sidebarOpenMobile);

    }, [sidebarOpenMobile]);

    return (
        <AnimatePresence mode="wait">
            {sidebarOpenMobile && (
                <>

                    <SidebarMobile sidebarRef={sidebarRef} handleFocusOut={handleFocusOut} />
                    <div
                        className={"fixed top-0 left-0 w-screen h-screen bg-sidebar z-40 backdrop-filter backdrop-blur-[0.2px] transition-opacity duration-300 !overflow-y-scroll"}>
                    </div>

                </>
            )}
        </AnimatePresence>
    );
}






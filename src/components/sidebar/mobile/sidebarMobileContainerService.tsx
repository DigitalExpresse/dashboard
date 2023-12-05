import { useContext, useEffect, useRef } from "react";
import { SidebarContext } from "../../../contexts/SidebarContext.tsx";
import '../sidebar.css';
import { useUrlContext } from "../../../contexts/UrlContext.tsx";
import { useDropdownState } from "../../dropdown/dropdownService.tsx";

export const useSidebarMobileContainer = () => {

    const { sidebarOpenMobileIsActive, setSidebarOpenMobileIsActive } = useContext(SidebarContext);
    const { currentUrl } = useUrlContext();

    const { dropdownOpen, toggleMenu } = useDropdownState(false, "connection", currentUrl);


    const sidebarRef: any = useRef(null);


    useEffect(() => {
        if (sidebarOpenMobileIsActive) focusSidebarForBlur();
        blockOrUnblockScroll(sidebarOpenMobileIsActive);
    }, [sidebarOpenMobileIsActive]);


    const handleFocusOut = (event: any) => {
        const relatedTarget = event.relatedTarget || document.activeElement;
        if (sidebarRef.current && !sidebarRef.current.contains(relatedTarget)) {
            setSidebarOpenMobileIsActive(false);
        }
    };

    const blockOrUnblockScroll = (sidebarOpen: any) => {
        document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
    };

    const focusSidebarForBlur = () => {
        // @ts-ignore
        document.getElementById("sidebar").focus();
    }

    return { sidebarRef, handleFocusOut, sidebarOpenMobileIsActive, toggleMenu, currentUrl, dropdownOpen };
};

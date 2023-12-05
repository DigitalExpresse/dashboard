import { useContext, useEffect, useRef } from "react";
import { SidebarContext } from "../../../contexts/SidebarContext.tsx";
import '../sidebar.css';
import { blockOrUnblockScroll, focusSidebarForBlur } from "../sidebarService.tsx";
import { useUrlContext } from "../../../contexts/UrlContext.tsx";
import { useDropdownState } from "../../dropdown/dropdownService.tsx";

export const useSidebarMobileContainer = () => {
    const { sidebarOpenMobileIsActive, setSidebarOpenMobileIsActive } = useContext(SidebarContext);
    const sidebarRef: any = useRef(null);
    const { currentUrl } = useUrlContext();

    const { dropdownOpen, toggleMenu } = useDropdownState(false, "connection", currentUrl);

    const handleFocusOut = (event: any) => {
        const relatedTarget = event.relatedTarget || document.activeElement;
        if (sidebarRef.current && !sidebarRef.current.contains(relatedTarget)) {
            setSidebarOpenMobileIsActive(false);
        }
    };

    useEffect(() => {
        if (sidebarOpenMobileIsActive) focusSidebarForBlur();
        blockOrUnblockScroll(sidebarOpenMobileIsActive);
    }, [sidebarOpenMobileIsActive]);

    return { sidebarRef, handleFocusOut, sidebarOpenMobileIsActive, toggleMenu, currentUrl, dropdownOpen };
};

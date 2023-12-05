import {useContext, useState} from "react";
import { SidebarContext } from "../../contexts/SidebarContext.tsx";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext.tsx";
import { useUrlContext } from "../../contexts/UrlContext.tsx";

export const useNavbarService = () => {

    const { setSidebarOpenMobileIsActive } = useContext(SidebarContext);
    const { isDesktopScreen } = useContext(ScreenSizeContext);
    const { currentUrl } = useUrlContext();

    const [dropdownIsFocused, setDropdownIsFocused] = useState(false);

    const items = [
        { path: "/utilisateur/profil", label: "Mon profil" },
    ];

    const toggleDropdownFocus = () => {
        setDropdownIsFocused((prevState) => !prevState);
    };

    return { dropdownIsFocused, toggleDropdownFocus, setSidebarOpenMobileIsActive, isDesktopScreen, currentUrl, items };
};

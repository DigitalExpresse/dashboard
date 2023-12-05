import {useState} from "react";
import {useSidebarContext} from "../../contexts/SidebarContext.tsx";
import {useScreenSizeContext} from "../../contexts/ScreenSizeContext.tsx";
import { useUrlContext } from "../../contexts/UrlContext.tsx";

export const useNavbarService = () => {

    const { setSidebarOpenMobileIsActive } = useSidebarContext()
    const { isDesktopScreen } = useScreenSizeContext()
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

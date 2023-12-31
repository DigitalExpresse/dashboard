import {useSidebarContext} from "../../../../contexts/SidebarContext.tsx";

import {
    dropdownMenuAndCardData,
    dropdownReservationData,
    dropdownUserData,
} from "../../dropdownSidebarData.tsx";

export const useCloseSidebarDesktopService = () => {
    const { setSidebarOpenDesktopIsActive } = useSidebarContext()

    const openSidebar = () => {
        setSidebarOpenDesktopIsActive(true);
    };

    const dropdowns = [
        {
            label: dropdownUserData.label,
            icon: dropdownUserData.icon,
            items: dropdownUserData.items,
            principalPath: dropdownUserData.principalPath,
        },
        {
            label: dropdownMenuAndCardData.label,
            icon: dropdownMenuAndCardData.icon,
            items: dropdownMenuAndCardData.items,
            principalPath: dropdownMenuAndCardData.principalPath,
        },
        {
            label: dropdownReservationData.label,
            icon: dropdownReservationData.icon,
            items: dropdownReservationData.items,
            principalPath: dropdownReservationData.principalPath,
        },
    ];

    return { openSidebar, dropdowns };
};

export default useCloseSidebarDesktopService;

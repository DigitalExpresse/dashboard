import { useState } from "react";
import {useUrlContext} from "../../contexts/UrlContext.tsx";

export const useDropdownSmallService = () => {

    const [hoveredDropdown, setHoveredDropdown]: boolean | any = useState(null);
    const { currentUrl } : string | any = useUrlContext();

    const handleMouseEnter = (label: string) => {
        setHoveredDropdown(label);
    };

    const handleMouseLeave = (e: any) => {
        if (e.relatedTarget && (e.relatedTarget.id === "flyoutMenu" || e.relatedTarget.id.includes("flyoutMenu"))) {
            return;
        }
        setHoveredDropdown(null);
    };

    return { hoveredDropdown, handleMouseEnter, handleMouseLeave, currentUrl };
};

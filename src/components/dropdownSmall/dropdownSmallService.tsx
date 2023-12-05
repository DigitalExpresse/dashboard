import { useState } from "react";
import {useUrlContext} from "../../contexts/UrlContext.tsx";

export const useDropdownSmallService = () => {
    const [hoveredDropdown, setHoveredDropdown] = useState(null);
    const { currentUrl } = useUrlContext();

    const handleMouseEnter = (label: any) => {
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

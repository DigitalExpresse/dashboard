// dropdownService.tsx
import { useState, useEffect } from "react";

export const useDropdownState = (initialState: boolean, principalPath: string, currentUrl: string) => {
    const [dropdownOpen, setDropdownOpen] = useState(initialState);

    useEffect(() => {
        if (currentUrl.includes(principalPath)) {
            setDropdownOpen(true);
        }
    }, [principalPath, currentUrl]);

    const toggleMenu = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return { dropdownOpen, toggleMenu };
};

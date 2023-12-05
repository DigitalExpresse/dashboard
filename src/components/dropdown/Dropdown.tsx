// Dropdown.tsx
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AnimatePresence } from "framer-motion";
import {useSidebarContext} from "../../contexts/SidebarContext.tsx";
import { useUrlContext } from "../../contexts/UrlContext.tsx";
import { useDropdownState } from "./dropdownService.tsx";
import { DropdownNavigation } from "./DropdownNavigation.tsx";

interface DropdownProps {
    label: string;
    icon: React.ReactNode;
    items: { path: string; label: string }[];
    principalPath: string;
}

const Dropdown: React.FC<DropdownProps> = ({ label, icon, items, principalPath }) => {
      const { setSidebarOpenMobileIsActive, setSidebarOpenDesktopIsActive } = useSidebarContext();
    const { currentUrl, setCurrentUrl } = useUrlContext();
    const { dropdownOpen, toggleMenu } = useDropdownState(false, principalPath, currentUrl);

    return (
        <div>
            <div
                tabIndex={1}
                id={"dropdown-" + label}
                className={
                    currentUrl.includes(principalPath)
                        ? "bg-primaryLight flex gap-2 items-center pl-[8px] py-[6px] pr-[15px] focus:outline-0 rounded-xl cursor-pointer"
                        : "flex gap-2 items-center pl-[8px] py-[6px] pr-[15px] bg-gray-300 bg-opacity-40 focus:!bg-gray-300 focus:!bg-opacity-40 focus:outline-0 rounded-xl cursor-pointer"
                }
                onClick={toggleMenu}
            >
                {icon}
                <p className={"font-medium" + (currentUrl.includes(principalPath) ? " text-primary" : "")}>{label}</p>
                <ExpandMoreIcon
                    className={"ml-auto" + (currentUrl.includes(principalPath) ? " text-primary" : "")}
                />
            </div>
            <AnimatePresence>
                {dropdownOpen &&
                    <DropdownNavigation
                        items={items}
                        setSidebarOpenMobileIsActive={setSidebarOpenMobileIsActive}
                        setSidebarOpenDesktopIsActive={setSidebarOpenDesktopIsActive}
                        setCurrentUrl={setCurrentUrl}
                        currentUrl={currentUrl}
                    />}
            </AnimatePresence>
        </div>
    );
};

export default Dropdown;

import React, { useContext, useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { SidebarContext } from "../../contexts/SidebarContext.tsx";
import {useUrlContext} from "../../contexts/UrlContext.tsx";

interface DropdownProps {
    label: string;
    icon: React.ReactNode;
    items: { path: string; label: string }[];
    principalPath: string;
}

const Dropdown: React.FC<DropdownProps> = ({ label, icon, items, principalPath }) => {
    const { sidebarOpenMobile, setSidebarOpenMobile, sidebarOpenDesktop, setSidebarOpenDesktop } = useContext( SidebarContext );

    const [dropdownOpen, setDropdownOpen]: [boolean, any] = useState(false);
    const {currentUrl, setCurrentUrl} = useUrlContext();

    useEffect(() => {
        if (currentUrl.includes(principalPath)) {
            setDropdownOpen(true);
        }
    }, [sidebarOpenMobile, sidebarOpenDesktop, principalPath, currentUrl]);

    const toggleMenu = () => {
        setDropdownOpen(!dropdownOpen);
    };

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
                <ExpandMoreIcon className={"ml-auto" + (currentUrl.includes(principalPath) ? " text-primary" : "")} />
            </div>
            <AnimatePresence>
                {dropdownOpen && (
                    <motion.div
                        className="flex flex-col justify-start gap-2 pl-[20px] pt-[10px] pb-[6px]"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        {items.map((item) => (
                            <NavLink
                                key={item.path}
                                className={"font-medium flex !items-center justify-items-center gap-2 text-[13px] text-textDark"}
                                to={item.path}
                                onClick={() => {
                                    setSidebarOpenMobile(false)
                                    setSidebarOpenDesktop(false)
                                    setCurrentUrl(item.path)
                                }}
                            >
                <span
                    className={
                        "mr-[15px] text-2xl" + (currentUrl.includes(item.path) ? " text-primary" : " text-gray-700")
                    }
                >
                  &#8226;
                </span>
                                <span className={"mt-0.5 text-gray-600"}>{item.label}</span>
                            </NavLink>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Dropdown;

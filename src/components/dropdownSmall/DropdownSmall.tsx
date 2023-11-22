import React, {useContext, useEffect, useState} from "react";
import {SidebarContext} from "../../contexts/SidebarContext.tsx";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {AnimatePresence, motion} from "framer-motion";
import {NavLink} from "react-router-dom";

interface DropdownProps {
    label: string;
    icon: React.ReactNode;
    items: { path: string; label: string }[];
    principalPath: string;
}

export const DropdownSmall: React.FC<DropdownProps> = ({ label, icon, items, principalPath }) => {
    const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);

    const [dropdownOpen, setDropdownOpen]: [boolean, any] = useState(true);
    const url = window.location.href;

    useEffect(() => {
        if (url.includes(principalPath)) {
            setDropdownOpen(true);
        }
    }, [sidebarOpen, principalPath, url]);

    const toggleMenu = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div>
            <div
                tabIndex={1}
                id={"dropdown-" + label}
                className={
                    url.includes(principalPath)
                        ? "bg-primaryLight flex flex-col gap-1 items-center pl-[5px] py-[6px] pr-[15px] focus:outline-0 rounded-xl cursor-pointer"
                        : "flex flex-col gap-1 items-center px-[5px] py-[6px] bg-opacity-40 focus:!bg-gray-300 focus:!bg-opacity-40 focus:outline-0 rounded-xl cursor-pointer"
                }
                onClick={toggleMenu}
            >
                {icon}
                <p className={"font-medium !text-[10px] text-center" + (url.includes(principalPath) ? " text-primary" : "")}>{label}</p>
                {/*<ExpandMoreIcon className={"ml-auto" + (url.includes(principalPath) ? " text-primary" : "")} />*/}
            </div>
            {/*<AnimatePresence>*/}
            {/*    {dropdownOpen && (*/}
            {/*        <motion.div*/}
            {/*            className="flex flex-col justify-start gap-2 pl-[20px] pt-[10px] pb-[6px]"*/}
            {/*            initial={{ opacity: 0, y: -10 }}*/}
            {/*            animate={{ opacity: 1, y: 0 }}*/}
            {/*            exit={{ opacity: 0, y: -10 }}*/}
            {/*        >*/}
            {/*            {items.map((item) => (*/}
            {/*                <NavLink*/}
            {/*                    key={item.path}*/}
            {/*                    className={"font-medium flex !items-center justify-items-center gap-2 text-[13px] text-textDark"}*/}
            {/*                    to={item.path}*/}
            {/*                    onClick={() => setSidebarOpen(false)}*/}
            {/*                >*/}
            {/*    <span*/}
            {/*        className={*/}
            {/*            "mr-[15px] text-2xl" + (url.includes(item.path) ? " text-primary" : "")*/}
            {/*        }*/}
            {/*    >*/}
            {/*      &#8226;*/}
            {/*    </span>*/}
            {/*                    <span className={"mt-0.5"}>{item.label}</span>*/}
            {/*                </NavLink>*/}
            {/*            ))}*/}
            {/*        </motion.div>*/}
            {/*    )}*/}
            {/*</AnimatePresence>*/}
        </div>
    );
};

export default DropdownSmall;
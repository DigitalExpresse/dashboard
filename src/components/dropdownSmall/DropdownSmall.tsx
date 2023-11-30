import React, { useState } from "react";
import "./dropdownSmall.css";
import FlyoutMenu from "../FlyoutMenu.tsx"; // Assurez-vous d'importer votre fichier CSS

interface DropdownProps {
    label: string;
    icon: React.ReactNode;
    items: { path: string; label: string }[];
    principalPath: string;
}

export const DropdownSmall: React.FC<DropdownProps> = ({ label, icon, items, principalPath }) => {

    const [isHovered, setIsHovered] = useState(false);
    const url = window.location.href;



    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
            <div className={"relative"}>
                <div
                    tabIndex={0}
                    id={"dropdown-" + label}
                    className={
                            "flex flex-col gap-1 items-center px-[8px] py-[8px] bg-opacity-40 focus:outline-0 rounded-xl cursor-pointer hover:bg-gray-300 hover:bg-opacity-40"
                        + (url.includes(principalPath) ? " bg-primaryLight" : "")
                    }
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {icon}
                    <p className={"font-medium !text-[10px] text-center" + (url.includes(principalPath) ? " text-primary" : "")}>{label}</p>
                </div>
                <FlyoutMenu items={items} isHovered={isHovered} setIsHovered={setIsHovered} />
            </div>

    );
};

export default DropdownSmall;

import React from "react";
import FlyoutMenu from "../flyoutMenu/FlyoutMenu.tsx"; // Assurez-vous d'importer votre fichier CSS
import "./dropdownSmall.css";
import {useDropdownSmallContext} from "../../contexts/DropdownSmallContext.tsx";
import {useUrlContext} from "../../contexts/UrlContext.tsx";

interface DropdownProps {
    label: string;
    icon: React.ReactNode;
    items: { path: string; label: string }[];
    principalPath: string;
}

export const DropdownSmall: React.FC<DropdownProps> = ({ label, icon, items, principalPath }) => {

    // const [isHovered, setIsHovered] = useState(false);
    const {hoveredDropdown, setHoveredDropdown} = useDropdownSmallContext();
    const {currentUrl} = useUrlContext();

    const handleMouseEnter = () => {
        setHoveredDropdown(label);
    };

    const handleMouseLeave = (e) => {
        if (e.relatedTarget && e.relatedTarget.id === "flyoutMenu" || e.relatedTarget && e.relatedTarget.id.includes("flyoutMenu")) {
            return;
        }
        setHoveredDropdown(null);
    };

    return (
            <div className={"relative"}>
                <div
                    tabIndex={0}
                    id={"dropdown-" + label}
                    className={
                        "flex flex-col gap-1 items-center px-[8px] py-[8px] bg-opacity-40 focus:outline-0 rounded-xl cursor-pointer hover:bg-gray-300 hover:bg-opacity-40"
                        + (currentUrl.includes(principalPath) ? " bg-primaryLight" : "")
                    }
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {icon}
                    <p className={"font-medium !text-[10px] text-center" + (currentUrl.includes(principalPath) ? " text-primary" : "")}>
                        {label}
                    </p>
                </div>
                <FlyoutMenu items={items} isOpen={hoveredDropdown === label} setIsOpen={setHoveredDropdown} position={{top: "0", left: "83px"}}/>
            </div>
    );
};

export default DropdownSmall;

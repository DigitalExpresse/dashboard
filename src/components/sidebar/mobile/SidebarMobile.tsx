import {motion} from "framer-motion";
import logo from "../../../assets/images/logoWithoutText.png";
import Dropdown from "../../dropdown/Dropdown.tsx";
import {dropdownMenuAndCardData, dropdownReservationData, dropdownUserData} from "../dropdownSidebarData.tsx";

export function SidebarMobile({ sidebarRef, handleFocusOut }) {

    return (
        <motion.div
            key="sidebar"
            ref={sidebarRef}
            initial={{ x: -280, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -280, opacity: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
            id={"sidebar"}
            tabIndex={1}
            onBlur={handleFocusOut}
            onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
            }}
            className={
                "h-screen w-[280px] absolute focus:outline-0 bg-[#FAFAFAFF] px-[16px] flex flex-col gap-3 text-semiDark z-[1000]"
            }
        >
            <img
                className={"w-[40px] mt-[18px] ml-[10px] mb-[10px]"}
                src={logo}
                alt="Logo digital express"
            />

            <div className={"flex flex-col gap-5"}>
                <h3 className={"font-medium text-[13px] pl-[10px] pt-[10px] uppercase"}>
                    Dashboard
                </h3>

                <Dropdown
                    label={dropdownUserData.label}
                    icon={dropdownUserData.icon}
                    items={dropdownUserData.items}
                    principalPath={dropdownUserData.principalPath}
                />

                <Dropdown
                    label={dropdownMenuAndCardData.label}
                    icon={dropdownMenuAndCardData.icon}
                    items={dropdownMenuAndCardData.items}
                    principalPath={dropdownMenuAndCardData.principalPath}
                />

                <Dropdown
                    label={dropdownReservationData.label}
                    icon={dropdownReservationData.icon}
                    items={dropdownReservationData.items}
                    principalPath={dropdownReservationData.principalPath}
                />
            </div>
        </motion.div>
    );
}
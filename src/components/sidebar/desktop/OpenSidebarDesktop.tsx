import {motion} from "framer-motion";
import logo from "../../../assets/images/logoWithoutText.png";
import Dropdown from "../../dropdown/Dropdown.tsx";
import {dropdownMenuAndCardData, dropdownReservationData, dropdownUserData} from "../dropdownSidebarData.tsx";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import {useContext} from "react";
import {SidebarContext} from "../../../contexts/SidebarContext.tsx";

export function OpenSidebarDesktop() {

    const {setSidebarOpenDesktopIsActive} = useContext(SidebarContext);

    const closeSidebar = () => {
        setSidebarOpenDesktopIsActive(false);
    }

    return (
        <motion.div
            key="sidebar"
            initial={{ x: -280, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -280, opacity: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
            id={"sidebar"}
            tabIndex={1}
            className={
                "h-screen w-[280px] z-50 focus:outline-0 bg-[#FAFAFAFF] px-[16px] flex flex-col gap-3 text-textDark border-2 border-dotted"
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
                <div
                    className={"absolute z-50 top-[27px] right-[-13px] w-[24px] h-[24px] rounded-full border-2 border-dotted bg-grayLight"}
                    onClick={closeSidebar}
                >
                    <KeyboardArrowLeftIcon className={"!text-[20px] text-center mr-[1.5px] mb-1 text-gray-600"} />
                </div>

            </div>
        </motion.div>
    );
}
import {motion} from "framer-motion";
import logo from "../../../assets/images/logoWithoutText.png";
import DropdownSmall from "../../dropdownSmall/DropdownSmall.tsx";
import {dropdownMenuAndCardData, dropdownReservationData, dropdownUserData} from "../dropdownSidebarData.tsx";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {useContext} from "react";
import {SidebarContext} from "../../../contexts/SidebarContext.tsx";

export function CloseSidebarDesktop () {

    const { setSidebarOpenDesktopIsActive } = useContext(SidebarContext);

    const openSidebar = () => {
        setSidebarOpenDesktopIsActive(true);
    }

    return (

        <>

            <motion.div
                key="sidebar"
                initial={{ x: -280, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -280, opacity: 0 }}
                transition={{ type: "tween", duration: 0.3 }}
                className={
                    "h-screen w-[88px] z-50 focus:outline-0 bg-grayLight flex flex-col gap-3 text-textDark border-x-2 border-dotted"
                }
            >
                <img
                    className={"w-[40px] mt-[18px] mx-auto mb-[10px]"}
                    src={logo}
                    alt="Logo digital express"
                />

                <div className={"flex flex-col gap-3"}>

                    <DropdownSmall
                        label={dropdownUserData.label}
                        icon={dropdownUserData.icon}
                        items={dropdownUserData.items}
                        principalPath={dropdownUserData.principalPath}
                    />

                    <DropdownSmall
                        label={dropdownMenuAndCardData.label}
                        icon={dropdownMenuAndCardData.icon}
                        items={dropdownMenuAndCardData.items}
                        principalPath={dropdownMenuAndCardData.principalPath}
                    />

                    <DropdownSmall
                        label={dropdownReservationData.label}
                        icon={dropdownReservationData.icon}
                        items={dropdownReservationData.items}
                        principalPath={dropdownReservationData.principalPath}
                    />

                    <div
                        className={"absolute z-50 top-[27px] right-[-13px] w-[24px] h-[24px] rounded-full border-2 border-dotted bg-grayLight"}
                        onClick={openSidebar}
                    >
                        <KeyboardArrowRightIcon className={"!text-[20px] text-center ml-[1px] mb-1 text-gray-600"} />
                    </div>

                </div>
            </motion.div>
        </>

    )
}
import { useContext, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SidebarContext } from "../../../contexts/SidebarContext.tsx";
import logo from "../../../assets/images/logoWithoutText.png";
import Dropdown from "./dropdownUser/Dropdown.tsx";
import {dropdownReservationData, dropdownMenuAndCardData, dropdownUserData} from "./sidebarService.tsx";
import './sidebar.css';


function SidebarContainer() {
    const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);
    const sidebarRef: any = useRef(null);

    const handleFocusOut = (event: any) => {
        const relatedTarget = event.relatedTarget || document.activeElement;
        if (sidebarRef.current && !sidebarRef.current.contains(relatedTarget)) {
            setSidebarOpen(false);
        }
    };

    useEffect(() => {
        if (sidebarOpen) {
            // @ts-ignore
            document.getElementById("sidebar").focus();
            // @ts-ignore
            document.getElementById("body").style.overflow = "hidden";
            // @ts-ignore
            document.getElementById("sidebar").style.overflow = "auto";
        }
        document.body.style.overflow = sidebarOpen ? "hidden" : "auto";

    }, [sidebarOpen]);

    return (
        <AnimatePresence mode="wait">
            {sidebarOpen && (
                <>
                    <Sidebar
                        sidebarRef={sidebarRef}
                        handleFocusOut={handleFocusOut}
                    />

                    <div
                        className={"fixed top-0 left-0 w-screen h-screen bg-sidebar z-40 backdrop-filter backdrop-blur-[0.2px] transition-opacity duration-300 !overflow-y-scroll"}>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}

export default SidebarContainer;


export function Sidebar({ sidebarRef, handleFocusOut }) {

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
                "h-screen w-[280px] z-50 absolute focus:outline-0 bg-[#FAFAFAFF] px-[16px] flex flex-col gap-3 text-textDark"
            }
        >
            <img
                className={"w-[40px] mt-[30px] ml-[10px] mb-[10px]"}
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
                <Dropdown
                    label={dropdownReservationData.label}
                    icon={dropdownReservationData.icon}
                    items={dropdownReservationData.items}
                    principalPath={dropdownReservationData.principalPath}
                />     <Dropdown
                label={dropdownReservationData.label}
                icon={dropdownReservationData.icon}
                items={dropdownReservationData.items}
                principalPath={dropdownReservationData.principalPath}
            />

            </div>
        </motion.div>
    );
}

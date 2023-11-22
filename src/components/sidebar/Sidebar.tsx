import { useContext, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SidebarContext } from "../../contexts/SidebarContext.tsx";
import Dropdown from "../dropdown/Dropdown.tsx";
import DropdownSmall from "../dropdownSmall/DropdownSmall.tsx";
import logo from "../../assets/images/logoWithoutText.png";

import {dropdownReservationData, dropdownMenuAndCardData, dropdownUserData} from "./sidebarService.tsx";
import './sidebar.css';


function SidebarContainer() {
    const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);
    const sidebarRef: any = useRef(null);
    const screenIsDesktop = window.innerWidth > 1024;

    const handleFocusOut = (event: any) => {
        const relatedTarget = event.relatedTarget || document.activeElement;
        if (sidebarRef.current && !sidebarRef.current.contains(relatedTarget)) {
            setSidebarOpen(false);
        }
    };

    const blockOrUnblockScroll = () => {
        document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
    };

    const focusSidebarForBlur = () => {
        // @ts-ignore
        document.getElementById("sidebar").focus();
    }

    useEffect(() => {

        if (sidebarOpen) focusSidebarForBlur();

        if(!screenIsDesktop) blockOrUnblockScroll();

    }, [sidebarOpen]);

    return (
        <AnimatePresence mode="wait">
            {sidebarOpen && (
                <>
                    {screenIsDesktop ? (<SidebarDesktop sidebarRef={sidebarRef} handleFocusOut={handleFocusOut} />) :
                        (
                            <>
                                <SidebarMobile sidebarRef={sidebarRef} handleFocusOut={handleFocusOut} />
                                <div
                                    className={"fixed top-0 left-0 w-screen h-screen bg-sidebar z-40 backdrop-filter backdrop-blur-[0.2px] transition-opacity duration-300 !overflow-y-scroll"}>
                                </div>
                            </>
                        )
                    }
                </>
            )}
        </AnimatePresence>
    );
}

export default SidebarContainer;


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
                "h-screen w-[280px] z-50 absolute focus:outline-0 bg-[#FAFAFAFF] px-[16px] flex flex-col gap-3 text-textDark"
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

export function SidebarDesktop ({ sidebarRef, handleFocusOut }) {

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
                "h-screen fixed w-[88px] z-50 focus:outline-0 bg-grayLight flex flex-col gap-3 text-textDark border-x-2 border-dotted"
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
                    label={"Produit"}
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

            </div>
        </motion.div>

    )
}

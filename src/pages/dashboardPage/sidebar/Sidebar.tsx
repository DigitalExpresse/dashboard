import { useContext, useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SidebarContext } from "../../../contexts/SidebarContext.tsx";
import logo from "../../../assets/images/logoWithoutText.png";
import DropdownUser from "./dropdownUser/DropdownUser.tsx";
import './sidebar.css'

function Sidebar() {
    const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);
    const sidebarRef: any = useRef(null);

    const handleFocusOut = (event: any) => {
        console.log("focus out")
        const relatedTarget = event.relatedTarget || document.activeElement;
        if (sidebarRef.current && !sidebarRef.current.contains(relatedTarget)) {
            setSidebarOpen(false);
        }
    };

    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (sidebarOpen) {
            // @ts-ignore
            document.getElementById("sidebar").focus();
        }
    }, [sidebarOpen]);

    return (
            <AnimatePresence>
                {sidebarOpen && (
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
                            e.stopPropagation()
                            e.preventDefault()
                        }}
                        className={
                            "h-screen w-[280px] z-50 absolute focus:outline-0 bg-[#FAFAFAFF] px-[16px] flex flex-col gap-3"
                        }
                    >
                        <img
                            className={"w-[40px] mt-[30px] ml-[10px] mb-[10px]"}
                            src={logo}
                            alt="Logo digital express"
                        />

                        <div className={"flex flex-col gap-5"}>
                            <h3 className={"font-medium text-[14px] pl-[10px] pt-[10px]"}>
                                Tableau de bord
                            </h3>

                            <DropdownUser sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
                        </div>
                    </motion.div>
                )}

                {
                    // @ts-ignore
                    sidebarOpen &&
                    <div
                        className={
                        "fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-40 backdrop-filter backdrop-blur-[0.2px] transition-opacity duration-300"
                        }
                    >
                    </div>
                }
            </AnimatePresence>
    );
}

export default Sidebar;
import {Avatar} from "@mui/material";
import avatar from "../../assets/images/avatar.png";
import MenuAltIcon from "../../icons/MenuAltIcon.tsx";
import NotificationIcon from "../../icons/NotificationIcon.tsx";
import './navbar.css'
import {SidebarContext} from "../../contexts/SidebarContext.tsx";
import {useContext, useState} from "react";
import {ScreenSizeContext} from "../../contexts/ScreenSizeContext.tsx";
import {FlyoutMenuNavbar} from "../flyoutMenuNavbar/FlyoutMenuNavbar.tsx";
import {useUrlContext} from "../../contexts/UrlContext.tsx";

const Navbar = () => {

    const {setSidebarOpenMobileIsActive} = useContext(SidebarContext);
    const {isDesktopScreen} = useContext(ScreenSizeContext);
    const {currentUrl} = useUrlContext();

    const [dropdownIsFocused, setDropdownIsFocused] = useState(false);


    const items = [
        { path: "/utilisateur/profil", label: "Mon profil" },
    ];

    return (
        <header className={"flex fixed w-full pb-1 px-8 !pt-4 justify-between items-center bg-grayLight backdrop-filter backdrop-blur-[10px] z-30" + (currentUrl.includes("connection") ? " hidden" : "")}>

            <div>
                {!isDesktopScreen && (
                    <MenuAltIcon onClick={() => {setSidebarOpenMobileIsActive(true)}}/>
                )}
            </div>

            <div className={"flex gap-1 items-center"}>

                <NotificationIcon/>

                <div
                    className="relative border-[2px] !border-white rounded-3xl outline outline-[1.7px] !outline-gray-100 focus:active:!outline-primary active:!outline-primary focus:!outline-primary"
                    onClick={() => {setDropdownIsFocused(!dropdownIsFocused)}}
                >
                    <Avatar className={"!h-[32px] !w-[32px] cursor-pointer"} alt="Cindy Baker" src={avatar}/>
                </div>

            </div>

            <FlyoutMenuNavbar items={items} isOpen={dropdownIsFocused} setIsOpen={setDropdownIsFocused} position={{top: "57px", right: "25px"}}/>

        </header>
    );
};

export default Navbar;
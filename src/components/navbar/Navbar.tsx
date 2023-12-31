import {Avatar} from "@mui/material";
import avatar from "../../assets/images/avatar.png";
import MenuAltIcon from "../icons/MenuAltIcon.tsx";
import NotificationIcon from "../icons/NotificationIcon.tsx";
import './navbar.css'
import {useSidebarContext} from "../../contexts/SidebarContext.tsx";
import {useState} from "react";
import {useScreenSizeContext} from "../../contexts/ScreenSizeContext.tsx";
import {useUrlContext} from "../../contexts/UrlContext.tsx";
import FlyoutMenuNavbar from "../flyoutMenuNavbar/FlyoutMenuNavbar.tsx";
import {UrlPath} from "../../utils/UrlPath.tsx";

const Navbar = () => {

    const {setSidebarOpenMobileIsActive} = useSidebarContext()
    const {isDesktopScreen} = useScreenSizeContext()
    const {currentUrl} = useUrlContext();

    const [dropdownIsFocused, setDropdownIsFocused] = useState(false);


    const items = [
        { path: UrlPath.Profil, label: "Mon profil" },
    ];

    return (
        <header className={"flex fixed w-full pb-1 px-6 !pt-4 justify-between items-center bg-primaryBgLight backdrop-filter backdrop-blur-[10px] z-30 sm:px-8"
            + (currentUrl.includes("connection") ? " hidden" : "")}
        >

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
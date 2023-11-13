import {Avatar} from "@mui/material";
import avatar from "../../../assets/images/avatar.png";
import MenuAltIcon from "../../../icons/MenuAltIcon.tsx";
import NotificationIcon from "../../../icons/NotificationIcon.tsx";
import './navbar.css'
import {SidebarContext} from "../../../contexts/SidebarContext.tsx";
import {useContext} from "react";

const Navbar = () => {

    const {setSidebarOpen} = useContext(SidebarContext);

    return (
        <header className="flex fixed w-full pb-1 px-5 !py-2 justify-between items-center shadow bg-lightTransparent backdrop-filter backdrop-blur-[10px] z-30">

            <MenuAltIcon onClick={() => {setSidebarOpen(true)}}/>

            <div className={"flex gap-3 items-center"}>

                <NotificationIcon/>

                <div className="border-[2px] !border-white rounded-3xl outline outline-[1.7px] !outline-gray-100 focus:active:!outline-primary active:!outline-primary">
                    <Avatar className={"!h-[32px] !w-[32px]"} alt="Cindy Baker" src={avatar} />
                </div>

            </div>

        </header>
    );
};

export default Navbar;
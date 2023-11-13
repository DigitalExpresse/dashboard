import Navbar from "./navbar/Navbar.tsx";
import Sidebar from "./sidebar/Sidebar.tsx";
import {SidebarContext} from "../../contexts/SidebarContext.tsx";
import {useContext} from "react";

const DashboardPage = () => {

    const {sidebarOpen} = useContext(SidebarContext);

    return (
        <div className={"bg-light text-textDark"}>
            <Navbar/>
            {sidebarOpen && <Sidebar/>}

            <div className={"relative top-[55px]"}>
                <div className={"bg-green-400 h-64 w-2/3 m-auto"}>Test</div>
                <div className={"bg-red-400 h-64 w-2/3 m-auto"}>Test</div>
                <div className={"bg-blue-400 h-64 w-2/3 m-auto"}>Test</div>
                <div className={"bg-yellow-400 h-64 w-2/3 m-auto"}>Test</div>
                <div className={"bg-green-400 h-64 w-2/3 m-auto"}>Test</div>
                <div className={"bg-red-400 h-64 w-2/3 m-auto"}>Test</div>
                <div className={"bg-blue-400 h-64 w-2/3 m-auto"}>Test</div>
            </div>
        </div>
    );
};

export default DashboardPage;
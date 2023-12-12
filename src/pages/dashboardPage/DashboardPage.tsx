import {Outlet} from "react-router-dom";

import SpinnerPageLoad from "../../components/spinnerPageLoad/SpinnerPageLoad.tsx";
import Navbar from "../../components/navbar/Navbar.tsx";
import {SidebarDesktopContainer} from "../../components/sidebar/desktop/SidebarDesktopContainer.tsx";
import {SidebarMobileContainer} from "../../components/sidebar/mobile/SidebarMobileContainer.tsx";

import {useSpinnerPageLoadContext} from "../../contexts/SpinnerPageLoadContext.tsx";
import {useScreenSizeContext} from "../../contexts/ScreenSizeContext.tsx";
import NavigationMenu from "../../components/navigationMenu/NavigationMenu.tsx";
import {useEffect} from "react";
import {useUrlContext} from "../../contexts/UrlContext.tsx";

const DashboardPage = () => {

    const {isLoading, setIsLoading} = useSpinnerPageLoadContext();
    const {isDesktopScreen} = useScreenSizeContext();
    const {currentUrl} = useUrlContext();

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            <Navbar/>

            <div className={isDesktopScreen ? "flex flex-row" : ""}>

                {isDesktopScreen && <SidebarDesktopContainer/>}
                {!isDesktopScreen && <SidebarMobileContainer/>}

                {isLoading ? <SpinnerPageLoad/> : null}

                <div className={"relative pb-10 pt-20 w-full h-screen overflow-y-scroll px-6 sm:px-8 bg-primaryBg"}>
                    {currentUrl !== "/" && <NavigationMenu/>}
                    <Outlet/>
                </div>

            </div>
        </>
    );
};

export default DashboardPage;
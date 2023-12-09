import SpinnerPageLoad from "../../components/spinnerPageLoad/SpinnerPageLoad.tsx";
import {useSpinnerPageLoadContext} from "../../contexts/SpinnerPageLoadContext.tsx";
import {Outlet} from "react-router-dom";
import {SidebarDesktopContainer} from "../../components/sidebar/desktop/SidebarDesktopContainer.tsx";
import {SidebarMobileContainer} from "../../components/sidebar/mobile/SidebarMobileContainer.tsx";
import Navbar from "../../components/navbar/Navbar.tsx";
import {useScreenSizeContext} from "../../contexts/ScreenSizeContext.tsx";

const DashboardPage = () => {

    const {isLoading, setIsLoading} = useSpinnerPageLoadContext();
    const {isDesktopScreen} = useScreenSizeContext();

    setTimeout(() => {
        setIsLoading(false);
    }, 1000);

    return (
        <>
            <Navbar/>

                <div className={isDesktopScreen ? "flex flex-row" : ""}>

                    { isDesktopScreen && <SidebarDesktopContainer/> }
                    { !isDesktopScreen && <SidebarMobileContainer/> }

                    { isLoading ? <SpinnerPageLoad/> : null }

                    <Outlet/>

                </div>
        </>
    );
};

export default DashboardPage;
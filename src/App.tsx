import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ConnectionPage from "./pages/connectionPage/ConnectionPage.tsx";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage.tsx";
import DashboardPage from "./pages/dashboardPage/DashboardPage.tsx";
import {SidebarConsumer} from "./contexts/SidebarContext.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import {SidebarMobileContainer} from "./components/sidebar/mobile/SidebarMobileContainer.tsx";
import UserGestion from "./pages/dashboardPage/userGestion/UserGestion.tsx";
import {ScreenSizeConsumer} from "./contexts/ScreenSizeContext.tsx";
import {SidebarDesktopContainer} from "./components/sidebar/desktop/SidebarDesktopContainer.tsx";
import Reservation from "./components/reservation/Reservation.tsx";
import {UrlConsumer} from "./contexts/UrlContext.tsx";
import {SpinnerPageLoadConsumer} from "./contexts/SpinnerPageLoadContext.tsx";
import Profil from "./pages/dashboardPage/profil/Profil.tsx";
import {NavigationMenuConsumer} from "./contexts/NavigationMenuContext.tsx";

function App() {

    const isDesktopScreen = window.innerWidth > 1200;

    return (
    <>
        <SpinnerPageLoadConsumer>
            <UrlConsumer>
                <ScreenSizeConsumer>
                    <NavigationMenuConsumer>
                        <SidebarConsumer>
                           <BrowserRouter>

                                <Navbar/>

                                <div className={isDesktopScreen ? "flex flex-row" : ""}>

                                        {isDesktopScreen && <SidebarDesktopContainer/>}
                                        {!isDesktopScreen && <SidebarMobileContainer/>}

                                    <Routes>
                                        <Route path="*" element={<NotFoundPage/>} />
                                        <Route path="/connection" element={<ConnectionPage/>} />
                                        <Route path="/" element={<DashboardPage/>} />

                                        <Route path="/utilisateur/gestion-utilisateurs" element={<UserGestion/>} />
                                        <Route path="/utilisateur/profil" element={<Profil/>} />
                                        <Route path="/reservation/gestion-reservations" element={<Reservation/>} />
                                    </Routes>

                                </div>

                            </BrowserRouter>
                        </SidebarConsumer>
                    </NavigationMenuConsumer>
                </ScreenSizeConsumer>
            </UrlConsumer>
        </SpinnerPageLoadConsumer>
    </>
    )
}

export default App

import './styles/App.css'
import './styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ConnectionPage from "./pages/connectionPage/ConnectionPage.tsx";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage.tsx";
import DashboardPage from "./pages/dashboardPage/DashboardPage.tsx";
import {SidebarConsumer} from "./contexts/SidebarContext.tsx";
import {NavbarConsumer} from "./contexts/NavbarConntext.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import {SidebarMobileContainer} from "./components/sidebar/mobile/SidebarMobileContainer.tsx";
import UserGestion from "./pages/dashboardPage/userGestion/UserGestion.tsx";
import {ScreenSizeConsumer} from "./contexts/ScreenSizeContext.tsx";
import {SidebarDesktopContainer} from "./components/sidebar/desktop/SidebarDesktopContainer.tsx";

function App() {

    const isDesktopScreen = window.innerWidth > 1200;

    return (
    <>
        <ScreenSizeConsumer>
            <NavbarConsumer>
                <SidebarConsumer>
                   <BrowserRouter>
                       <Navbar/>
                       {!isDesktopScreen &&
                           <>
                           <SidebarMobileContainer/>
                            <Routes>
                                <Route path="*" element={<NotFoundPage/>} />
                                <Route path="/connection" element={<ConnectionPage/>} />
                                <Route path="/" element={<DashboardPage/>} />
                                <Route path="/utilisateur/gestion-utilisateurs" element={<UserGestion/>} />
                                <Route path="/utilisateur/profil" element={<UserGestion/>} />
                            </Routes>
                           </>
                }

                {isDesktopScreen &&
                    <div className={"flex flex-row"}>

                    <SidebarDesktopContainer/>
                        <Routes>
                            <Route path="*" element={<NotFoundPage/>} />
                            <Route path="/connection" element={<ConnectionPage/>} />
                            <Route path="/" element={<DashboardPage/>} />
                            <Route path="/utilisateur/gestion-utilisateurs" element={<UserGestion/>} />
                            <Route path="/utilisateur/profil" element={<UserGestion/>} />
                        </Routes>
                    </div>
                }
                    </BrowserRouter>
                </SidebarConsumer>
            </NavbarConsumer>
        </ScreenSizeConsumer>
    </>
    )
}

export default App

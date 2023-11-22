import './styles/App.css'
import './styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ConnectionPage from "./pages/connectionPage/ConnectionPage.tsx";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage.tsx";
import DashboardPage from "./pages/dashboardPage/DashboardPage.tsx";
import {SidebarConsumer} from "./contexts/SidebarContext.tsx";
import {NavbarConsumer} from "./contexts/NavbarConntext.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import SidebarMobileContainer from "./components/sidebar/Sidebar.tsx";
import UserGestion from "./pages/dashboardPage/userGestion/UserGestion.tsx";
import {ScreenSizeConsumer} from "./contexts/ScreenSizeContext.tsx";

function App() {

  return (
    <>
        <ScreenSizeConsumer>
            <NavbarConsumer>
                <SidebarConsumer>
                   <BrowserRouter>
                           <Navbar/>
                           <SidebarMobileContainer/>
                        <Routes>
                            <Route path="*" element={<NotFoundPage/>} />
                            <Route path="/connection" element={<ConnectionPage/>} />
                            <Route path="/" element={<DashboardPage/>} />
                            <Route path="/utilisateur/gestion-utilisateurs" element={<UserGestion/>} />
                            <Route path="/utilisateur/profil" element={<UserGestion/>} />
                        </Routes>
                    </BrowserRouter>
                </SidebarConsumer>
            </NavbarConsumer>
        </ScreenSizeConsumer>
    </>
  )
}

export default App

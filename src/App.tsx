import './styles/App.css'
import './styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ConnectionPage from "./pages/connectionPage/ConnectionPage.tsx";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage.tsx";
import DashboardPage from "./pages/dashboardPage/DashboardPage.tsx";
import {SidebarConsumer} from "./contexts/SidebarContext.tsx";
import {NavbarConsumer} from "./contexts/NavbarConntext.tsx";
import Navbar from "./pages/dashboardPage/navbar/Navbar.tsx";
import Sidebar from "./pages/dashboardPage/sidebar/Sidebar.tsx";
import UserGestion from "./pages/dashboardPage/userGestion/UserGestion.tsx";

function App() {

  return (
    <>
        <NavbarConsumer>
            <SidebarConsumer>
               <BrowserRouter>
                   {
                       window.location.href.includes("utilisateur") |
                       window.location.href == import.meta.env.VITE_APP_URL &&
                           <>
                               <Navbar/>
                               <Sidebar/>
                           </>
                   }
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
    </>
  )
}

export default App

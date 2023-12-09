import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import ConnectionPage from "./pages/connectionPage/ConnectionPage.tsx";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage.tsx";
import DashboardPage from "./pages/dashboardPage/DashboardPage.tsx";
import Profil from "./pages/dashboardPage/profil/Profil.tsx";
import UserGestion from "./pages/dashboardPage/userGestion/UserGestion.tsx";
import Reservation from "./components/reservation/Reservation.tsx";

import {SidebarConsumer} from "./contexts/SidebarContext.tsx";
import {ScreenSizeConsumer} from "./contexts/ScreenSizeContext.tsx";
import {UrlConsumer} from "./contexts/UrlContext.tsx";
import {SpinnerPageLoadConsumer} from "./contexts/SpinnerPageLoadContext.tsx";
import {NavigationMenuConsumer} from "./contexts/NavigationMenuContext.tsx";
import {UrlPath} from "./utils/UrlPath.tsx";

function App() {

    return (
    <>
        <SpinnerPageLoadConsumer>
            <UrlConsumer>
                <ScreenSizeConsumer>
                    <NavigationMenuConsumer>
                        <SidebarConsumer>
                           <BrowserRouter>

                                    <Routes>
                                        <Route path={UrlPath.NotFound} element={<NotFoundPage/>} />
                                        <Route path={UrlPath.Connection} element={<ConnectionPage/>} />
                                        <Route path={UrlPath.Dashboard} element={<DashboardPage/>}>
                                            <Route path={UrlPath.UserGestion} element={<UserGestion/>} />
                                            <Route path={UrlPath.Profil} element={<Profil/>} />
                                            <Route path={UrlPath.Reservation} element={<Reservation/>} />
                                        </Route>
                                    </Routes>

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

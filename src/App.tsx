import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import ConnectionPage from "./pages/connectionPage/ConnectionPage.tsx";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage.tsx";
import DashboardPage from "./pages/dashboardPage/DashboardPage.tsx";
import Profil from "./pages/dashboardPage/profil/Profil.tsx";
import UserGestion from "./pages/dashboardPage/userGestion/UserGestion.tsx";
import Reservation from "./pages/dashboardPage/reservation/Reservation.tsx";

import {SidebarConsumer} from "./contexts/SidebarContext.tsx";
import {ScreenSizeConsumer} from "./contexts/ScreenSizeContext.tsx";
import {UrlConsumer} from "./contexts/UrlContext.tsx";
import {SpinnerPageLoadConsumer} from "./contexts/SpinnerPageLoadContext.tsx";
import {NavigationMenuConsumer} from "./contexts/NavigationMenuContext.tsx";
import {UrlPathEnum} from "./utils/enums/UrlPathEnum.tsx";

function App() {

    return (
        <div className={"bg-primaryBg"}>
            <SpinnerPageLoadConsumer>
                <UrlConsumer>
                    <ScreenSizeConsumer>
                        <NavigationMenuConsumer>
                            <SidebarConsumer>
                                <BrowserRouter>

                                    <Routes>
                                        <Route path={UrlPathEnum.NotFound} element={<NotFoundPage/>}/>
                                        <Route path={UrlPathEnum.Connection} element={<ConnectionPage/>}/>
                                        <Route path={UrlPathEnum.Dashboard} element={<DashboardPage/>}>
                                            <Route path={UrlPathEnum.UserGestion} element={<UserGestion/>}/>
                                            <Route path={UrlPathEnum.Profil} element={<Profil/>}/>
                                            <Route path={UrlPathEnum.Reservation} element={<Reservation/>}/>
                                        </Route>
                                    </Routes>

                                </BrowserRouter>
                            </SidebarConsumer>
                        </NavigationMenuConsumer>
                    </ScreenSizeConsumer>
                </UrlConsumer>
            </SpinnerPageLoadConsumer>
        </div>
    )
}

export default App

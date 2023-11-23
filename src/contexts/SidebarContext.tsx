import {createContext, PropsWithChildren, useState} from "react";

export const SidebarContext = createContext<any>(null);

export const SidebarConsumer = ({ children }: PropsWithChildren) => {

    const [sidebarOpenMobile, setSidebarOpenMobile]: [boolean, any] = useState(false);
    const [sidebarOpenDesktop, setSidebarOpenDesktop]: [boolean, any] = useState(false);

    return (
        <SidebarContext.Provider value={{ sidebarOpenMobile, setSidebarOpenMobile, sidebarOpenDesktop, setSidebarOpenDesktop }}>
            {children}
        </SidebarContext.Provider>
    );
}

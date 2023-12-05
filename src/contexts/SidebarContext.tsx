import {createContext, PropsWithChildren, useState} from "react";

export const SidebarContext = createContext<any>(null);

export const SidebarConsumer = ({ children }: PropsWithChildren) => {

    const [sidebarOpenMobileIsActive, setSidebarOpenMobileIsActive]: [boolean, any] = useState(false);
    const [sidebarOpenDesktopIsActive, setSidebarOpenDesktopIsActive]: [boolean, any] = useState(false);

    return (
        <SidebarContext.Provider value={{ sidebarOpenMobileIsActive, setSidebarOpenMobileIsActive, sidebarOpenDesktopIsActive, setSidebarOpenDesktopIsActive }}>
            {children}
        </SidebarContext.Provider>
    );
}

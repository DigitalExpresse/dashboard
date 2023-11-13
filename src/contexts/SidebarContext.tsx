import {createContext, PropsWithChildren, useState} from "react";

export const SidebarContext = createContext<any>(null);

export const SidebarConsumer = ({ children }: PropsWithChildren) => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
            {children}
        </SidebarContext.Provider>
    );
}
import {createContext, PropsWithChildren, useState} from "react";

export const SidebarContext = createContext<any>(null);

export const SidebarConsumer = ({ children }: PropsWithChildren) => {

    const [sidebarOpen, setSidebarOpen]: [boolean, any] = useState(false);

    return (
        <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
            {children}
        </SidebarContext.Provider>
    );
}

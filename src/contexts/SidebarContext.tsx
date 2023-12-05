import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SidebarContextProps {
    sidebarOpenMobileIsActive: boolean;
    setSidebarOpenMobileIsActive: (isActive: boolean) => void;
    sidebarOpenDesktopIsActive: boolean;
    setSidebarOpenDesktopIsActive: (isActive: boolean) => void;
}

export const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const SidebarConsumer: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [sidebarOpenMobileIsActive, setSidebarOpenMobileIsActive] = useState<boolean>(false);
    const [sidebarOpenDesktopIsActive, setSidebarOpenDesktopIsActive] = useState<boolean>(false);

    return (
        <SidebarContext.Provider value={{
            sidebarOpenMobileIsActive,
            setSidebarOpenMobileIsActive,
            sidebarOpenDesktopIsActive,
            setSidebarOpenDesktopIsActive
        }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebarContext = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error('useSidebarContext must be used within a SidebarProvider');
    }
    return context;
};

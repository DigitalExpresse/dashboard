import React, {createContext, useContext, ReactNode, useState} from 'react';

interface NavigationMenuContextProps {
    sectionName: string;
    setSectionName: (sectionName: string) => void;
    subSectionName: string;
    setSubSectionName: (subSectionName: string) => void;
}

export const NavigationMenuContext = createContext<NavigationMenuContextProps | undefined>(undefined);

export const NavigationMenuConsumer: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [sectionName, setSectionName] = useState<string>("Dashboard")
    const [subSectionName, setSubSectionName] = useState<string>("Test")

    return (
        <NavigationMenuContext.Provider value={{
            sectionName,
            setSectionName,
            subSectionName,
            setSubSectionName
        }}>
            {children}
        </NavigationMenuContext.Provider>
    );
};

export const useNavigationMenuContext = () => {
    const context = useContext(NavigationMenuContext);
    if (!context) {
        throw new Error('useSidebarContext must be used within a NavigationMenuProvider');
    }
    return context;
};

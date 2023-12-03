import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DropdownContextProps {
    hoveredDropdown: string | null;
    setHoveredDropdown: (dropdownId: string | null) => void;
    focusedDropdown: string | null;
    setFocusedDropdown: (dropdownId: string | null) => void;
}

const DropdownSmallContext = createContext<DropdownContextProps | undefined>(undefined);

export const DropdownSmallProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [hoveredDropdown, setHoveredDropdown] = useState<any>(null);
    const [focusedDropdown, setFocusedDropdown] = useState<any>(null);

    return (
        <DropdownSmallContext.Provider value={{ hoveredDropdown, setHoveredDropdown, focusedDropdown, setFocusedDropdown }}>
            {children}
        </DropdownSmallContext.Provider>
    );
};

export const useDropdownSmallContext = () => {
    const context = useContext(DropdownSmallContext);
    if (!context) {
        throw new Error('useDropdownContext must be used within a DropdownProvider');
    }
    return context;
};

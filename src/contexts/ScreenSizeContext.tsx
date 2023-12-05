import React, { createContext, useContext, useEffect, useState } from 'react';

interface ScreenSizeContextProps {
    isDesktopScreen: boolean;
}

export const ScreenSizeContext = createContext<ScreenSizeContextProps | undefined>(undefined);

export const ScreenSizeConsumer: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [isDesktopScreen, setIsDesktopScreen] = useState<boolean>(window.innerWidth > 1200);

    const handleResize = () => {
        setIsDesktopScreen(window.innerWidth > 1200);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <ScreenSizeContext.Provider value={{ isDesktopScreen }}>
            {children}
        </ScreenSizeContext.Provider>
    );
};

export const useScreenSizeContext = () => {
    const context = useContext(ScreenSizeContext);
    if (!context) {
        throw new Error('useScreenSizeContext must be used within a ScreenSizeProvider');
    }
    return context;
};

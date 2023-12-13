import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import {UrlPathEnum} from "../utils/enums/UrlPathEnum.tsx";

interface UrlContextProps {
    currentUrl: string;
    setCurrentUrl: (url: string | UrlPathEnum) => void;
}

const UrlContext = createContext<UrlContextProps | undefined>(undefined);

export const UrlConsumer: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [currentUrl, setCurrentUrl] = useState<string>(window.location.href);

    useEffect(() => {
        const handleUrlChange = () => {
            setCurrentUrl(window.location.href);
        };

        window.addEventListener('popstate', handleUrlChange);

        return () => {
            window.removeEventListener('popstate', handleUrlChange);
        };
    }, []);

    return (
        <UrlContext.Provider value={{ currentUrl, setCurrentUrl }}>
            {children}
        </UrlContext.Provider>
    );
};

export const useUrlContext = () => {
    const context = useContext(UrlContext);
    if (!context) {
        throw new Error('useUrlContext must be used within a UrlProvider');
    }
    return context;
};

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SpinnerPageLoadContextProps {
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
}

const SpinnerPageLoadContext = createContext<SpinnerPageLoadContextProps | undefined>(undefined);

export const SpinnerPageLoadConsumer: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);

    return (
        <SpinnerPageLoadContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </SpinnerPageLoadContext.Provider>
    );
};

export const useSpinnerPageLoadContext = () => {
    const context = useContext(SpinnerPageLoadContext);
    if (!context) {
        throw new Error('useSpinnerPageLoadContext must be used within a SpinnerPageLoadProvider');
    }
    return context;
};

import {createContext, PropsWithChildren} from "react";

export const ScreenSizeContext = createContext<any>(null);

export const ScreenSizeConsumer = ({ children }: PropsWithChildren) => {

    const isDesktopScreen= window.innerWidth > 1200;


    return (
        <ScreenSizeContext.Provider value={{isDesktopScreen}}>
            {children}
        </ScreenSizeContext.Provider>
    );
}

import {createContext, PropsWithChildren} from "react";

export const NavbarContext = createContext<any>(null);

export const NavbarConsumer = ({ children }: PropsWithChildren) => {


    return (
        <NavbarContext.Provider value={{}}>
            {children}
        </NavbarContext.Provider>
    );
}

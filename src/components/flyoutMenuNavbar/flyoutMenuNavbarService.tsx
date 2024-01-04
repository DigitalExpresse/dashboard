import { useEffect } from "react";
import { Key } from "react";
import { NavLink } from "react-router-dom";
import { useUrlContext } from "../../contexts/UrlContext.tsx";

export const useFlyoutMenuNavbarService = (setDropdownIsFocused: (arg0: boolean) => void, avatarRef) => {

    const { setCurrentUrl } = useUrlContext();

    useEffect(() => {
        // Ajouter un gestionnaire d'événements lors du montage
        document.addEventListener("mousedown", (event) => handleClickOutside(event));

        // Nettoyer le gestionnaire d'événements lors du démontage
        return () => {
            document.removeEventListener("mousedown", (event) => handleClickOutside(event));
        };
    }, []);

    const handleMouseLeave = () => {
        setDropdownIsFocused(false);
    };

    const handleMouseEnter = () => {
        setDropdownIsFocused(true);
    };

    // Fermer le menu lorsque l'utilisateur clique en dehors du menu
    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        const menu = document.getElementById("flyoutMenuNavbar");

        if (menu && !menu.contains(target) && !avatarRef.current.contains(target)) {
            setDropdownIsFocused(false);
        }
    };

    const renderNavLink = (item: any, index: Key | null | undefined) => (
        <NavLink
            id={"flyoutMenu-element-" + item.label}
            className={"block my-2 font-medium hover:bg-gray-100 text-semiDark px-3 py-1 rounded-md"}
            key={index}
            to={item.path}
            onClick={() => {
                setDropdownIsFocused(false);
                setCurrentUrl(item.path);
            }}
        >
            {item.label}
        </NavLink>
    );

    return { handleMouseLeave, handleMouseEnter, handleClickOutside, renderNavLink, setCurrentUrl };
};

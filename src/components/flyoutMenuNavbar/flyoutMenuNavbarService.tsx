import { useEffect } from "react";
import { Key } from "react";
import { NavLink } from "react-router-dom";
import { useUrlContext } from "../../contexts/UrlContext.tsx";

export const useFlyoutMenuNavbarService = (setIsOpen: (arg0: boolean) => void) => {

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
        setIsOpen(false);
    };

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    // Fermer le menu lorsque l'utilisateur clique en dehors du menu
    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        const menu = document.getElementById("flyoutMenuNavbar");

        if (menu && !menu.contains(target)) {
            setIsOpen(false);
        }
    };

    const renderNavLink = (item: any, index: Key | null | undefined) => (
        <NavLink
            id={"flyoutMenu-element-" + item.label}
            className={
                "block my-2 font-medium hover:bg-gray-100 text-secondary px-3 py-1 rounded-md " +
                (window.location.href.includes(item.path) ? "!text-secondary bg-gray-100" : "")
            }
            key={index}
            to={item.path}
            onClick={() => {
                setIsOpen(false);
                setCurrentUrl(item.path);
            }}
        >
            {item.label}
        </NavLink>
    );

    return { handleMouseLeave, handleMouseEnter, handleClickOutside, renderNavLink, setCurrentUrl };
};

export const handleMouseLeave = (setIsOpen: (arg0: boolean) => void) => {
    setIsOpen(false);
};

export const handleMouseEnter = (setIsOpen: (arg0: boolean) => void) => {
    setIsOpen(true);
};

// Fermer le menu lorsque l'utilisateur clique en dehors du menu
export const handleClickOutside = (event: MouseEvent, setIsOpen: (arg0: boolean) => void) => {
    const target = event.target as HTMLElement;
    const menu = document.getElementById("flyoutMenuNavbar");

    if (menu && !menu.contains(target)) {
        setIsOpen(false);
    }
};
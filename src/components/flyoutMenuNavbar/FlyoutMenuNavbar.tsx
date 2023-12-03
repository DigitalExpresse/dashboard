import { useEffect } from "react";
import { Key } from "react";
import { NavLink } from "react-router-dom";
import {useUrlContext} from "../../contexts/UrlContext.tsx";

export const FlyoutMenuNavbar =
    ({
         items,
         isOpen,
         setIsOpen,
         position
    } : {
    items: { path: string; label: string }[];
    isOpen: boolean;
    setIsOpen: (arg0: boolean) => void;
    position: { top?: string; right?: string; left?: string; bottom?: string };
}) => {

    const {setCurrentUrl} = useUrlContext();
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

    useEffect(() => {
        // Ajouter un gestionnaire d'événements lors du montage
        document.addEventListener("mousedown", handleClickOutside);

        // Nettoyer le gestionnaire d'événements lors du démontage
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            id="flyoutMenuNavbar"
            className={
                "absolute cursor-pointer z-50 !rounded-xl shadow border-[0.5px] border-gray-100 p-[7px] min-w-max bg-light" +
                (isOpen ? "" : " hidden")
            }
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            style={position}
        >

            <div className={"block mt-2 mb-0.5 font-medium text-secondary px-3 rounded-md "}>MarcusLeRusse</div>
            <div className={"block mb-3 font-medium text-[#637381] px-3 rounded-md text-sm"}>lerusse@gmail.com</div>
            <div className="border-b-2 border-gray-200 border-dotted mt-3 mb-3" ></div>

            {items.length > 0 && (
                <div>
                    {items.map((_item: any, index: Key | null | undefined) => (
                            <NavLink
                                id={"flyoutMenu-element-" + _item.label}
                                className={
                                    "block my-2 font-medium hover:bg-gray-100 text-secondary px-3 py-1 rounded-md " +
                                    (window.location.href.includes(_item.path) ? "!text-secondary bg-gray-100" : "")
                                }
                                key={index}
                                to={_item.path}
                                onClick={() => {
                                    setIsOpen(false);
                                    setCurrentUrl(_item.path);
                                }}
                            >
                                {_item.label}
                            </NavLink>
                    ))}

                    <div className="border-b-2 border-gray-200 border-dotted mt-3 mb-3" ></div>
                    <NavLink
                        id={"flyoutMenu-element-" + "Déconnexion"}
                        className={
                            "block my-2 font-medium text-danger hover:bg-gray-100 px-3 py-1 rounded-md "
                        }
                        to={"/connection"}
                        onClick={() => {
                            setIsOpen(false);
                            setCurrentUrl("/connection");
                        }}
                    >
                        {"Déconnexion"}
                    </NavLink>

                </div>
            )}
        </div>
    );
};



import { useEffect } from "react";
import { Key } from "react";
import { NavLink } from "react-router-dom";
import {useUrlContext} from "../../contexts/UrlContext.tsx";
import {handleClickOutside, handleMouseEnter, handleMouseLeave} from "./flyoutMenuNavbarService.tsx";

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

    const {currentUrl, setCurrentUrl} = useUrlContext();

    useEffect(() => {
        // Ajouter un gestionnaire d'événements lors du montage
        document.addEventListener("mousedown", event => handleClickOutside(event, setIsOpen));

        // Nettoyer le gestionnaire d'événements lors du démontage
        return () => {
            document.removeEventListener("mousedown", event => handleClickOutside(event, setIsOpen));
        };
    }, []);

    return (
        <div
            id="flyoutMenuNavbar"
            className={
                "absolute cursor-pointer z-50 !rounded-xl shadow border-[0.5px] border-gray-100 p-[7px] min-w-max bg-light" +
                (isOpen ? "" : " hidden")
            }
            onMouseLeave={() => handleMouseLeave(setIsOpen)}
            onMouseEnter={() => handleMouseEnter(setIsOpen)}
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
                                    (currentUrl.includes(_item.path) ? "!text-secondary bg-gray-100" : "")
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
                            localStorage.removeItem("user");
                        }}
                    >
                        {"Déconnexion"}
                    </NavLink>

                </div>
            )}
        </div>
    );
};



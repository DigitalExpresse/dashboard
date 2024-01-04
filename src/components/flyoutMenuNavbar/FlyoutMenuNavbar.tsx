import { Key } from "react";
import { useFlyoutMenuNavbarService } from "./flyoutMenuNavbarService.tsx";
import {NavLink} from "react-router-dom";
import {UrlPathEnum} from "../../utils/enums/UrlPathEnum.tsx";

const FlyoutMenuNavbar = ({ items, dropdownIsFocused, setDropdownIsFocused, position, avatarRef }: { items: { path: string; label: string }[]; dropdownIsFocused: boolean; setDropdownIsFocused: (arg0: boolean) => void; position: { top?: string; right?: string; left?: string; bottom?: string }, avatarRef: any; }) => {

    const { handleMouseLeave, handleMouseEnter, renderNavLink, setCurrentUrl} = useFlyoutMenuNavbarService(setDropdownIsFocused, avatarRef );

    return (
        <div
            id="flyoutMenuNavbar"
            className={
                "absolute cursor-pointer z-50 !rounded-xl shadow border-[0.5px] border-gray-100 p-[7px] min-w-max bg-light" +
                (dropdownIsFocused ? "" : " hidden")
            }
            onMouseLeave={() => handleMouseLeave()}
            onMouseEnter={() => handleMouseEnter()}
            style={position}
        >
            <div className={"block mt-2 mb-0.5 font-medium text-semiDark px-3 rounded-md "}>MarcusLeRusse</div>
            <div className={"block mb-3 font-medium text-[#637381] px-3 rounded-md text-sm"}>lerusse@gmail.com</div>
            <div className="border-b-2 border-gray-200 border-dotted mt-3 mb-3"></div>

            {items.length > 0 && (
                <div>
                    {items.map((item: any, index: Key | null | undefined) => renderNavLink(item, index))}
                    <div className="border-b-2 border-gray-200 border-dotted mt-3 mb-3"></div>
                    <NavLink
                        id={"flyoutMenu-element-" + "Déconnexion"}
                        className={"block my-2 font-medium text-danger hover:bg-gray-100 px-3 py-1 rounded-md "}
                        to={UrlPathEnum.Connection}
                        onClick={() => {
                            setDropdownIsFocused(false);
                            setCurrentUrl(UrlPathEnum.Connection);
                            localStorage.removeItem("user");
                        }}
                    >
                        {"Déconnexion"}
                        <div className={"spinner-icon"}></div>
                    </NavLink>
                </div>
            )}
        </div>
    );
};

export default FlyoutMenuNavbar;

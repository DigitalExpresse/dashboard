import { Key } from "react";
import {NavLink} from "react-router-dom";
import {useUrlContext} from "../../contexts/UrlContext.tsx";

    const FlyoutMenu = ({ items, isOpen, setIsOpen, position }: {
        items: { path: string; label: string }[];
        isOpen: any;
        setIsOpen: any;
        position: { top?: string; right?: string; left?: string; bottom?: string; };
    }) => {

    const {setCurrentUrl} = useUrlContext();

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <div
            id={"flyoutMenu"}
            className={"absolute cursor-pointer z-50 !rounded-xl shadow border-[0.5px] border-gray-100 p-[7px] min-w-max bg-light" + (isOpen ? "" : " hidden")}
            onMouseLeave={handleMouseLeave}
            // onMouseEnter={handleMouseEnter}
            style={position}
        >
            {items.length > 0 && (
                <div>
                    {items.map((_item: any, index: Key | null | undefined) => (
                        <NavLink
                            id={"flyoutMenu-element-" + _item.label }
                            className={"block my-2 font-medium text-[#637381] hover:bg-gray-100 hover:text-secondary px-3 py-1 rounded-md " + (window.location.href.includes(_item.path) ? "!text-secondary bg-gray-100" : "")}
                            key={index}
                            to={_item.path}
                            onClick={() => {
                                setIsOpen(false)
                                setCurrentUrl(_item.path)
                            }}
                        >
                            {_item.label}
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FlyoutMenu;

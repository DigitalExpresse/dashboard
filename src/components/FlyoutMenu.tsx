import { Key } from "react";

const FlyoutMenu = ({ items, isHovered, setIsHovered }: any) => {

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    return (
        <div
            className={"absolute z-50 top-[0px] left-[83px] !rounded-xl shadow p-[7px] min-w-max bg-light" + (isHovered ? "" : " hidden")}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
        >
            {items.length > 0 && (
                <div>
                    {items.map((_item: any, index: Key | null | undefined) => (
                        <a id={"flyoutMenu-element-" + _item.label }
                           className={"block my-2 font-medium text-[#637381] hover:bg-gray-100 hover:text-secondary px-3 py-1 rounded-md " + (window.location.href.includes(_item.path) ? "!text-secondary bg-gray-100" : "")}
                           key={index} href={_item.path}>
                            {_item.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FlyoutMenu;

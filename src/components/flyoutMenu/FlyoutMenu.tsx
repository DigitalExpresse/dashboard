import { useFlyoutMenuService } from "./flyoutMenuService.tsx";

const FlyoutMenu =
    ({ items, isOpen, setIsOpen, position }:
         {
             items: { path: string; label: string }[];
             isOpen: any;
             setIsOpen: any;
             position: { top?: string; right?: string; left?: string; bottom?: string; };
         }) => {

    const { handleMouseLeave, renderNavLink } = useFlyoutMenuService();

    return (
        <div
            id={"flyoutMenu"}
            className={"absolute cursor-pointer z-50 !rounded-xl shadow border-[0.5px] border-gray-100 p-[7px] min-w-max bg-light" + (isOpen ? "" : " hidden")}
            onMouseLeave={() => handleMouseLeave(setIsOpen)}
            style={position}
        >
            {items.length > 0 && (
                <div>
                    {items.map((item: any) => renderNavLink(item, setIsOpen))}
                </div>
            )}
        </div>
    );
};

export default FlyoutMenu;

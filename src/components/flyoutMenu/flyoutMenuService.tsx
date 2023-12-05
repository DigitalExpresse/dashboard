import { NavLink } from "react-router-dom";
import { useUrlContext } from "../../contexts/UrlContext.tsx";

export const useFlyoutMenuService = () => {

    const { setCurrentUrl } = useUrlContext();

    const handleMouseLeave = (setIsOpen: any) => {
        setIsOpen(false);
    };

    const renderNavLink = (item: any, setIsOpen: any) => (
        <NavLink
            id={"flyoutMenu-element-" + item.label}
            className={
                "block my-2 font-medium text-[#637381] hover:bg-gray-100 hover:text-secondary px-3 py-1 rounded-md " +
                (window.location.href.includes(item.path) ? "!text-secondary bg-gray-100" : "")
            }
            key={item.label}
            to={item.path}
            onClick={() => {
                setIsOpen(false);
                setCurrentUrl(item.path);
            }}
        >
            {item.label}
        </NavLink>
    );

    return { handleMouseLeave, renderNavLink };
};

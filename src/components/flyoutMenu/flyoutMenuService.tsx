import { NavLink } from "react-router-dom";
import { useUrlContext } from "../../contexts/UrlContext.tsx";

export const useFlyoutMenuService = () => {

    const { setCurrentUrl } = useUrlContext();

    const renderNavLink = (item: any, setIsOpen: any) => (
        <NavLink
            id={"flyoutMenu-element-" + item.label}
            className={
                "block my-2 font-medium text-[#637381] hover:bg-gray-100 hover:text-semiDark px-3 py-1 rounded-md " +
                (window.location.href.includes(item.path) ? "!text-semiDark bg-gray-100" : "")
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

    return { renderNavLink };
};

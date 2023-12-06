import {useNavigationMenuContext} from "../../contexts/NavigationMenuContext.tsx";
import {NavLink} from "react-router-dom";
import {useUrlContext} from "../../contexts/UrlContext.tsx";

const NavigationMenu = () => {

    const { sectionName, subSectionName } = useNavigationMenuContext();
    const { setCurrentUrl } = useUrlContext();

    const linkSectionName = "/" + sectionName.toLowerCase();
    const linkSubSectionName = "/" + sectionName.toLowerCase() + "/" + subSectionName.toLowerCase();

    return (

            <div className={sectionName === "" ? "hidden" : ""}>
                <h2 className={"font-bold text-2xl leading-6 mb-5 tracking-wide"}>{subSectionName}</h2>
                <ol className={"flex items-center"}>
                    <li>
                        <NavLink onClick={() => setCurrentUrl("/")} to={"/"}> Dashboard </NavLink>
                    </li>
                    <span className={"mx-4 !text-gray-400"}>•</span>
                    <li>
                        <NavLink onClick={() => setCurrentUrl(linkSectionName)} to={linkSectionName}>{sectionName}</NavLink>
                    </li>
                    <span className={"mx-4 !text-gray-400"}>•</span>
                    <li className={"opacity-50"}>
                        <NavLink onClick={() => setCurrentUrl(linkSubSectionName)} to={linkSubSectionName}>{subSectionName}</NavLink>
                    </li>
                </ol>
            </div>

    );
};

export default NavigationMenu;
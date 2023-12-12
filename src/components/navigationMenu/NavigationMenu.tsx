import {NavLink} from "react-router-dom";
import {useUrlContext} from "../../contexts/UrlContext.tsx";
import {UrlPath} from "../../utils/UrlPath.tsx";
import {useNavigationMenuContext} from "../../contexts/NavigationMenuContext.tsx";

const NavigationMenu = () => {

    const { setCurrentUrl } = useUrlContext();
    const {sectionName, subSectionName} = useNavigationMenuContext();

    const linkSubSectionName = "/" + sectionName.toLowerCase() + "/" + subSectionName.toLowerCase();

    return (

            <div className={sectionName === "" ? "hidden" : "mb-7"}>
                <h2 className={"font-bold text-2xl leading-6 mb-5 tracking-wide"}>{subSectionName}</h2>
                <ol className={"flex items-center"}>
                    <li>
                        <NavLink onClick={() => setCurrentUrl(UrlPath.Dashboard)} to={UrlPath.Dashboard}> Dashboard </NavLink>
                    </li>
                    <span className={"mx-4 !text-gray-400"}>•</span>
                    <li>
                        <p>{sectionName}</p>
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
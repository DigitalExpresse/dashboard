import NavigationMenu from "../../../components/navigationMenu/NavigationMenu.tsx";
import {useNavigationMenuContext} from "../../../contexts/NavigationMenuContext.tsx";
import {useEffect} from "react";

const Profil = () => {

    const { setSectionName, setSubSectionName } = useNavigationMenuContext();

    useEffect(() => {
        setSectionName("Utilisateur");
        setSubSectionName("Profil");
    }, []);

    return (

        <div className={"relative pb-10 pt-20 w-full h-screen overflow-y-scroll px-6 sm:px-8 bg-primaryBg"}>
             <NavigationMenu/>
        </div>
    );
};

export default Profil;
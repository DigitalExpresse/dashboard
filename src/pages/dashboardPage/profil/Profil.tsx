import {useEffect} from "react";
import {useNavigationMenuContext} from "../../../contexts/NavigationMenuContext.tsx";

const Profil = () => {

    const {setSubSectionName, setSectionName} = useNavigationMenuContext();

    useEffect(() => {
        setSectionName("Utilisateur");
        setSubSectionName("Profil");
    }, []);

    return (

        <div>
        </div>
    );
};

export default Profil;
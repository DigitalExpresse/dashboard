import {useEffect} from "react";
import {useNavigationMenuContext} from "../../../contexts/NavigationMenuContext.tsx";

const UserGestion = () => {

    const {setSubSectionName, setSectionName} = useNavigationMenuContext();

    useEffect(() => {
        setSectionName("Utilisateur");
        setSubSectionName("Utilisateurs");
    }, []);

    return (
        <div className={"h-full rounded-2xl shadow-fluid bg-light"}></div>
    );
};

export default UserGestion;

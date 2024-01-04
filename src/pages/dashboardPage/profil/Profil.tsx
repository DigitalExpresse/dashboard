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
        {/*    un select*/}
            <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
            </select>
        </div>
    );
};

export default Profil;
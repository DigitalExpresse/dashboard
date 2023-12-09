import NavigationMenu from "../../../components/navigationMenu/NavigationMenu.tsx";

const UserGestion = () => {


    return (
        <div className={"relative pb-10 pt-20 w-full h-screen overflow-y-scroll px-6 sm:px-8 bg-primaryBg"}>
            <NavigationMenu sectionName={"Utilisateur"} subSectionName={"Utilisateurs"}/>
        </div>
    );
};
export default UserGestion;
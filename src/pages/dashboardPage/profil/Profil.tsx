import NavigationMenu from "../../../components/navigationMenu/NavigationMenu.tsx";

const Profil = () => {

    return (

        <div className={"relative pb-10 pt-20 w-full h-screen overflow-y-scroll px-6 sm:px-8 bg-primaryBg"}>
             <NavigationMenu sectionName={"Utilisateur"} subSectionName={"Profil"}/>
        </div>
    );
};

export default Profil;
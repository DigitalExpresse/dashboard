import UserIcon from "../../icons/UserIcon.tsx";
import iconReservation from "../../assets/icons/iconReservation.png";
import MenuCardIcon from "../../icons/MenuCardIcon.tsx";

export const dropdownUserData = {
    label: "Utilisateur",
    items: [
        {
            path: "/utilisateur/gestion-utilisateurs",
            label: "Gestion des utilisateurs",
        },
        {
            path: "/utilisateur/profil",
            label: "Votre profile",
        },
    ],
    principalPath : "/utilisateur",

    icon : <UserIcon />,
}

export const dropdownReservationData = {
    label: "Reservation",
    items: [
        {
            path: "/reservation/gestion-reservations",
            label: "Gestion des reservations",
        },
        {
            path: "reservation/tables",
            label: "Gestion des tables",
        },
        {
            path:'/reservation/services',
            label:'Gestion des services'
        },
        {
            path:'/reservation/horaires',
            label:'Gestion des horaires'
        }
    ],
    principalPath : "/reservation",

    icon :
        <div className={"w-[35px] h-[35px] flex justify-center items-center justify-items-center"}>
            <img src={iconReservation} alt={"icon reservation"} className={"h-7 w-7"}/>
        </div>
}

export const dropdownMenuAndCardData = {
    label: "Carte et menu",
    items: [
        {
            path: "/carte-et-menu/gestion-cartes",
            label: "Gestion des cartes",
        },
        {
            path: "/carte-et-menu/gestion-menus",
            label: "Gestion des menus",
        },
        {
            path: "/carte-et-menu/gestion-produits",
            label: "Gestion des produits",
        }
    ],

    principalPath : "/carte-et-menu",

    icon :
        <div className={"w-[35px] h-[35px] flex justify-center items-center justify-items-center"}>
            <MenuCardIcon />
        </div>
}
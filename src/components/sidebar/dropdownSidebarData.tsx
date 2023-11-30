import UserIcon from "../../icons/UserIcon.tsx";
import iconReservation from "../../assets/icons/iconReservation.png";
import MenuCardIcon from "../../icons/MenuCardIcon.tsx";

export const dropdownUserData = {
    label: "Utilisateur",
    items: [
        {
            path: "/utilisateur/gestion-utilisateurs",
            label: "Utilisateurs",
        },
        {
            path: "/utilisateur/profil",
            label: "Profile",
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
            label: "Reservations",
        },
        {
            path: "reservation/tables",
            label: "Tables",
        },
        {
            path:'/reservation/services',
            label:'Services'
        },
        {
            path:'/reservation/horaires',
            label:'Horaires'
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
            label: "Cartes",
        },
        {
            path: "/carte-et-menu/gestion-menus",
            label: "Menus",
        },
        {
            path: "/carte-et-menu/gestion-produits",
            label: "Produits",
        }
    ],

    principalPath : "/carte-et-menu",

    icon :
        <div className={"w-[35px] h-[35px] flex justify-center items-center justify-items-center"}>
            <MenuCardIcon />
        </div>
}
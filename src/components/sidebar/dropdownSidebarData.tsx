import UserIcon from "../icons/UserIcon.tsx";
import iconReservation from "../../assets/images/icons/iconReservation.png";
import MenuCardIcon from "../icons/MenuCardIcon.tsx";
import {UrlPath} from "../../utils/UrlPath.tsx";

export const dropdownUserData = {
    label: "Utilisateur",
    items: [
        {
            path: UrlPath.Profil,
            label: "Profil",
        },
        {
            path: UrlPath.UserGestion,
            label: "Utilisateurs",
        },
    ],
    principalPath : "/utilisateur",

    icon : <UserIcon />,
}

export const dropdownReservationData = {
    label: "Reservation",
    items: [
        {
            path: UrlPath.Reservation,
            label: "Reservations",
        },
        {
            path: UrlPath.ReservationTable,
            label: "Tables",
        },
        {
            path: UrlPath.ReservationService,
            label:'Services'
        },
        {
            path: UrlPath.ReservationHoraire,
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
    label: "Produits",
    items: [
        {
            path: UrlPath.Carte,
            label: "Cartes",
        },
        {
            path: UrlPath.Menu,
            label: "Menus",
        },
        {
            path: UrlPath.Produit,
            label: "Produits",
        }
    ],

    principalPath : "/carte-et-menu",

    icon :
        <div className={"w-[35px] h-[35px] flex justify-center items-center justify-items-center"}>
            <MenuCardIcon />
        </div>
}
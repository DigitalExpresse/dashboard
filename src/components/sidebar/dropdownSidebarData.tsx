import UserIcon from "../icons/UserIcon.tsx";
import iconReservation from "../../assets/images/icons/iconReservation.png";
import MenuCardIcon from "../icons/MenuCardIcon.tsx";
import {UrlPathEnum} from "../../utils/enums/UrlPathEnum.tsx";

export const dropdownUserData = {
    label: "Utilisateur",
    items: [
        {
            path: UrlPathEnum.Profil,
            label: "Profil",
        },
        {
            path: UrlPathEnum.UserGestion,
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
            path: UrlPathEnum.Reservation,
            label: "Reservations",
        },
        {
            path: UrlPathEnum.ReservationTable,
            label: "Tables",
        },
        {
            path: UrlPathEnum.ReservationService,
            label:'Services'
        },
        {
            path: UrlPathEnum.ReservationHoraire,
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
            path: UrlPathEnum.Carte,
            label: "Cartes",
        },
        {
            path: UrlPathEnum.Menu,
            label: "Menus",
        },
        {
            path: UrlPathEnum.Produit,
            label: "Produits",
        }
    ],

    principalPath : "/carte-et-menu",

    icon :
        <div className={"w-[35px] h-[35px] flex justify-center items-center justify-items-center"}>
            <MenuCardIcon />
        </div>
}
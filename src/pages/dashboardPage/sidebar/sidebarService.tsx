import UserIcon from "../../../icons/UserIcon.tsx";

export const dropdownUserData = {
    label: "Utilisateur",
    items: [
        {
            path: "/utilisateur/gestion-utilisateurs",
            label: "Gestion des utilisateurs",
        },
        {
            path: "/utilisateur/profil",
            label: "Profil",
        },
    ],
    principalPath : "/utilisateur",

    icon : <UserIcon />,
}
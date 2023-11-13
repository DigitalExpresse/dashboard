import UserIcon from "../../../../icons/UserIcon.tsx";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {AnimatePresence, motion} from "framer-motion";
import {NavLink} from "react-router-dom";
import {useEffect} from "react";

const DropdownUser = ({sidebarOpen, setSidebarOpen, isMenuOpen, setMenuOpen}) => {

    useEffect(() => {
        if (url.includes("utilisateur")) {
            // @ts-ignore
            sidebarOpen && setMenuOpen(true);
        }
    }, [sidebarOpen]);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const url = window.location.href;

    return (
        <div>
            <div
                tabIndex={1}
                id={"dropdown-user"}
                className={
                    (url.includes("utilisateur") ?
                        "bg-primaryLight flex gap-2 items-center pl-[8px] py-[6px] pr-[15px] focus:outline-0 rounded-xl cursor-pointer" :
                        "flex gap-2 items-center pl-[8px] py-[6px] pr-[15px] focus:!bg-gray-300 focus:!bg-opacity-40 focus:outline-0 rounded-xl cursor-pointer")
                }
                onClick={toggleMenu}
            >
                <UserIcon />
                <p
                    className={"font-medium" + (url.includes("utilisateur") ? " text-primary" : "")}
                >
                    Utilisateurs
                </p>
                <ExpandMoreIcon className={"ml-auto" + (url.includes("utilisateur") ? " text-primary" : "")} />
            </div>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="flex flex-col justify-start gap-2 pl-[20px] pt-[10px] pb-[6px]"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        <NavLink className={"font-medium flex items-center"}
                                 to={"/utilisateur/gestion-utilisateurs"}
                                 onClick={() => setSidebarOpen(false)}
                        >

                            <span className={"mr-[15px] text-3xl" + (url.includes("gestion-utilisateurs") ? " text-primary" : "")}>&#8226;</span>
                            <span>Gestion des utilisateurs</span>
                        </NavLink>
                        <NavLink className={"font-medium flex items-center"}
                                 to={"/utilisateur/profil"}
                                 onClick={() => setSidebarOpen(false)}
                        >
                            <span className={"mr-[15px] text-3xl" + (url.includes("profil") ? " text-primary" : "")}>&#8226;</span>
                            <span className={"mt-0.5"}>Profil</span>
                        </NavLink>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DropdownUser;
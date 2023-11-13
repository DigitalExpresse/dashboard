import UserIcon from "../../../../icons/UserIcon.tsx";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {AnimatePresence, motion} from "framer-motion";

const DropdownUser = ({toggleMenu, isMenuOpen}) => {
    return (
        <div>
            <div
                tabIndex={0}
                className={
                    "flex gap-2 items-center pl-[8px] py-[6px] pr-[15px] active:bg-primaryLight focus:bg-primaryLight rounded-xl cursor-pointer"
                }
                onClick={toggleMenu}
            >
                <UserIcon />
                <p className={"text-primary font-medium"}>Utilisateurs</p>
                <ExpandMoreIcon className={"text-primary ml-auto"} />
            </div>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="flex flex-col justify-start gap-2 pl-[20px] pt-[10px] pb-[6px]"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        <p className={"font-medium flex items-center"}>
                            <span className="mr-[15px] text-2xl">&#8226;</span>
                            <span>Gestion des utilisateurs</span>
                        </p>
                        <p className={"font-medium flex items-center"}>
                            <span className={"mr-[15px] text-3xl text-primary"}>&#8226;</span>
                            <span className={"mt-0.5"}>Votre profil</span>
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DropdownUser;
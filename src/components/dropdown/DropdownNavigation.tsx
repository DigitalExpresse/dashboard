// DropdownNavigation.tsx
import { NavLink, Path} from "react-router-dom";
import {motion} from "framer-motion";
import {ReactElement, JSXElementConstructor, ReactNode, ReactPortal} from "react";

export const DropdownNavigation = ({items, setSidebarOpenMobileIsActive, setSidebarOpenDesktopIsActive, setCurrentUrl, currentUrl}) => {
    return (
        <motion.div
            className="flex flex-col justify-start gap-2 pl-[20px] pt-[10px] pb-[6px]"
            initial={{opacity: 0, y: -10}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -10}}
        >
            {items.map((item: { path: string | number | bigint | Partial<Path> | null | undefined; label: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
                <NavLink
                    key={item.path + ""}
                    className={"font-medium flex !items-center justify-items-center gap-2 text-[13px] text-semiDark"}
                    to={item.path + ""}
                    onClick={() => {
                        setSidebarOpenMobileIsActive(false);
                        setSidebarOpenDesktopIsActive(false);
                        setCurrentUrl(item.path);
                    }}
                >
          <span
              className={
                  "mr-[15px] text-2xl" + (currentUrl.includes(item.path) ? " text-primary" : " text-gray-700")
              }
          >
            &#8226;
          </span>
                    <span className={"mt-0.5 text-gray-600"}>{item.label}</span>
                </NavLink>
            ))}
        </motion.div>
    );
};

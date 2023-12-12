// import {useArrowService, useGestionService} from "./useGestionService.tsx";
// import SearchIcon from "../../../components/icons/SearchIcon.tsx";
// import {useRef} from "react";
// import DeleteIcon from "../../../components/icons/DeleteIcon.tsx";
// import DeleteCircleIcon from "../../../components/icons/DeleteCircleIcon.tsx";

import {useEffect} from "react";
import {useNavigationMenuContext} from "../../../contexts/NavigationMenuContext.tsx";

const UserGestion = () => {

    // const { scrollContainerRef, handleScrollWithArrow, handleScroll } = useGestionService()
    // const { arrowLeftRef, arrowRightRef }: any = useArrowService()
    // const searchInputRef: any = useRef(null)
    // const searchDivRef: any = useRef(null)

    const {setSubSectionName, setSectionName} = useNavigationMenuContext();

    useEffect(() => {
        setSectionName("Utilisateur");
        setSubSectionName("Utilisateurs");
    }, []);

    return (
        <div className={"h-full rounded-2xl shadow-fluid bg-light"}>

            {/*<div className={"flex justify-center items-center border-b-[0.5px] border-gray-200 px-6 xl:justify-start"}>*/}
            {/*    <Arrow direction="left" onClick={() => handleScrollWithArrow("left", arrowLeftRef, arrowRightRef)} arrowLeftRef={arrowLeftRef} arrowRightRef={arrowRightRef}/>*/}
            {/*    <ScrollContent scrollContainerRef={scrollContainerRef} handleScroll={() => handleScroll(arrowLeftRef, arrowRightRef)} />*/}
            {/*    <Arrow direction="right" onClick={() => handleScrollWithArrow("right", arrowLeftRef, arrowRightRef)} arrowLeftRef={arrowLeftRef} arrowRightRef={arrowRightRef} />*/}
            {/*</div>*/}


            {/*<div*/}
            {/*    ref={searchDivRef}*/}
            {/*    className="flex justify-center items-center gap-4 mx-6 mt-8 mb-3 px-4 py-4 border-gray-200 border-[1.5px] rounded-xl transition-all duration-75 ease-in-out max-w-[400px]">*/}
            {/*    <SearchIcon/>*/}
            {/*    <input*/}
            {/*        ref={searchInputRef}*/}
            {/*        onBlur={() => {*/}
            {/*            searchDivRef.current.classList.remove("border-black")*/}
            {/*        }}*/}
            {/*        onFocus={() => {*/}
            {/*            searchDivRef.current.classList.add("border-black")*/}
            {/*        }}*/}
            {/*        type="text" placeholder={"Rechercher un utilisateur .."}*/}
            {/*        className={"w-full bg-light outline-none focus:ring-0"}*/}
            {/*    />*/}
            {/*</div>*/}

            {/*<div className={"flex flex-col gap-3 py-5 px-6"}>*/}
            {/*    <p className={"px-2"}><b>2</b> results found</p>*/}
            {/*    <div className={"flex flex-wrap gap-3"}>*/}
            {/*        <div className={"flex items-center gap-3 px-3 py-2 border border-dashed border-gray-300 rounded-xl"}>*/}
            {/*            <p className={"font-medium"}>Mot clés :</p>*/}
            {/*            <div className={"flex gap-2 items-center bg-gray-900 px-2 py-1 rounded-xl"}>*/}
            {/*                <span className={"text-white text-sm"}>Marius</span>*/}
            {/*                <DeleteCircleIcon/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className={"flex items-center gap-3 px-3 py-2 border border-dashed border-gray-300 rounded-xl"}>*/}
            {/*            <p className={"font-medium"}>Statut :</p>*/}
            {/*            <div className={"flex gap-2 items-center bg-gray-900 px-2 py-1 rounded-xl"}>*/}
            {/*                <span className={"text-white text-sm"}>All</span>*/}
            {/*                <DeleteCircleIcon/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className={"flex px-2 py-2 items-center gap-1.5"}>*/}
            {/*            <DeleteIcon/>*/}
            {/*            <p className={"text-red-500 font-medium mt-1"}>Clear</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    );
};

export default UserGestion;
//
// const Arrow = ({ direction, onClick, arrowLeftRef, arrowRightRef }) => {
//
//     return (
//         <div
//             ref={direction === "left" ? arrowLeftRef : arrowRightRef}
//             className={`w-8 ${direction === "left" ? "pr-6" : "pl-6"} text-center`} onClick={onClick}>
//             {direction === "left" ? "<" : ">"}
//         </div>
//     );
// };
//
// const ScrollContent = ({scrollContainerRef, handleScroll} ) => {
//
//     const {itemScrollContentActive, setItemScrollContentActive} = useGestionService()
//
//     return (
//         <div
//             ref={scrollContainerRef}
//             className={"flex items-center gap-6 font-medium overflow-x-auto scroll-smooth hide-scrollbar"}
//             onScroll={() => {handleScroll()} }
//         >
//             <div className={"flex py-4 gap-2 items-center " + (itemScrollContentActive === "All" ? "border-b-2 border-gray-800" : "")} onClick={() => setItemScrollContentActive("All")}>
//                 <p>All</p>
//                 <span className={"bg-black rounded-[6px] py-1 px-2 text-sm text-white"}>20</span>
//             </div>
//
//             <div className={"flex py-4 gap-2 items-center " + (itemScrollContentActive === "Active" ? "border-b-2 border-gray-800" : "")} onClick={() => setItemScrollContentActive("Active")}>
//                 <p>Active</p>
//                 <span className={"bg-green-200 text-green-700 rounded-[6px] py-1 px-2 text-sm"}>20</span>
//             </div>
//
//             <div className={"flex py-4 gap-2 items-center " + (itemScrollContentActive === "Pending" ? "border-b-2 border-gray-800" : "")} onClick={() => setItemScrollContentActive("Pending")}>
//                 <p>Pending</p>
//                 <span className={"bg-orange-100 rounded-[6px] py-1 px-2 text-sm text-orange-700"}>20</span>
//             </div>
//
//             <div className={"flex py-4 gap-2 items-center " + (itemScrollContentActive === "Banned" ? "border-b-2 border-gray-800" : "")} onClick={() => setItemScrollContentActive("Banned")}>
//                 <p>Pending</p>
//                 <span className={"bg-orange-100 rounded-[6px] py-1 px-2 text-sm text-orange-700"}>20</span>
//             </div>
//
//             <div className={"flex py-4 gap-2 items-center " + (itemScrollContentActive === "Banned" ? "border-b-2 border-gray-800" : "")} onClick={() => setItemScrollContentActive("Banned")}>
//                 <p>Pending</p>
//                 <span className={"bg-orange-100 rounded-[6px] py-1 px-2 text-sm text-orange-700"}>20</span>
//             </div>
//         </div>
//     );
// };
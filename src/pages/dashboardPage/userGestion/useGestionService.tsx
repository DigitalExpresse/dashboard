// import {useNavigationMenuContext} from "../../../contexts/NavigationMenuContext.tsx";
// import {useEffect, useRef, useState} from "react";
//
// export const useGestionService = () => {
//
//     const { setSubSectionName, setSectionName } = useNavigationMenuContext();
//     const [itemScrollContentActive, setItemScrollContentActive] = useState("All");
//     const scrollContainerRef = useRef(null);
//     const arrowRef = useRef(null);
//
//     const handleScrollWithArrow = (direction: string, arrowLeftRef: { current: { style: { opacity: string; }; }; }, arrowRightRef: { current: { style: { opacity: string; }; }; }) => {
//         const container: any = scrollContainerRef.current;
//         const scrollAmount = 200; // Ajustez cette valeur en fonction de votre conception
//         if (container) {
//             if (direction === "left") {
//                 arrowRightRef.current.style.opacity = "1";
//                 container.scrollLeft -= scrollAmount;
//             } else if (direction === "right") {
//                 arrowLeftRef.current.style.opacity = "1";
//                 container.scrollLeft += scrollAmount;
//             }
//         }
//     };
//
//     const handleScroll = (arrowLeftRef: { current: { style: { opacity: string; }; }; }, arrowRightRef: { current: { style: { opacity: string; }; }; }) => {
//         const container: any = scrollContainerRef.current;
//         if (container) {
//             if (container.scrollLeft === 0) {
//                 arrowLeftRef.current.style.opacity = "0";
//             } else if (container.scrollLeft + container.clientWidth === container.scrollWidth) {
//                 arrowRightRef.current.style.opacity = "0";
//             } else {
//                 arrowLeftRef.current.style.opacity = "1";
//                 arrowRightRef.current.style.opacity = "1";
//             }
//         }
//     };
//
//     useEffect(() => {
//         setSectionName("Utilisateur");
//         setSubSectionName("Utilisateurs");
//     }, []);
//
//     return {handleScrollWithArrow, scrollContainerRef, handleScroll, arrowRef, itemScrollContentActive, setItemScrollContentActive}
// }
//
// export const useArrowService = () => {
//
//     const arrowLeftRef: any = useRef(null);
//     const arrowRightRef = useRef(null);
//
//     useEffect(() => {
//         arrowLeftRef.current.style.opacity = "0";
//     }, []);
//
//     return {arrowLeftRef, arrowRightRef}
// }
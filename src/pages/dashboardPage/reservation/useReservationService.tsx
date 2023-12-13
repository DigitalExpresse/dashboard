import {useNavigationMenuContext} from "../../../contexts/NavigationMenuContext.tsx";
import {useEffect, useRef, useState} from "react";
import {StatusEnum} from "../../../utils/enums/StatusEnum.tsx";

export const useReservationService = () => {

    const { setSubSectionName, setSectionName } = useNavigationMenuContext();

    const [selectedStatusReservation, setSelectedStatusReservation] = useState<StatusEnum>(StatusEnum.ALL);
    const [searchValue, setSearchValue] = useState("");
    const [numberOfResult] = useState(0)

    const scrollContainerRef: any = useRef(null);
    const searchInputRef: any = useRef(null)
    const searchDivRef: any = useRef(null)
    const arrowRef = useRef(null);


    const handleScrollWithArrow = (direction: string, arrowLeftRef: {
        current: { style: { opacity: string } }
    }, arrowRightRef: React.MutableRefObject<any>) => {
        const container: any = scrollContainerRef.current;
        if (container) {
            if (direction === "left") {
                arrowRightRef.current.style.opacity = "1";
                container.scrollLeft -= scrollContainerRef.current.clientWidth;
            } else if (direction === "right") {
                arrowLeftRef.current.style.opacity = "1";
                arrowRightRef.current.style.opacity = "0";
                container.scrollLeft += scrollContainerRef.current.clientWidth;
            }
        }
    };

    const handleScroll = (arrowLeftRef: {
        current: { style: { opacity: string } }
    }, arrowRightRef: React.MutableRefObject<any>) => {
        const container: any = scrollContainerRef.current;
        if (container) {
            if (container.scrollLeft === 0) {
                arrowLeftRef.current.style.opacity = "0";
            } else if (scrollContainerRef.current.scrollLeft >= (scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth)) {
                arrowRightRef.current.style.opacity = "0";
            } else {
                arrowLeftRef.current.style.opacity = "1";
                arrowRightRef.current.style.opacity = "1";
            }
        }
    };

    const handleSearchDivFocus = (isFocused: any) => {
        const classList = searchDivRef.current.classList;
        isFocused ? classList.add("border-black") : classList.remove("border-black");
    };

    useEffect(() => {

        setSectionName("Reservation");
        setSubSectionName("Reservations");

    }, []);

    return {handleScrollWithArrow, scrollContainerRef, handleScroll, arrowRef, selectedStatusReservation, setSelectedStatusReservation, searchInputRef, searchDivRef, searchValue, setSearchValue, numberOfResult, handleSearchDivFocus}
}

export const useArrowService = () => {

    const arrowLeftRef: any = useRef(null);
    const arrowRightRef: any = useRef(null);

    useEffect(() => {
        arrowLeftRef.current.style.opacity = "0";
    }, []);

    return {arrowLeftRef, arrowRightRef}
}
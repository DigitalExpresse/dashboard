import {useArrowService, useReservationService} from "./useReservationService.tsx";
import SearchIcon from "../../../components/icons/SearchIcon.tsx";
import DeleteCircleIcon from "../../../components/icons/DeleteCircleIcon.tsx";
import DeleteIcon from "../../../components/icons/DeleteIcon.tsx";
import { StatusEnum } from "../../../utils/enums/StatusEnum.tsx";

const Reservation = () => {
    const {
        scrollContainerRef,
        handleScrollWithArrow,
        handleScroll,
        searchDivRef,
        searchInputRef,
        selectedStatusReservation,
        setSelectedStatusReservation,
        searchValue,
        setSearchValue,
        numberOfResult,
        handleSearchDivFocus
    } = useReservationService();

    const { arrowLeftRef, arrowRightRef } = useArrowService();

    return (
        <div className="h-full rounded-2xl shadow-fluid bg-light">
            <div className="flex justify-center items-center border-b-[0.5px] border-gray-200 px-6 xl:justify-start">
                <Arrow direction="left" onClick={() => handleScrollWithArrow("left", arrowLeftRef, arrowRightRef)} arrowLeftRef={arrowLeftRef} arrowRightRef={arrowRightRef} />
                <ScrollContent scrollContainerRef={scrollContainerRef} handleScroll={() => handleScroll(arrowLeftRef, arrowRightRef)} selectedStatusReservation={selectedStatusReservation} setSelectedStatusReservation={setSelectedStatusReservation} />
                <Arrow direction="right" onClick={() => handleScrollWithArrow("right", arrowLeftRef, arrowRightRef)} arrowLeftRef={arrowLeftRef} arrowRightRef={arrowRightRef} />
            </div>

            <SearchBar
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                searchDivRef={searchDivRef}
                searchInputRef={searchInputRef}
                handleSearchDivFocus={handleSearchDivFocus}
            />

            <div className="flex flex-col gap-3 py-5 px-6">
                <p className="px-2"><b>{numberOfResult}</b> results found</p>

                <div className="flex flex-wrap gap-3">
                    {searchValue !== "" && <KeywordFilter searchValue={searchValue} setSearchValue={setSearchValue} />}

                    {selectedStatusReservation !== StatusEnum.ALL && <StatusFilter selectedStatusReservation={selectedStatusReservation} setSelectedStatusReservation={setSelectedStatusReservation} />}

                    {(searchValue !== "" || selectedStatusReservation !== StatusEnum.ALL) && <ClearAllFilter setSearchValue={setSearchValue} setSelectedStatusReservation={setSelectedStatusReservation} />}

                </div>
            </div>
        </div>
    );
};

export default Reservation;

const Arrow = ({ direction, onClick, arrowLeftRef, arrowRightRef }) => {

    return (
        <div
            ref={direction === "left" ? arrowLeftRef : arrowRightRef}
            className={`w-8 ${direction === "left" ? "pr-6" : "pl-6"} text-center cursor-pointer min-[538px]:hidden`} onClick={onClick}>
            {direction === "left" ? "<" : ">"}
        </div>
    );
};

const ScrollContent = ({scrollContainerRef, handleScroll, selectedStatusReservation, setSelectedStatusReservation}) => {

    return (
        <div
            ref={scrollContainerRef}
            className={"flex items-center gap-6 font-medium overflow-x-auto scroll-smooth hide-scrollbar"}
            onScroll={() => {handleScroll()} }
        >
            <div className={"flex py-4 gap-2 items-center cursor-pointer " + (selectedStatusReservation === StatusEnum.ALL ? "border-b-2 border-gray-800" : "")} onClick={() => setSelectedStatusReservation(StatusEnum.ALL)}>
                <p>{StatusEnum.ALL}</p>
                <span className={"bg-black rounded-[6px] py-1 px-2 text-sm text-white"}>20</span>
            </div>

            <div className={"flex py-4 gap-2 items-center cursor-pointer " + (selectedStatusReservation === StatusEnum.PENDING ? "border-b-2 border-gray-800" : "")} onClick={() => {setSelectedStatusReservation(StatusEnum.PENDING)} }>
                <p>{StatusEnum.PENDING}</p>
                <span className={"bg-green-200 text-green-700 rounded-[6px] py-1 px-2 text-sm"}>20</span>
            </div>

            <div className={"flex py-4 gap-2 items-center cursor-pointer " + (selectedStatusReservation === StatusEnum.REJECTED ? "border-b-2 border-gray-800" : "")} onClick={() => setSelectedStatusReservation(StatusEnum.REJECTED)}>
                <p>{StatusEnum.REJECTED}</p>
                <span className={"bg-orange-100 rounded-[6px] py-1 px-2 text-sm text-orange-700"}>20</span>
            </div>

            <div className={"flex py-4 gap-2 items-center cursor-pointer " + (selectedStatusReservation === StatusEnum.RESOLVED ? "border-b-2 border-gray-800" : "")} onClick={() => setSelectedStatusReservation(StatusEnum.RESOLVED)}>
                <p>{StatusEnum.RESOLVED}</p>
                <span className={"bg-orange-100 rounded-[6px] py-1 px-2 text-sm text-orange-700"}>20</span>
            </div>
        </div>
    );
};

const SearchBar = ({ searchValue, setSearchValue, searchDivRef, searchInputRef, handleSearchDivFocus }) => (
    <div ref={searchDivRef} className="flex justify-center items-center gap-4 mx-6 mt-8 mb-3 px-4 py-4 border-gray-200 border-[1.5px] rounded-xl transition-all duration-75 ease-in-out max-w-[400px]">
        <SearchIcon />
        <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            ref={searchInputRef}
            onBlur={() => handleSearchDivFocus(false)}
            onFocus={() => handleSearchDivFocus(true)}
            type="text" placeholder="Rechercher une réservation .."
            className="w-full bg-light outline-none focus:ring-0"
        />
    </div>
);


const KeywordFilter = ({ searchValue, setSearchValue }) => (
    <div className="flex flex-wrap overflow-x-auto items-center gap-3 px-3 py-3 border border-dashed border-gray-300 rounded-xl">
        <p className="font-medium">Mot clé :</p>
        <div className="flex gap-2 items-center bg-gray-900 px-3 py-1 rounded-xl">
            <span className="text-white text-sm">{searchValue}</span>
            <div onClick={() => setSearchValue("")}>
                <DeleteCircleIcon />
            </div>
        </div>
    </div>
);

const StatusFilter = ({ selectedStatusReservation, setSelectedStatusReservation }) => (
    <div className="flex items-center flex-wrap overflow-x-auto gap-3 px-3 py-3 border border-dashed border-gray-300 rounded-xl cursor-default">
        <p className="font-medium">Statut :</p>
        <div className="flex gap-2 items-center bg-gray-900 px-3 py-1 rounded-xl">
            <span className="text-white text-sm">{selectedStatusReservation}</span>
            <div onClick={() => setSelectedStatusReservation(StatusEnum.ALL)}>
                <DeleteCircleIcon />
            </div>
        </div>
    </div>
);

const ClearAllFilter = ({ setSearchValue, setSelectedStatusReservation }) => (
    <div className="flex px-4 py-2 my-1 items-center gap-1.5 cursor-pointer hover:bg-red-50 rounded-xl"
         onClick={() => {
             setSearchValue("");
             setSelectedStatusReservation(StatusEnum.ALL);
         }}
    >
        <DeleteIcon />
        <p className="text-red-500 font-medium mt-1">Clear</p>
    </div>
);
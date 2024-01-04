import {useArrowService, useReservationService} from "./useReservationService.tsx";
import SearchIcon from "../../../components/icons/SearchIcon.tsx";
import DeleteCircleIcon from "../../../components/icons/DeleteCircleIcon.tsx";
import DeleteIcon from "../../../components/icons/DeleteIcon.tsx";
import { StatusEnum } from "../../../utils/enums/StatusEnum.tsx";
import React, {SetStateAction, useState} from "react";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";

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

    const {arrowLeftRef, arrowRightRef} = useArrowService();

    return (
        <div className="rounded-2xl shadow-fluid bg-light mb-5">
            <div className="flex justify-center items-center border-b-[0.5px] border-gray-200 px-6 xl:justify-start">
                <Arrow direction="left" onClick={() => handleScrollWithArrow("left", arrowLeftRef, arrowRightRef)}
                       arrowLeftRef={arrowLeftRef} arrowRightRef={arrowRightRef}/>
                <ScrollContent scrollContainerRef={scrollContainerRef}
                               handleScroll={() => handleScroll(arrowLeftRef, arrowRightRef)}
                               selectedStatusReservation={selectedStatusReservation}
                               setSelectedStatusReservation={setSelectedStatusReservation}/>
                <Arrow direction="right" onClick={() => handleScrollWithArrow("right", arrowLeftRef, arrowRightRef)}
                       arrowLeftRef={arrowLeftRef} arrowRightRef={arrowRightRef}/>
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
                    {searchValue !== "" && <KeywordFilter searchValue={searchValue} setSearchValue={setSearchValue}/>}

                    {selectedStatusReservation !== StatusEnum.ALL &&
                        <StatusFilter selectedStatusReservation={selectedStatusReservation}
                                      setSelectedStatusReservation={setSelectedStatusReservation}/>}

                    {(searchValue !== "" || selectedStatusReservation !== StatusEnum.ALL) &&
                        <ClearAllFilter setSearchValue={setSearchValue}
                                        setSelectedStatusReservation={setSelectedStatusReservation}/>}

                </div>
            </div>

            <ArrayListReservation/>

        </div>
    );
};

export default Reservation;

const Arrow = ({direction, onClick, arrowLeftRef, arrowRightRef}) => {

    return (
        <div
            ref={direction === "left" ? arrowLeftRef : arrowRightRef}
            className={`w-8 ${direction === "left" ? "pr-6" : "pl-6"} text-center cursor-pointer min-[538px]:hidden`}
            onClick={onClick}>
            {direction === "left" ? "<" : ">"}
        </div>
    );
};

const ScrollContent = ({scrollContainerRef, handleScroll, selectedStatusReservation, setSelectedStatusReservation}) => {

    return (
        <div
            ref={scrollContainerRef}
            className={"flex items-center gap-6 font-medium scroll-smooth overflow-x-auto hide-scrollbar"}
            onScroll={() => {
                handleScroll()
            }}
        >
            <div
                className={"flex py-4 gap-2 items-center cursor-pointer " + (selectedStatusReservation === StatusEnum.ALL ? "border-b-2 border-gray-800" : "")}
                onClick={() => setSelectedStatusReservation(StatusEnum.ALL)}>
                <p>{StatusEnum.ALL}</p>
                <span className={"bg-black rounded-[6px] py-1 px-2 text-sm text-white"}>20</span>
            </div>

            <div
                className={"flex py-4 gap-2 items-center cursor-pointer " + (selectedStatusReservation === StatusEnum.PENDING ? "border-b-2 border-gray-800" : "")}
                onClick={() => {
                    setSelectedStatusReservation(StatusEnum.PENDING)
                }}>
                <p>{StatusEnum.PENDING}</p>
                <span className={"bg-green-200 text-green-700 rounded-[6px] py-1 px-2 text-sm"}>20</span>
            </div>

            <div
                className={"flex py-4 gap-2 items-center cursor-pointer " + (selectedStatusReservation === StatusEnum.REFUSED ? "border-b-2 border-gray-800" : "")}
                onClick={() => setSelectedStatusReservation(StatusEnum.REFUSED)}>
                <p>{StatusEnum.REFUSED}</p>
                <span className={"bg-orange-100 rounded-[6px] py-1 px-2 text-sm text-orange-700"}>20</span>
            </div>

            <div
                className={"flex py-4 gap-2 items-center cursor-pointer " + (selectedStatusReservation === StatusEnum.CONFIRMATE ? "border-b-2 border-gray-800" : "")}
                onClick={() => setSelectedStatusReservation(StatusEnum.CONFIRMATE)}>
                <p>{StatusEnum.CONFIRMATE}</p>
                <span className={"bg-orange-100 rounded-[6px] py-1 px-2 text-sm text-orange-700"}>20</span>
            </div>
        </div>
    );
};

const SearchBar = ({searchValue, setSearchValue, searchDivRef, searchInputRef, handleSearchDivFocus}) => (
    <div ref={searchDivRef}
         className="flex justify-center items-center gap-4 mx-6 mt-8 mb-3 px-4 py-4 border-gray-200 border-[1.5px] rounded-xl transition-all duration-75 ease-in-out max-w-[400px]">
        <SearchIcon/>
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

const KeywordFilter = ({searchValue, setSearchValue}) => (
    <div
        className="flex flex-wrap items-center gap-3 px-3 py-3 border border-dashed border-gray-300 rounded-xl">
        <p className="font-medium">Mot clé :</p>
        <div className="flex gap-2 items-center bg-gray-900 px-3 py-1 rounded-xl">
            <span className="text-white text-sm">{searchValue}</span>
            <div onClick={() => setSearchValue("")}>
                <DeleteCircleIcon/>
            </div>
        </div>
    </div>
);

const StatusFilter = ({selectedStatusReservation, setSelectedStatusReservation}) => (
    <div
        className="flex items-center flex-wrap gap-3 px-3 py-3 border border-dashed border-gray-300 rounded-xl cursor-default">
        <p className="font-medium">Statut :</p>
        <div className="flex gap-2 items-center bg-gray-900 px-3 py-1 rounded-xl">
            <span className="text-white text-sm">{selectedStatusReservation}</span>
            <div onClick={() => setSelectedStatusReservation(StatusEnum.ALL)}>
                <DeleteCircleIcon/>
            </div>
        </div>
    </div>
);

const ClearAllFilter = ({setSearchValue, setSelectedStatusReservation}) => (
    <div className="flex px-4 py-2 my-1 items-center gap-1.5 cursor-pointer hover:bg-red-50 rounded-xl"
         onClick={() => {
             setSearchValue("");
             setSelectedStatusReservation(StatusEnum.ALL);
         }}
    >
        <DeleteIcon/>
        <p className="text-red-500 font-medium mt-1">Clear</p>
    </div>
);

const ArrayListReservation = ({}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [entitiesPerPage, setEntitiesPerPage] = useState(5);

    const indexOfLastEntity = currentPage * entitiesPerPage;
    const indexOfFirstEntity = indexOfLastEntity - entitiesPerPage;

    const paginate = (pageNumber: SetStateAction<number>) => setCurrentPage(pageNumber);

    const currentEntities = reservationList.slice(indexOfFirstEntity, indexOfLastEntity);
    return (
        <>
            <div className="w-fit-content mx-auto mt-5 overflow-x-auto">
                <table className="w-full">
                    <thead className="border-b-[1px] border-gray-200 bg-gray-100">
                    <tr className="text-sm">
                        <th className="py-4 px-6 text-left">
                            <div className="flex items-center">
                                <input type="checkbox" className="h-4 w-4 text-gray-600 rounded"/>
                            </div>
                        </th>
                        <th className="py-4 px-6 text-left !text-gray-500 font-semibold">Date</th>
                        <th className="py-4 px-6 text-left !text-gray-500 font-semibold">Nom</th>
                        <th className="py-4 px-6 text-left !text-gray-500 font-semibold">Téléphone</th>
                        <th className="py-4 px-6 text-left !text-gray-500 font-semibold">Statut</th>
                        <th className="py-4 px-6 text-left !text-gray-500 font-semibold">Actions</th>
                    </tr>
                    </thead>

                    <tbody className="text-sm">

                    {
                        currentEntities.map((_reservation, index) => (

                            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100 border-opacity-80 whitespace-nowrap">
                                <td className="py-4 px-6 text-left">
                                    <div className="flex items-center">
                                        <input type="checkbox" className="h-4 w-4 text-gray-600 rounded"/>
                                    </div>
                                </td>
                                <td className="py-4 px-6 text-left">12/12/2021</td>
                                <td className="py-4 px-6 text-left">
                                    <div className={"flex flex-col gap-1"}>
                                        <p>John Doe</p>
                                        <p className="text-gray-400 font-light">marius13@gmail.com</p>
                                    </div>
                                </td>
                                <td className="py-4 px-6 text-left">06 12 34 56 78</td>
                                <td className="py-4 px-6 text-left">
                                    <button
                                        className="flex items-center gap-1 bg-orange-100 rounded-[6px] py-1 px-2 font-medium">
                                        <span className={"text-sm text-orange-800"}>En attente</span>
                                    </button>
                                </td>
                                <td className="py-4 px-6 text-left w-36">
                                    <div className="flex items-center gap-4 font-medium">
                                        <button className="flex items-center gap-1 bg-green-400 rounded-[6px] py-1 px-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 className="icon icon-tabler icon-tabler-check" width="14" height="14"
                                                 viewBox="0 0 24 24" strokeWidth="2.5" stroke="#FFFFFF" fill="none"
                                                 strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z"/>
                                                <path d="M5 12l5 5l10 -10"/>
                                            </svg>
                                        </button>
                                        <button className="flex items-center gap-1 bg-red-500 rounded-[6px] py-1 px-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 className="icon icon-tabler icon-tabler-x" width="14" height="14"
                                                 viewBox="0 0 24 24" strokeWidth="2.5" stroke="#FFFFFF" fill="none"
                                                 strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z"/>
                                                <line x1="18" y1="6" x2="6" y2="18"/>
                                                <line x1="6" y1="6" x2="18" y2="18"/>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>

            <ArrayFooter entitiesPerPage={entitiesPerPage} setEntitiesPerPage={setEntitiesPerPage} reservationList={reservationList} paginate={paginate} currentPage={currentPage} setCurrentPage={setCurrentPage} indexOfFirstEntity={indexOfFirstEntity} indexOfLastEntity={indexOfLastEntity}/>

        </>
    );
};

const ArrayFooter = ({entitiesPerPage, setEntitiesPerPage, reservationList, paginate, currentPage, setCurrentPage, indexOfFirstEntity, indexOfLastEntity}) => {

    const [showArrowEffect, setShowArrowEffect] : React.ComponentState = useState(null);

    const handleLeftArrowClick = () => {
        if (indexOfFirstEntity > 0) {
            paginate(currentPage - 1);
            setShowArrowEffect("left");
            setTimeout(() => setShowArrowEffect(null), 300);
        }
    };

    const handleRightArrowClick = () => {
        if (indexOfLastEntity < reservationList.length) {
            paginate(currentPage + 1);
            setShowArrowEffect("right");
            setTimeout(() => setShowArrowEffect(null), 300);
        }
    };

    return (

    <div className={"flex justify-center gap-6 mt-5 pb-4 px-8 items-center flex-wrap-reverse xs:justify-end xs:gap-10"}>
        <div className={"flex gap-4 items-center"}>
            <p className="text-gray-700 text-sm">
                Afficher :
            </p>
            <select
                className="border border-gray-300 rounded-md pl-3 py-1.5 text-sm"
                onChange={(e) => {
                    setEntitiesPerPage(Number(e.target.value))
                    setCurrentPage(1)
                }}
                value={entitiesPerPage}
            >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={50}>50</option>
            </select>
        </div>

        <div className={"flex gap-4 items-center"}>
            <p className={"text-sm"}>
                {indexOfFirstEntity + 1} - {indexOfLastEntity > reservationList.length ? reservationList.length : indexOfLastEntity} sur {reservationList.length}</p>
            <div className="flex gap-2">
                <div
                    className={`flex justify-center gap-2 rounded-full ${
                        indexOfFirstEntity === 0 ? 'opacity-50' : 'cursor-pointer'
                    }`}
                    onClick={handleLeftArrowClick}
                    style={{
                        background: showArrowEffect ==="left" ? '#f2f2f2' : 'transparent', // Changement de couleur de fond temporaire
                        transition: 'background 0.3s ease', // Animation de transition
                    }}
                >
                    <KeyboardArrowLeft />
                </div>
                <div
                    className={`flex justify-center gap-2 rounded-full ${
                        indexOfLastEntity >= reservationList.length ? 'opacity-50' : 'cursor-pointer'
                    }`}
                    onClick={handleRightArrowClick}
                    style={{
                        background: showArrowEffect === "right" ? '#cbcbcb' : 'transparent', // Changement de couleur de fond temporaire
                        transition: 'background 0.3s ease', // Animation de transition
                    }}
                >
                    <KeyboardArrowRight />
                </div>
            </div>
        </div>
    </div>

    );

}

const reservationList = [
    {
        id: 1,
        date: "12/12/2021",
        name: "John Doe",
        email: "jonhe@gmai.com",
        phone: "06 12 34 56 78",
        status: StatusEnum.PENDING
    },

    {
        id: 1,
        date: "12/12/2021",
        name: "John Doe",
        email: "jonhe@gmai.com",
        phone: "06 12 34 56 78",
        status: StatusEnum.PENDING
    },
    {
        id: 1,
        date: "12/12/2021",
        name: "John Doe",
        email: "jonhe@gmai.com",
        phone: "06 12 34 56 78",
        status: StatusEnum.PENDING
    },
    {
        id: 1,
        date: "12/12/2021",
        name: "John Doe",
        email: "jonhe@gmai.com",
        phone: "06 12 34 56 78",
        status: StatusEnum.PENDING
    },
    {
        id: 1,
        date: "12/12/2021",
        name: "John Doe",
        email: "jonhe@gmai.com",
        phone: "06 12 34 56 78",
        status: StatusEnum.PENDING
    },

    {
        id: 1,
        date: "12/12/2021",
        name: "John Doe",
        email: "jonhe@gmai.com",
        phone: "06 12 34 56 78",
        status: StatusEnum.PENDING
    },
    {
        id: 1,
        date: "12/12/2021",
        name: "John Doe",
        email: "jonhe@gmai.com",
        phone: "06 12 34 56 78",
        status: StatusEnum.PENDING
    },
    {
        id: 1,
        date: "12/12/2021",
        name: "John Doe",
        email: "jonhe@gmai.com",
        phone: "06 12 34 56 78",
        status: StatusEnum.PENDING
    },
    {
        id: 1,
        date: "12/12/2021",
        name: "John Doe",
        email: "jonhe@gmai.com",
        phone: "06 12 34 56 78",
        status: StatusEnum.PENDING
    },
    {
        id: 1,
        date: "12/12/2021",
        name: "John Doe",
        email: "jonhe@gmai.com",
        phone: "06 12 34 56 78",
        status: StatusEnum.PENDING
    },
    {
        id: 1,
        date: "12/12/2021",
        name: "John Doe",
        email: "jonhe@gmai.com",
        phone: "06 12 34 56 78",
        status: StatusEnum.PENDING
    },
    {
        id: 1,
        date: "12/12/2021",
        name: "John Doe",
        email: "jonhe@gmai.com",
        phone: "06 12 34 56 78",
        status: StatusEnum.PENDING
    },
    {
        id: 1,
        date: "12/12/2021",
        name: "John Doe",
        email: "jonhe@gmai.com",
        phone: "06 12 34 56 78",
        status: StatusEnum.PENDING
    },

    {
        id: 1,
        date: "12/12/2021",
        name: "John Doe",
        email: "jonhe@gmai.com",
        phone: "06 12 34 56 78",
        status: StatusEnum.PENDING
    },
    {
        id: 1,
        date: "12/12/2021",
        name: "John Doe",
        email: "jonhe@gmai.com",
        phone: "06 12 34 56 78",
        status: StatusEnum.PENDING
    },

    {
        id: 1,
        date: "12/12/2021",
        name: "John Doe",
        email: "jonhe@gmai.com",
        phone: "06 12 34 56 78",
        status: StatusEnum.PENDING
    },
    {
        id: 1,
        date: "12/12/2021",
        name: "John Doe",
        email: "jonhe@gmai.com",
        phone: "06 12 34 56 78",
        status: StatusEnum.PENDING
    },

    {
        id: 1,
        date: "12/12/2021",
        name: "John Doe",
        email: "jonhe@gmai.com",
        phone: "06 12 34 56 78",
        status: StatusEnum.PENDING
    },
    {
        id: 1,
        date: "12/12/2021",
        name: "John Doe",
        email: "jonhe@gmai.com",
        phone: "06 12 34 56 78",
        status: StatusEnum.PENDING
    },

]
import Navbar from "./navbar/Navbar.tsx";

const DashboardPage = () => {

    return (
        <div className={"bg-light"}>
            <Navbar/>
            <div className={"relative top-[55px]"}>
                <div className={"bg-green-400 h-64 w-1/2 m-auto"}>Test</div>
                <div className={"bg-red-400 h-64 w-1/2 m-auto"}>Test</div>
                <div className={"bg-blue-400 h-64 w-1/2 m-auto"}>Test</div>
                <div className={"bg-yellow-400 h-64 w-1/2 m-auto"}>Test</div>
                <div className={"bg-green-400 h-64 w-1/2 m-auto"}>Test</div>
                <div className={"bg-red-400 h-64 w-1/2 m-auto"}>Test</div>
                <div className={"bg-blue-400 h-64 w-1/2 m-auto"}>Test</div>
            </div>
        </div>
    );
};

export default DashboardPage;
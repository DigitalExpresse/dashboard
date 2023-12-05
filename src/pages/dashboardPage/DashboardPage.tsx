
const DashboardPage = () => {

    return (
        <div className={"bg-grayLight text-textDark w-full"} id={"dashboardPage"}>

            <div className={"relative pb-10 pt-20 w-full h-screen overflow-y-scroll"}>
                <div className={"bg-green-400 h-64 w-2/3 m-auto mb-10 rounded"}></div>
                <div className={"bg-red-400 h-64 w-2/3 m-auto my-10 rounded"}></div>
                <div className={"bg-blue-400 h-64 w-2/3 m-auto my-10 rounded"}></div>
                <div className={"bg-yellow-400 h-64 w-2/3 m-auto my-10 rounded"}></div>
                <div className={"bg-green-400 h-64 w-2/3 m-auto my-10 rounded"}></div>
                <div className={"bg-red-400 h-64 w-2/3 m-auto my-10 rounded"}></div>
                <div className={"bg-blue-400 h-64 w-2/3 m-auto my-10 rounded"}></div>
            </div>

        </div>
    );
};

export default DashboardPage;
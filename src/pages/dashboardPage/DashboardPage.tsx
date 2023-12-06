import SpinnerPageLoad from "../../components/spinnerPageLoad/SpinnerPageLoad.tsx";
import {useSpinnerPageLoadContext} from "../../contexts/SpinnerPageLoadContext.tsx";

const DashboardPage = () => {

    const {isLoading, setIsLoading} = useSpinnerPageLoadContext();

    setTimeout(() => {
        setIsLoading(false);
    }, 3000);

    return (
        <>
            { isLoading ? <SpinnerPageLoad/> : null }
            <div className={"bg-primaryBg text-semiDark w-full"} id={"dashboardPage"}>

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
        </>
    );
};

export default DashboardPage;
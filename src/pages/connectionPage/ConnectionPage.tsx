import {ConnectionForm} from "./components/connectionForm/ConnectionForm.tsx";
import './ConnectionPage.css';
import logo from "../../assets/images/img.png";

export default function ConnectionPage() {

    return (
        <div className={"bg-connection-page px-2"}>
            <div className={"!flex !h-screen !flex-col !justify-center"}>
                <img src={logo} alt={"logo"} className={"!w-40 !h-40 !mb-10 mx-auto"}/>
                <div className={"bg-white !p-6 rounded-xl shadow-2xl w-[95%] !max-w-xl mb-24 mx-auto"}>
                        <ConnectionForm/>
                </div>
            </div>
        </div>
    );
}

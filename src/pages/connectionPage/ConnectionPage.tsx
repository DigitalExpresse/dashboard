import {ConnectionForm} from "../../components/ConnectionForm.tsx";
import './ConnectionPage.css';

export default function ConnectionPage() {

    return (
        <div className={"bg-connection-page px-2"}>
            <div className={"!flex !h-screen !flex-col !justify-center"}>
                <h1 className={"block mt-0 mx-auto mb-[40px]"}>
                    Digital
                    <span className={"text-blueLogo text-3xl"}>Express</span>
                </h1>
                <div className={"bg-white !p-6 rounded-xl shadow-xl w-[95%] !max-w-xl mx-auto"}>
                    <div className={"flex flex-col items-center"}>
                        <div className={"self-start"}>
                            <h2 className={"!font-semibold text-2xl mb-5"}>Connexion</h2>
                        </div>
                        <ConnectionForm/>
                    </div>
                </div>
            </div>
        </div>
    );
}

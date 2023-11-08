import {instance} from "../../utils/axios_instance";

const DashboardPage = () => {

    const routeTest = () => {

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:3001/api/admin/1',
        };

        instance.request(config)
            .then((response: { data: any; }) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error: any) => {
                if(error.response.status === 401) {
                    console.log(error);
                    console.log("error")
                }
            });

    }
    return (
        <div>
            <button onClick={(e) => {
                e.preventDefault();
                routeTest();

            }} className={"text-center h-screen m-auto"}>Dashboard</button>
        </div>
    );
};

export default DashboardPage;
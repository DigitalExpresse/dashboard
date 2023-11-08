import {instance} from "../../utils/axios_instance.tsx";

export const fetchConnection = async (email: string, password: string) => {

    const data = {
        email,
        password,
    };

    const response = await instance.post('/admin/connection', data);
    console.log(response);

    return response;
}
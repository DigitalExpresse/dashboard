import { instance } from "../../utils/axios_instance.tsx";

export const fetchConnection = async (email: string, password: string) => {
    const data = {
        email,
        password,
    };

    return await instance.post("/admin/connection", data);
};
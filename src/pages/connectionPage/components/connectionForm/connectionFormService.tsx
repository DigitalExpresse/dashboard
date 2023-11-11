import { fetchConnection } from "./connectionFormApi.tsx";
import { FormManager } from "../../../../utils/FormManager.tsx";

export const submitConnectionForm = async (
    event: { preventDefault: () => void },
    setErrors: (arg0: any) => void,
    formData: {
        email: string;
        password: string;
        remember: boolean;
    },
    navigate: (arg0: string) => void
): Promise<any> => {

    event.preventDefault();

    const fieldErrors = FormManager.validateForm(formData);

    if (Object.keys(fieldErrors).length > 0) {
        setErrors(fieldErrors);
        return false;
    }

    try {
        const res = await fetchConnection(formData.email, formData.password);
        navigate("/");
        return res;
    } catch (error) {
        handleErrorResponse(error, setErrors);
    }
};

const handleErrorResponse = (error: any, setErrors: (arg0: any) => void) => {
    if (error.response && error.response.status === 401 || error.response.status === 404) {
        setErrors((prevErrors: any) => ({
            ...prevErrors,
            invalidCredentials: true,
        }));
    } else {
        setErrors((prevErrors: any) => ({
            ...prevErrors,
            errorServeur: "Une erreur est survenue",
        }));
    }

    setTimeout(() => {
        setErrors((prevErrors: any) => ({
            ...prevErrors,
            invalidCredentials: false,
            errorServeur: "",
        }));
    }, 3000);
};

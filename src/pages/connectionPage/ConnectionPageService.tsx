
import { fetchConnection } from "./ConnectionPageApi.tsx";
import { FormManager } from "./FormManager.tsx";

export const submitConnectionForm = async (
    event: { preventDefault: () => void },
    setErrors: (arg0: any) => void,
    formData: {
        email: string;
        password: string;
        remember: any;
    },
    navigate: (arg0: string) => void
): Promise<any> => {

    event.preventDefault();

    if (!FormManager.validateFormConnection(formData, setErrors)) {
        return false;
    }

    try {
        const res = await fetchConnection(formData.email, formData.password);
        navigate("/dashboard");
        return res;
    } catch (error) {
        handleErrorResponse(error, setErrors);
    }
};

const handleErrorResponse = (error: any, setErrors: (arg0: any) => void) => {
    if (error.response && error.response.status === 401) {
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

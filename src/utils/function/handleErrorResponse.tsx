export const handleErrorResponse = (error: any, setErrors: (arg0: any) => void, setLoaderIsActive: (arg0: boolean) => void) => {
    if (error.response && (error.response.status === 401 || error.response.status === 404)) {
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
        setLoaderIsActive(false);
    }, 3000);
};
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUrlContext } from "../../contexts/UrlContext.tsx";
import {fetchConnection} from "./connectionFormApi.tsx";
import {FormManager} from "../../utils/FormManager.tsx";
import {handleErrorResponse} from "../../utils/handleErrorResponse.tsx";
import {UrlPath} from "../../utils/UrlPath.tsx";

export const useConnectionForm = () => {

    const { setCurrentUrl } = useUrlContext();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const [formErrors, setFormErrors] = useState({
        email: "",
        password: "",
        invalidCredentials: false,
        errorServeur: "",
    });

    const [loaderIsActive, setLoaderIsActive] = useState(false);


    const hasInvalidCredentials = formErrors.invalidCredentials;


    const handleSubmitFormConnection = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoaderIsActive(true);
        try {
            const res = await submitConnectionForm(e, setFormErrors, formData, navigate, setLoaderIsActive, setCurrentUrl);
            if (res) {
                setLoaderIsActive(false);
                return res;
            }
            setLoaderIsActive(false);
        } catch (error) {
            setFormErrors((prevErrors: any) => ({
                ...prevErrors,
                errorServeur: "Une erreur est survenue",
            }));
            setTimeout(() => {
                setLoaderIsActive(false);
                setFormErrors((prevErrors: any) => ({
                    ...prevErrors,
                    errorServeur: "",
                }));
            }, 2000);
        }
    };

    const submitConnectionForm = async (
        event: React.FormEvent<HTMLFormElement>,
        setFormErrors: (arg0: any) => void,
        formData: { email: string; password: string; remember: boolean },
        navigate: (arg0: string) => void,
        setLoaderIsActive: (arg0: boolean) => void,
        setCurrentUrl: (url: string) => void
    ): Promise<any> => {
        event.preventDefault();

        const fieldErrors = FormManager.validateForm(formData);

        if (Object.keys(fieldErrors).length > 0) {
            setFormErrors(fieldErrors);
            return false;
        }

        try {
            const res = await fetchConnection(formData.email, formData.password);
            localStorage.setItem("user", JSON.stringify(res.data));
            setCurrentUrl(UrlPath.Dashboard);
            navigate(UrlPath.Dashboard);
            return res;
        } catch (error) {
            handleErrorResponse(error, setFormErrors, setLoaderIsActive);
        }
    };

    return { formData, setFormData, formErrors, setFormErrors, loaderIsActive, hasInvalidCredentials, handleSubmitFormConnection };
};


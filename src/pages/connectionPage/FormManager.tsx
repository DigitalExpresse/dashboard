
import { FieldValidator } from "./FieldValidator";

export class FormManager {
    static handleChangeFormConnection(
        event: { target: { name: string; value: string } },
        setFormData: (arg0: any) => void,
        formData: any,
        setErrors: (arg0: any) => void,
        errors: any
    ) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: "",
        });
    }

    static validateFormConnection(
        formData: {
            email: string;
            password: string;
            remember: any;
        },
        setErrors: (arg0: any) => void
    ) {
        let isValid = true;
        const newErrors: any = {};

        if (!FieldValidator.validateEmail(formData.email)) {
            newErrors.email = "Veuillez saisir une adresse email valide";
            isValid = false;
        }

        if (!FieldValidator.validatePassword(formData.password)) {
            newErrors.password = "Veuillez saisir un mot de passe";
            isValid = false;
        }

        if (!isValid) {
            setErrors(newErrors);
        }

        return isValid;
    }
}

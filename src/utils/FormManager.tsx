import { FieldValidator } from "./FieldValidator.tsx";

export class FormManager {
    static handleChange(
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

    static validateField(fieldName: string, value: string): string | null {
        switch (fieldName) {
            case 'email':
                if (!FieldValidator.validateEmail(value)) {
                    return 'Veuillez saisir une adresse email valide';
                }
                break;
            case 'password':
                if (!FieldValidator.validatePassword(value)) {
                    return 'Veuillez saisir un mot de passe';
                }
                break;
            default:
                break;
        }
        return null;
    }

    static validateForm(formData: any): Record<string, string> {
        const errors: Record<string, string> = {};

        for (const fieldName in formData) {
            if (Object.prototype.hasOwnProperty.call(formData, fieldName)) {
                const value = formData[fieldName];
                const error = this.validateField(fieldName, value);
                if (error) {
                    errors[fieldName] = error;
                }
            }
        }

        return errors;
    }
}

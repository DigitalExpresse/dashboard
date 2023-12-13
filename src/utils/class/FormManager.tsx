import { FieldValidator } from "./FieldValidator.tsx";

export class FormManager {
    // Cette fonction est appelée lorsqu'un champ de formulaire change de valeur
    static handleChange(
        event: { target: { name: string; value: string } },
        setFormData: (arg0: any) => void, // Une fonction pour mettre à jour les données du formulaire
        formData: any, // Les données du formulaire actuelles
        setErrors: (arg0: any) => void, // Une fonction pour mettre à jour les erreurs du formulaire
        errors: any // Les erreurs actuelles du formulaire
    ) {
        const { name, value } = event.target; // On extrait le nom et la valeur du champ qui a changé
        setFormData({
            ...formData, // On copie les données du formulaire actuelles
            [name]: value, // On met à jour la valeur du champ qui a changé
        });
        setErrors({
            ...errors, // On copie les erreurs du formulaire actuelles
            [name]: "", // On supprime les erreurs du champ qui a changé, car il a été modifié
        });
    }

    // Cette fonction valide un champ spécifique en fonction de son nom et de sa valeur
    static validateField(fieldName: string, value: string): string | null {
        switch (fieldName) {
            case 'email':
                // Si le champ est "email", on vérifie s'il contient une adresse email valide
                if (!FieldValidator.validateEmail(value)) {
                    return 'Veuillez saisir une adresse email valide'; // Si ce n'est pas le cas, on retourne un message d'erreur
                }
                break;
            case 'password':
                // Si le champ est "password", on vérifie s'il contient un mot de passe valide
                if (!FieldValidator.validatePassword(value)) {
                    return 'Veuillez saisir un mot de passe'; // Si ce n'est pas le cas, on retourne un message d'erreur
                }
                break;
            default:
                break;
        }
        return null; // Si le champ est valide, on retourne null
    }

    // Cette fonction valide l'ensemble du formulaire en vérifiant chaque champ
    static validateForm(formData: any): Record<string, string> {
        const errors: Record<string, string> = {}; // On initialise un objet pour stocker les erreurs

        for (const fieldName in formData) {
            if (Object.prototype.hasOwnProperty.call(formData, fieldName)) { // On vérifie que le champ existe bien dans le formulaire (pour éviter les erreurs)
                const value = formData[fieldName]; // On récupère la valeur du champ
                const error = this.validateField(fieldName, value); // On valide le champ
                if (error) {
                    errors[fieldName] = error; // Si une erreur est renvoyée, on l'ajoute à la liste des erreurs
                }
            }
        }

        return errors; // On retourne la liste des erreurs
    }
}

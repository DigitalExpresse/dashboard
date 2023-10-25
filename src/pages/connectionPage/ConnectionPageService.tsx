export const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

export const validatePassword = (password: string) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{2})[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
};

export const handleChange = (event: { target: { name: string; value: string; }; }, setFormData: (arg0: any) => void, formData: any, setErrors: (arg0: any) => void, errors: any) => {
    const { name, value } = event.target;
    setFormData({
        ...formData,
        [name]: value,
    });
    setErrors({
        ...errors,
        [name]: '',
    });
};

export const submitConnectionForm = (event: { preventDefault: () => void; },setErrors: (arg0: any) => void, formData: { email: string; password: string; remember: any; }) => {
    event.preventDefault();
    let isValid = true;
    const newErrors: any = {};

    if (!validateEmail(formData.email)) {
        newErrors.email = 'Veuillez saisir une adresse email valide';
        isValid = false;
    }

    if (!validatePassword(formData.password)) {
        newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères dont 2 chiffres, une majuscule et une minuscule';
        isValid = false;
    }

    if (!isValid) {
        setErrors(newErrors);
        return;
    }

    console.log({
        email: formData.email,
        password: formData.password,
        remember: formData.remember,
    });
};
export class FieldValidator {
    static validateEmail(email: string): boolean {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    static validatePassword(password: string): boolean {
        return password.length > 0;
    }
}
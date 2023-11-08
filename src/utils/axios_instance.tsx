import axios, { AxiosInstance } from 'axios';

class ApiInstance {

    private readonly axiosInstance: AxiosInstance;

    constructor(baseURL: string) {
        this.axiosInstance = axios.create({
            baseURL,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            }
        });

        this.axiosInstance.interceptors.response.use(
            response => response,
            this.handleResponseError.bind(this)
        );
    }

    private async handleResponseError(error: any) {
        const originalRequest = error.config;

        if (error.response?.data.error === "JsonWebTokenError: jwt must be provided") {
            return Promise.reject({
                response: {
                    status: 401,
                    error: error.response.data.error
                }
            });
        }

        switch (error.response?.status) {
            case 401:
                if (!originalRequest._retry) {
                    originalRequest._retry = true;
                    await this.refreshToken();
                    return this.axiosInstance(originalRequest);
                }
                break;
            case 403:
                return Promise.reject({
                    response: {
                        status: 403,
                        error: "Vous n'avez pas les droits"
                    }
                });
            case 404:
                return Promise.reject({
                    response: {
                        status: 404,
                        error: "La ressource n'existe pas"
                    }
                });
            case 409:
                return Promise.reject({
                    response: {
                        status: 409,
                        error: "La ressource existe déjà"
                    }
                });
            case 500:
                return Promise.reject({
                    response: {
                        status: 500,
                        error: "Une erreur est survenue"
                    }
                });
        }

        return Promise.reject(error);
    }

    private async refreshToken() {
        try {
            await this.axiosInstance.post('/admin/refresh-token');
        } catch (error) {
            return Promise.reject(error);
        }
    }

    public getInstance() {
        return this.axiosInstance;
    }
}

const apiInstance = new ApiInstance('http://localhost:3001/api');
const instance = apiInstance.getInstance();

export { instance };

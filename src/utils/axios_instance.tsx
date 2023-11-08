import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001/api', // Remplacez par votre URL
    withCredentials: true, // Permet d'inclure les cookies dans la requête
    headers: {
        'Content-Type': 'application/json',
    }
});

// Intercepteur pour gérer les erreurs 401
instance.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;

        await handle401Error(error, originalRequest);
        await handle403Error(error);
        await handle404Error(error);
        await handle409Error(error);
        await handle500Error(error);

        return Promise.reject(error);
    }
);

const handle401Error = async (error: { response: { status: number; }; }, originalRequest: any) => {
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        // Appel à la route refresh-token
        await instance.post('http://localhost:3001/api/admin/refresh-token');

        // Réessaie la requête avec les nouveaux tokens
        return instance(originalRequest);
    }
}

// Fonction pour gérer les erreurs 404
const handle404Error = (error: { response: { status: number; }; }) => {
    if (error.response && error.response.status === 404) {
        return Promise.reject(new Error(" n'existe pas"));
    }
    return Promise.reject(error);
};

const handle403Error = (error: { response: { status: number; }; }) => {
    if (error.response && error.response.status === 403) {
        return Promise.reject(new Error("Vous n'êtes pas autorisé"));
    }
    return Promise.reject(error);
}

const handle409Error = (error: { response: { status: number; }; }) => {
    if (error.response && error.response.status === 409) {
        return Promise.reject(new Error(" existe déjà"));
    }
    return Promise.reject(error);
}

const handle500Error = (error: { response: { status: number; }; }) => {
    if (error.response && error.response.status === 500) {
        return Promise.reject(new Error("Une erreur est survenue sur le serveur"));
    }
    return Promise.reject(error);
}

export { instance, handle404Error };

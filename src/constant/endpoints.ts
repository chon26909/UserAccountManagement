const baseUrl = import.meta.env.VITE_BASE_URL;

const ENDPOINTS = {
    //auth
    AUTH_LOGIN: `${baseUrl}/auth/login`,

    // users
    USER_LIST: `${baseUrl}/users/search`,
    USER_POST_LIST: `${baseUrl}/users/:userId/posts`,
    CREATE_USER: `${baseUrl}/users/add`,
    UPDATE_USER: `${baseUrl}/users/:userId`,
    DELETE_USER: `${baseUrl}/users/:userId`
};

export default ENDPOINTS;

const baseUrl = import.meta.env.VITE_BASE_URL;

const ENDPOINTS = {
  //auth
  AUTH_LOGIN: `${baseUrl}/auth/login`,

  // users
  USER_LIST: `${baseUrl}/users`,
};

export default ENDPOINTS;

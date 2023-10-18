const baseUrl = import.meta.env.VITE_BASE_URL;

const ENDPOINTS = {
  //auth
  AUTH_LOGIN: `${baseUrl}/auth/login`,

  // users
  USER_LIST: `${baseUrl}/users`,
  USER_POST_LIST: `${baseUrl}/users/:userId/posts`,
};

export default ENDPOINTS;

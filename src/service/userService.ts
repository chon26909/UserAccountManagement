import axios from "axios";
import { IUserListResponse } from "../types/user";
import ENDPOINTS from "../constant/endpoints";

export const getAllUser = () => {
  return axios.get<IUserListResponse>(ENDPOINTS.USER_LIST);
};

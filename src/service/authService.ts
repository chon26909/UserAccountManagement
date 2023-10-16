import axios from "axios";
import ENDPOINTS from "../constant/endpoints";
import { ILoginRequest, ILoginResponse } from "../types/auth";

export const login = async (data: ILoginRequest) => {
  try {
    const res = await axios.post<ILoginResponse>(ENDPOINTS.AUTH_LOGIN, data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

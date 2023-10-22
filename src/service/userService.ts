import axios from 'axios';
import ENDPOINTS from '../constant/endpoints';
import { IUser } from '../types/user';
import { IPagination } from '../types/pagination';
import { IPost } from '../types/post';

export type IUserListRequest = {
    limit: number;
    skip: number;
    q?: string;
};

export interface IUserListResponse extends IPagination {
    users: IUser[];
}

export interface IUserPostListResponse extends IPagination {
    posts: IPost[];
}

export interface ICreateUesrRequest {
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
}

export const getAllUser = (data: IUserListRequest) => {
    return axios.get<IUserListResponse>(ENDPOINTS.USER_LIST, { params: data });
};

export const getUserPostList = (userId: string) => {
    const url = ENDPOINTS.USER_POST_LIST.replace(':userId', userId);
    return axios.get<IUserPostListResponse>(url);
};

export const createUser = (data: ICreateUesrRequest) => {
    return axios.post(ENDPOINTS.CREATE_USER, data);
};

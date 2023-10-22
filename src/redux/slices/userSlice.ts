import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from '../../types/user';
import * as userService from '../../service/userService';

interface IUserStore {
    loading: boolean;
    data: IUser[];
    total: number;
}

export const getAllUser = createAsyncThunk('users/getAllUser', async ({ q, limit, skip }: userService.IUserListRequest, { rejectWithValue }) => {
    // console.log('createAsyncThunk :', limit, skip);

    try {
        const { data } = await userService.getAllUser({
            limit,
            skip,
            q: q || ''
        });
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const getUserMore = createAsyncThunk('users/getUserMore', async ({ q, limit, skip }: userService.IUserListRequest, { rejectWithValue }) => {
    try {
        const { data } = await userService.getAllUser({
            limit,
            skip,
            q: q || ''
        });
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const createUser = createAsyncThunk('users/createUser', async (body: userService.ICreateUesrRequest, { rejectWithValue }) => {
    try {
        const { data } = await userService.createUser(body);
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

const initialState: IUserStore = {
    loading: false,
    data: [],
    total: 0
};

const productSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getAllUser.pending, (state) => {
                state.loading = true;
                state.data = [];
                state.total = 0;
            })
            .addCase(getAllUser.fulfilled, (state, action) => {
                console.log('fulfilled', action);
                state.loading = false;
                state.data = action.payload.users;
                state.total = action.payload.total;
            })
            .addCase(getAllUser.rejected, (state, action) => {
                console.log('rejected', action);
                state.loading = false;
                state.data = [];
                state.total = 0;
            });
        builder.addCase(getUserMore.fulfilled, (state, action) => {
            state.data = [...state.data, ...action.payload.users];
        });
        builder
            .addCase(createUser.fulfilled, (state, action) => {
                console.log('payload', action.payload);

                state.data = [action.payload, ...state.data];
            })
            .addCase(createUser.rejected, (state, action) => {
                console.log('rejected', action, state);
            });
    }
});

export default productSlice.reducer;

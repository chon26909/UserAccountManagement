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

export const updateUser = createAsyncThunk('users/updateUser', async (data: userService.IUpdateUserRequest, { rejectWithValue }) => {
    try {
        //fack =update user
        //await userService.updateUser(data.id, data);
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (id: number, { rejectWithValue }) => {
    try {
        //fack delete user
        await userService.deleteUser(id);
        return id;
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
        builder
            .addCase(getUserMore.fulfilled, (state, action) => {
                state.data = [...state.data, ...action.payload.users];
            })
            .addCase(getUserMore.rejected, (_, action) => {
                console.log('getUserMore rejected', action);
            });
        builder
            .addCase(createUser.fulfilled, (state, action) => {
                // console.log('payload', action.payload);

                const newUser = {
                    ...action.payload,
                    id: state.data.length + 1
                };

                state.data = [newUser, ...state.data];
            })
            .addCase(createUser.rejected, (state, action) => {
                console.log('rejected', action, state);
            });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.data = state.data.map((row) => {
                if (row.id === action.payload.id) {
                    return {
                        ...row, // copy old data
                        ...action.payload // new data updated
                    };
                }
                return row;
            });
        });
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.data = state.data.filter((row) => row.id !== action.payload);
        });
    }
});

export default productSlice.reducer;

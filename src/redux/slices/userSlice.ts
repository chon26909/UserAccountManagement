import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../types/user";
import * as userService from "../../service/userService";

interface IUserStore {
  loading: boolean;
  data: IUser[];
  total: number;
}

export const getAllUser = createAsyncThunk(
  "users/getAllUser",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await userService.getAllUser();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState: IUserStore = {
  loading: false,
  data: [],
  total: 0,
};

const productSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllUser.pending, (state) => {
      state.loading = true;
      state.data = [];
      state.total = 0;
    });
    builder.addCase(getAllUser.fulfilled, (state, action) => {
      console.log("fulfilled", action);
      state.loading = false;
      state.data = action.payload.users;
      state.total = action.payload.total;
    });
    builder.addCase(getAllUser.rejected, (state, action) => {
      console.log("rejected", action);
      state.loading = false;
      state.data = [];
      state.total = 0;
    });
  },
});

export default productSlice.reducer;

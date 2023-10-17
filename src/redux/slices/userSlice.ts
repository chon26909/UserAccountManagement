import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ENDPOINTS from "../../constant/endpoints";
import { IUser, IUserListResponse } from "../../types/user";
import axios from "axios";

interface IUserStore {
  loading: boolean;
  data: IUser[];
  total: number;
}

export const getAllUser = createAsyncThunk(
  "users/getAllUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<IUserListResponse>(ENDPOINTS.USER_LIST);
      return response.data;
    } catch (error) {
      console.log("Failed to get user list", error);
      rejectWithValue(error);
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
    });
    builder.addCase(getAllUser.fulfilled, (state, action) => {
      console.log("fulfilled", action);
      state.loading = false;
      state.data = action.payload?.users || [];
      state.total = action.payload?.total || 0;
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

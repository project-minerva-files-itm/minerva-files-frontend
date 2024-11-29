import { createSlice } from "@reduxjs/toolkit";
import { Request } from "../models/request";
import { ApiResponse } from "@response/index";

const initialState: ApiResponse<Request> = {
  wasSuccess: true,
  message: "",
  data: [],
  pagination: null,
};

export const RequestSlice = createSlice({
  name: "Request",
  initialState: initialState,
  reducers: {
    fetchRequestSuccess: (state, action) => {
      state.wasSuccess = action.payload.wasSuccess;
      state.message = action.payload.message;
      state.data = action.payload.result;
      state.pagination = action.payload.pagination;
    },
  },
});

export const { fetchRequestSuccess } = RequestSlice.actions;

export default RequestSlice.reducer;

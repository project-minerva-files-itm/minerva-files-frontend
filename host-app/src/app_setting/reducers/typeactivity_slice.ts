import { createSlice } from "@reduxjs/toolkit";
import { ActivityType } from "../models/activitytype";
import { ApiResponse } from "@response/index";

const initialState: ApiResponse<ActivityType> = {
  wasSuccess: true,
  message: "",
  data: [],
  pagination: null,
};

export const TypeSlice = createSlice({
  name: "ActvityType",
  initialState: initialState,
  reducers: {
    fetchSuccess: (state, action) => {
      state.wasSuccess = action.payload.wasSuccess;
      state.message = action.payload.message;
      state.data = action.payload.result;
      state.pagination = action.payload.pagination;
    },
  },
});

export const { fetchSuccess } = TypeSlice.actions;

export default TypeSlice.reducer;

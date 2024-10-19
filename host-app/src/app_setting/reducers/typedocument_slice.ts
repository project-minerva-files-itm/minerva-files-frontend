import { createSlice } from "@reduxjs/toolkit";
import { DocumentType } from "../models/documentype";
import { ApiResponse } from "@response/index";

const initialState: ApiResponse<DocumentType> = {
  wasSuccess: true,
  message: "",
  data: [],
  pagination: null,
};

export const TypeSlice = createSlice({
  name: "DocumentType",
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

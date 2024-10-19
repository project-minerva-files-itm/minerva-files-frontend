import { createSlice } from "@reduxjs/toolkit";
import { Department } from "../models/department";
import { ApiResponse } from "@response/index";

const initialState: ApiResponse<Department> = {
  wasSuccess: true,
  message: "",
  data: [],
  pagination: null,
};

export const DepartmentSlice = createSlice({
  name: "Department",
  initialState: initialState,
  reducers: {
    fetchDepartmentSuccess: (state, action) => {
      state.wasSuccess = action.payload.wasSuccess;
      state.message = action.payload.message;
      state.data = action.payload.result;
      state.pagination = action.payload.pagination;
    },
  },
});

export const { fetchDepartmentSuccess } = DepartmentSlice.actions;

export default DepartmentSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { AuthType } from "../models/auth";


const initialState: AuthType = {
  wasSuccess: true,
  message: "",
  token: "",
  expiration: ""
};

export const AuthSlice = createSlice({
  name: "Auth",
  initialState: initialState,
  reducers: {
    fetchSuccess: (state, action) => {
      state.token = action.payload.token;
      state.expiration = action.payload.expiration;
    },
  },
});

export const { fetchSuccess } = AuthSlice.actions;

export default AuthSlice.reducer;

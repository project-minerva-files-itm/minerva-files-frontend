import { createSlice } from '@reduxjs/toolkit';
import { ActivityState } from '../models/activitystate';
import { ApiResponse } from '@response/index';


const initialState: ApiResponse<ActivityState> = {
    wasSuccess: true,
    message: "",
    data: [],
    pagination: null
}


export const activitySlice = createSlice({
    name: 'ActivityState',
    initialState: initialState,
    reducers: {
        fetchSuccess: (state, action) => {
            state.wasSuccess = action.payload.wasSuccess;
            state.message = action.payload.message;
            state.data = action.payload.result;
            state.pagination = action.payload.pagination;
        }
    },
});

export const { fetchSuccess } = activitySlice.actions;

export default activitySlice.reducer;
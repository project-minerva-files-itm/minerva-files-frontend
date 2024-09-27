import { createSlice } from '@reduxjs/toolkit';
import { Company } from '../models/company';
import { ApiResponse } from '@response/index';


const initialState: ApiResponse<Company> = {
    wasSuccess: true,
    message: "",
    data: [],
    pagination: null
}


export const CompanySlice = createSlice({
    name: 'Company',
    initialState: initialState,
    reducers: {
        fetchCompanySuccess: (state, action) => {
            state.wasSuccess = action.payload.wasSuccess;
            state.message = action.payload.message;
            state.data = action.payload.result;
            state.pagination = action.payload.pagination;
        }
    },
});

export const { fetchCompanySuccess } = CompanySlice.actions;

export default CompanySlice.reducer;
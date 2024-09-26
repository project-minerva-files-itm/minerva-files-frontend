import { createSlice } from '@reduxjs/toolkit';

export const CompanySlice = createSlice({
    name: 'Company',
    initialState: {
        data: [],
    },
    reducers: {
        fetchCompanySuccess: (state, action) => {
            state.data = action.payload;
        }
    },
});

export const { fetchCompanySuccess } = CompanySlice.actions;

export default CompanySlice.reducer;
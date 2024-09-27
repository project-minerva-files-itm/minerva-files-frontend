import { createSlice } from '@reduxjs/toolkit';

export const GlobalSlice = createSlice({
    name: 'Global',
    initialState: {
        data: [],
    },
    reducers: {
        fetchStatusSuccess: (state, action) => {
            state.data = action.payload;
        }
    },
});

export const { fetchStatusSuccess } = GlobalSlice.actions;

export default GlobalSlice.reducer;
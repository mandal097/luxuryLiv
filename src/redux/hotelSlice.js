import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "hotel",
    initialState: {
        currentData: null,
    },
    reducers: {
        hoteldata: (state, action) => {
            state.currentFeedback = action.payload
        },
    },
});

export const { hoteldata } = userSlice.actions
export default userSlice.reducer;
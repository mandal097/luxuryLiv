import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "feedback",
    initialState: {
        currentFeedback: null,
    },
    reducers: {
        feedbackData: (state, action) => {
            state.currentFeedback = action.payload
        },
    },
});

export const { feedbackData } = userSlice.actions
export default userSlice.reducer;
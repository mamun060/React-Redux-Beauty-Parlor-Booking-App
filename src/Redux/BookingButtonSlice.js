import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
    show: false
};

const bookingButtonSlice = createSlice({
    name: "bookingButton",
    initialState,
    reducers: {
        toggle: (state, {payload}) => {
            state.show = payload;
        }
    },
});

export const { toggle } = bookingButtonSlice.actions;
export const getStatus = (state) => state.bookingButton;

export default bookingButtonSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import bookingButtonReducer from "./BookingButtonSlice";

const store = configureStore({
    reducer:{
        bookingButton: bookingButtonReducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        // mainMiddleware,
    ],
});

export default store;
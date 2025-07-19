import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from 'Redux/Slices/AuthSlice'

export default configureStore({
    reducer: {
        auth: authSliceReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({serializableCheck: false})
})
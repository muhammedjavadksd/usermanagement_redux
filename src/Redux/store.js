import { configureStore } from "@reduxjs/toolkit";
import userSlicer from "./slice/user-slicer";


const store = configureStore({
    reducer: {
        userAuth: userSlicer
    },
})

export default store
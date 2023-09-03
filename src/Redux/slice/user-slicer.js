import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API_CALL from "../../api";


export let userLoginAction = createAsyncThunk("user/loginuser", async ({ username, password }) => {
    try {
        const user = await API_CALL.userLogin(username, password)
        alert("Name", username)
        return user;
    } catch (e) { 
        alert(e)
        return null;
    }
})


let userSlicer = createSlice({
    name: "user",
    initialState: {
        isLogged: false,
        user: {}
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(userLoginAction.fulfilled, (state, action) => {
            alert(action.payload)
            if (action.payload?.status) {
                state.isLogged = true;
                state.user = action.payload.user
            } else {
                state.isLogged = false;
            }
        })
    }
})


export default userSlicer.reducer
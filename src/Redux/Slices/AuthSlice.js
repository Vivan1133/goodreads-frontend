import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "Configs/axiosInstance";

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    username: localStorage.getItem('username') || '',
    token: localStorage.getItem('token') || '',  
};

export const signup = createAsyncThunk("auth/signup", async (data) => {
    try {
        const response = axiosInstance.post("signup", data);
        toast.promise(response, {
            loading: "Submitting form",
            success: "Successfully signed up!",
            error: "Something went wrong"
        })
        const res = await response;
        return res.data.data;
    } catch (error) {
        if (error?.response?.data?.err) {
            toast.error(error?.response?.data?.err);
        } else {
            toast.error("Cannot signin, something went wrong");
        }
    }
})

export const signin = createAsyncThunk("auth/signin", async (data) => {
    try {
        const response = axiosInstance.post("signin", data);
        toast.promise(response, {
            loading: "Submitting form",
            success: "Successfully signed In!",
            error: "Something went wrong"
        });
        const res = await response;
        return res.data.data; 
    } catch (error) {
        if(error?.response?.data?.err) {
            toast.error(error?.response?.data?.err)
        } else {
            toast.error("Cannot signin, something went wrong")
        }
        throw error;
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.isLoggedIn = false;
            state.token = "";
            state.username = "";
            localStorage.clear();
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signin.fulfilled, (state, action) => {
        if(action?.payload) {
            state.isLoggedIn = true;
            state.username = action.payload.username;
            state.token = action.payload.token;
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("username", action.payload.username);
            localStorage.setItem("token", action.payload.token);
        }
});

    }
});

export const {logout} = authSlice.actions;

export default authSlice.reducer;
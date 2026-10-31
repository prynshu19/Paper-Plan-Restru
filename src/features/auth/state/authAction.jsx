import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/axiosInstance";
import { toast } from "react-toastify";

export const registerAction = createAsyncThunk(
  "/register/auth",
  async (data, thunkApi) => {
    try {
      const response = await api.post("users/add", data);
      toast.success("Registered Successfully");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const loginAction = createAsyncThunk("/login/auth",async(data,thunkApi)=>{
    const response = await api.post("user/login")
})

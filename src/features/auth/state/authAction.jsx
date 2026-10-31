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
      toast.error("Registration Failed");
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const loginAction = createAsyncThunk(
  "/login/auth",
  async (data, thunkApi) => {
    try {
      const response = await api.post("user/login", data);
      toast.success("Login SuccessFull");
      localStorage.setItem("accessToken", response.data.accessToken);
      return response.data;
    } catch (error) {
      toast.error("Login Failed");
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const hydrateUser = createAsyncThunk("/auth/me", async (_, thunkApi) => {
  try {
    const token = localStorage.getItem("accessToken");
    const response = await api.get("auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

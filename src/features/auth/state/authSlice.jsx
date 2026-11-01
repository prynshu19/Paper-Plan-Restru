import { createSlice } from "@reduxjs/toolkit";
import { hydrateUser, loginAction, registerAction } from "./authAction";
import { hydrateAction } from "../../../../../4-LayerArchitecture/src/features/auth/state/authAction";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
  },
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      localStorage.setItem("accessToken", null);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerAction.fulfilled, (state, action) => {
        ((state.user = action.payload), (state.isLoading = false));
      })
      .addCase(registerAction.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(loginAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAction.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(hydrateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(hydrateUser.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(hydrateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;

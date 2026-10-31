import { createSlice } from "@reduxjs/toolkit";
import { loginAction, registerAction } from "./authAction";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
  },
  reducers: {
    addUser: (state, action) => {
      ((state.user = action.payload), (state.isLoading = false));
    },
    removeUser: (state) => {
      ((state.user = null), (state.isLoading = false));
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
      })
      .addCase(loginAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAction.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      });
  },
});

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;

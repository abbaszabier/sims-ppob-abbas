import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define state type
interface AuthState {
  user: { email: string; name: string } | null;
  token: string | null;
}

// Define initial state
const initialState: AuthState = {
  user: null,
  token: null,
};

// Create slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{
        user: { email: string; name: string };
        token: string;
      }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  role: "",
  isLoading: true,
  isError: false,
  error: "",
  dolar: "",
  corexlab: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
});

export default authSlice.reducer;

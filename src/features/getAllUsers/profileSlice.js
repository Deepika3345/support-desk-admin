import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import profileServices from "./profileService";
// const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const initialState = {
  profiles: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

const profileSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allProfiles.pending, (state, action) => {
        (state.isLoading = true),
          (state.isError = false),
          (state.isSuccess = false),
          (state.message = "");
      })
      .addCase(allProfiles.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isError = false),
          (state.isSuccess = true),
          (state.profiles = action.payload);
    
        state.message = "";
      })
      .addCase(allProfiles.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.isSuccess = false),
          (state.message = action.payload);
      });
  },
});
export default profileSlice.reducer;

export const allProfiles = createAsyncThunk(
  "FETCH/PROFILE",
  async (_, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().auth.person.token;
      return await profileServices.getAllProfiles(token);
    } catch (error) {
      const message = response.data.error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

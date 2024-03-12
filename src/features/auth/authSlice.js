import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const userExist = JSON.parse(localStorage.getItem("person"));

const initialState = {
  person: userExist ? userExist : null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isSuccess = true),
          (state.person = action.payload);
      })
      .addCase(registerUser.rejected, (state, action) => {
        (state.isError = true),
          (state.isSuccess = false),
          (state.message = action.payload);
      })
      // Logout
      .addCase(logOutUser.fulfilled, (state, action) => {
        (state.isError = false), (state.person = null);
      })

      // LogIn person
      .addCase(logInUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isSuccess = true),
          (state.isError = false),
          (state.message = "");
        state.person = action.payload;
      })
      .addCase(logInUser.rejected, (state, action) => {
        (state.isError = true),
          (state.isSuccess = false),
          (state.message = action.payload);
      });
  },
});
export default authSlice.reducer;

// Register
export const registerUser = createAsyncThunk(
  "REGISTER/PERSON",
  async (formData, thunkAPI) => {
    try {
      return await authService.register(formData);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Logout

export const logOutUser = createAsyncThunk("LOGOUT/PERSON", async () => {
  localStorage.removeItem("person");
});

// LogInUser

export const logInUser = createAsyncThunk(
  "LOGIN/PERSON",
  async (formData, thunkAPI) => {
    try {
      return await authService.login(formData);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

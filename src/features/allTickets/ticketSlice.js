// import passServices =require ("./ticketService");

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import passServices from "./ticketService";

const initialState = {
  pass: [],
  singlePass: null,
  edit: [],
  notes:[],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

const ticketSlice = createSlice({
  name: "pass",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state, action) => {
        (state.isLoading = true),
          (state.isError = false),
          (state.isSuccess = false),
          (state.message = "");
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isError = false),
          (state.isSuccess = true),
          (state.pass = action.payload);
        state.message = "";
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.isSuccess = false),
          (state.message = action.payload);
      })
      // Single ticket
      .addCase(FetchSingleTicket.pending, (state, action) => {
        state.singlePass = null;
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(FetchSingleTicket.fulfilled, (state, action) => {
        state.singlePass = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "";
      })
      .addCase(FetchSingleTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      // Update ticket
      .addCase(updateTicket.pending, (state, action) => {
        state.edit = null;
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(updateTicket.fulfilled, (state, action) => {
        state.edit = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "";
      })
      .addCase(updateTicket.rejected, (state, action) => {
        state.edit = null;
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })

      // create ticket
      .addCase(makeNote.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(makeNote.fulfilled, (state, action) => {
        state.notes =  [...state.notes,action.payload];
        console.log("note",action.payload)
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "";
      })
      .addCase(makeNote.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      // All notes 
      .addCase(fetchNotes.pending , (state)=> {
        state.isLoading= true,
        state.isError= false,
        state.isSuccess= false,
        state.message= ""
    })
    .addCase(fetchNotes.fulfilled,(state,action)=>{
        state.notes = action.payload;
        state.isLoading= false,
        state.isError= false,
        state.isSuccess= true,
        state.message= ""
    })
    .addCase(fetchNotes.rejected,(state,action)=>{
        state.isLoading= false,
        state.isError= true,
        state.isSuccess= false,
        state.message= action.payload
    })




  },
});
export default ticketSlice.reducer;

export const fetchTickets = createAsyncThunk(
  "GET/TICKETS",
  async (_, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().auth.person.token;
      return await passServices.allTickets(token);
    } catch (error) {
      const message = response.data.error.message;
      return thunkAPI.rejectWithValue(message).console.log(error);
    }
  }
);
// Single Ticket
export const FetchSingleTicket = createAsyncThunk(
  "TICKET/SINGLE",
  async (id, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().auth.person.token;
      return await passServices.getOnlyTicket(id, token);
    } catch (error) {
      const message = error.message.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// update Ticket
export const updateTicket = createAsyncThunk(
  "PASS/UPDATE",
  async ({ id, newData }, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().auth.person.token;
      return await passServices.editTicket(id, newData, token);
    } catch (error) {
      const message = error.message.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// create Note
export const makeNote = createAsyncThunk(
  "NOT/CREATE",
  async (newData, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().auth.person.token;
      return await passServices.createNote(newData, token);
    } catch (error) {
      const message = error.message.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// create Note
export const fetchNotes = createAsyncThunk(
  "NOTE/FETCH",
  async (id, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().auth.person.token;
      return await passServices.getNotes(id, token);
    } catch (error) {
      const message = error.message.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
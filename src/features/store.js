import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice'
import profileReducer from './getAllUsers/profileSlice'
import ticketReducer from './allTickets/ticketSlice'


const store = configureStore({
    reducer:{
        auth :authReducer,
        profile:profileReducer,
        pass:ticketReducer
 
    }
})
export default store
import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../slices/authSlice';
const store=configureStore({
    reducer:{
     authReducer
    }
})
console.log(store,"store");

export default store;
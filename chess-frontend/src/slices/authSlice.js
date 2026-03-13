import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import api from '../api/client';
const signup=createAsyncThunk('chess/signup',async function(name,email,password,thunkAPI){
   try{
      const res=await api.post('/chess/signup',{name,email,password});
      return res.data;
   }catch(err){
    //If sigup api throws any error then thunkAPI.rejectWithValue()
    //automatically sets the action.payload to err.message
    return thunkAPI.rejectWithValue(err.message || "signup failed");
   }
});

const login=createAsyncThunk("chess/login",async (email,password,thunkAPI)=>{
    try{
     const res=await api.post('/chess/login',{email,password});
     return res.data
    }catch(err){
        // rejectWithValue sends a custom error payload to action.payload
        // automatically sets the action.payload to err.message
        return thunkAPI.rejectWithValue(err.message || "login failed");
    }
   
})
const initialState={
    user:null,
    status:"idle",
    error:null
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
    function pending(state){
        state.user=null;
        state.status="pending";
        state.error=null;
    }
    function fulfilled(state){
        //we'll not get user after logging
        //we'll get user after hitting fetchMe endpoint.
        //state.user=action.payload;
        state.status="successful";
        state.error=null;
    }
    
    function rejected(state,action){
        state.status="error",
        state.error=action.payload;
        state.user=null
    }
    builder
    .addCase(signup.pending,pending)
    .addCase(signup.fulfilled,fulfilled)
    .addCase(signup.rejected,rejected)
    .addCase(login.pending,pending)
    .addCase(login.fulfilled,fulfilled)
    .addCase(login.rejected,rejected);
    }
});

export default authSlice;


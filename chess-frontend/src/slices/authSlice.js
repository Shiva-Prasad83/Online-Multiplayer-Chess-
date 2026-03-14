import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import api from '../api/client';
export const signup=createAsyncThunk('auth/signup',async function({name,email,password},thunkAPI){
  console.log(name,email,password,"Inside signup slice");
   try{
      const res=await api.post('/auth/signup',{name,email,password});
      return res.data;
   }catch(err){
    //If sigup api throws any error then thunkAPI.rejectWithValue()
    //automatically sets the action.payload to err.message
    return thunkAPI.rejectWithValue(err.response.data || "signup failed");
   }
});

export const login=createAsyncThunk("auth/login",async ({email,password},thunkAPI)=>{
    try{
     const res=await api.post('/auth/login',{email,password});
     return res.data
    }catch(err){
        // rejectWithValue sends a custom error payload to action.payload
        // automatically sets the action.payload to err.message
        return thunkAPI.rejectWithValue(err.response.data || "login failed");
    }
   
})

export const logout=createAsyncThunk('auth/logout',async (_,thunkAPI)=>{
  try{
     const res=await api.post('/auth/logout');
     return res.data;
  }catch(err){
    return thunkAPI.rejectWithValue(err.response.data || "logout failed");
  }
})

export const fetchMe=createAsyncThunk('auth/me',async (_,thunkAPI)=>{
 try{
     const res=await api.get('/auth/me');
     return res.data;
 }catch(err){
  return thunkAPI.rejectWithValue(err.response.data||"fetchMe Failed")
 }
})

export const refresh=createAsyncThunk('auth/refresh',async (_,thunkAPI)=>{
  try{ 
    const res=await api.post('/auth/refresh');
    return res.data;
  }catch(err){
    return thunkAPI.rejectWithValue(err.response.data||"refresh Failed");
  }
})

const initialState={
    user:null,
    status:"idle",
    error:null,
    isAuthenticated:false
}


const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
    function pending(state){
        //state.user=null;
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
    .addCase(login.rejected,rejected)
    .addCase(logout.pending,pending)
    .addCase(logout.fulfilled,(state,action)=>{
        state.user=null;
        state.status="success",
        state.error=null;
    })
    .addCase(logout.rejected,rejected)
    .addCase(fetchMe.pending,pending)
    .addCase(fetchMe.fulfilled,(state,action)=>{
      state.user=action.payload;
      state.status="success";
      state.error=null;
      state.isAuthenticated=true;
    })
    .addCase(fetchMe.rejected,(state,action)=>{
      state.status="error",
        state.error=action.payload;
        state.user=null
        state.isAuthenticated=true
    });
    }
});
console.log(authSlice.reducer,"auth slice");
export default authSlice.reducer;


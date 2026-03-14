import axios from 'axios';

const api=axios.create({
    baseURL:'http://localhost:5000/api/v1',
    withCredentials:true
})

/*
Your Code  →  [Request Interceptor]  →  Server
Your Code  ←  [Response Interceptor] ←  Server
*/

//This specifically intercepts every response coming back from the server.
/*
It takes two callback functions:
CallbackWhen it runs
1st (success)Status code is 2xx
2nd (error)Status code is 4xx, 5xx, or network error
*/

//The reason to create this interceptor is
// 1. After 15 mins accessToken will be expired
// 2. Then user is logged out automatically and redirected to the login page.

// To avoid this we have to hit the refresh endpoint with refreshToken.
// In that controller we are creating new accessToken

/*
Let's say user is loggedin
In login controller accessToken 15min is created and refreshToken with path("/refresh") 7days is created.
We are hitting fetchMe endpoint just after login endpoint.
Now request goes through verify Auth checks the accessToken if it is present it will allow to get user
from fetchMe() endpoint.

If accessToken is not present that means accessToken is expired after 15 mins after logging in,
then we try hit fetchMe endpoint then from verify Auth it will send 401 unauthorized then
we'll redirected to the login page.
We don't want that whenever any end point responded with status code 401 then we'll hit 
refresh end point that will create new access token if the refresh token is present.
*/
api.interceptors.response.use((response)=>{
  return response;
},
async (error)=>{
// console.log(error.response);
// console.log(error.config);
// custom._retry console.log(error.config._retry); 
const originalRequest=error.config;

//If the response is coming from the refresh end point then there is no need to hit the refresh end point
//again.
const isRefreshCall=originalRequest.url.includes('/auth/refresh');
if(error.response.status===401 && !originalRequest._retry && !isRefreshCall){
     originalRequest._retry=true;
     try{
          await api.post('/auth/refresh');
          return api(originalRequest);
     }catch(refreshErr){
       return Promise.reject(error);
     }
}

    return Promise.reject(error);
}
)
export default api;
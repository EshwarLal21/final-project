import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import { AuthApi } from "../features/api/authApi";


const rootReducer = combineReducers({
    [AuthApi.reducerPath]:AuthApi.reducer,
    auth:authReducer

});

export default rootReducer;
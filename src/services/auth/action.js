import axios from "axios";

import { 
    AUTH_FALTURE,
    AUTH_LOGIN_COMPLETED,
    AUTH_LOGIN_REQUEST,
    REGISTER_COMPLETED
} from "./actionType";

export const requestLogin = ()=>{
    return {
        type: AUTH_LOGIN_REQUEST
    }
}
export const loginErr =(error)=>{
    return {
        type: AUTH_FALTURE,
        error: error
    }
}
export const loginSuccess = (user)=>{
    return {
        type: AUTH_LOGIN_COMPLETED,
        user: user
    }
}
export const loginUser= (email,password)=>{
    return async dispatch=>{
        try{
            dispatch(requestLogin())
            const res = await axios.post("/login",{email: email,password:password})
            if(res.data.error)
                dispatch(loginErr(res.data.error))
            else{
                dispatch(loginSuccess(res.data.user))
            }
        }catch(err){

        }
    }
}
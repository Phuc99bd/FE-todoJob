import axios from "axios";

import { 
    AUTH_FALTURE,
    AUTH_LOGIN_COMPLETED,
    AUTH_LOGIN_REQUEST,
    REGISTER_COMPLETED
} from "./actionType";

const request= ()=>{
    return {
        type: AUTH_LOGIN_REQUEST
    }
}
const Err =(error)=>{
    return {
        type: AUTH_FALTURE,
        error: error
    }
}
const loginSuccess = (token)=>{
    return {
        type: AUTH_LOGIN_COMPLETED,
        token: token
    }
}

const registerSuccess = ()=>{
    return {
        type: REGISTER_COMPLETED,
        success: 'Đăng kí thành công.'
    }
}

export const loginUser= (email,password)=>{
    return async dispatch=>{
        try{
            dispatch(request())
            const res = await axios.post("/login",{email: email,password:password})
            if(res.data.error)
                dispatch(Err(res.data.error))
            else{
                dispatch(loginSuccess(res.data.token))
            }
        }catch(err){
            if (err.response){
                dispatch(Err(err.response.data))
            } else {
                dispatch(Err(err))
            }
        }
    }
}

export const register = (fullname,email,password)=>{
    return async dispatch=>{
        try{
            dispatch(request())
            let res= await axios.post("/register",{name: fullname, email,password})
            if(res.data.error){
                dispatch(Err(res.data.error))
            }else{
                dispatch(registerSuccess())
            }

        }catch(err){
            if (err.response){
                dispatch(Err(err.response.data))
            } else {
                dispatch(Err(err))
            }
        }
    }
}
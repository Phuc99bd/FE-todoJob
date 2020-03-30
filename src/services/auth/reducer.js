import {
    AUTH_LOGIN_REQUEST,
    AUTH_FALTURE,
    AUTH_LOGIN_COMPLETED,
    REGISTER_COMPLETED
} from "./actionType";


const initialState = {
    loading: false,
    error: null,
    success: null,
}

const authReducer = (state = initialState , action) => {
    switch (action.type) {
        case AUTH_LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case AUTH_LOGIN_COMPLETED:
            return {...state, token: action.token,loading: false}
        case AUTH_FALTURE:
            return {...state,loading: false, error: action.error,success:null}
        case REGISTER_COMPLETED:
            return {...state,success: action.success,error: null}
        default: 
            return state;
    }
}
export default authReducer
import {
    AUTH_LOGIN_REQUEST,
    AUTH_FALTURE,
    AUTH_LOGIN_COMPLETED,
    AUTH_LOGOUT,
    REGISTER_COMPLETED
} from "./actionType";
import {
    LOGIN,
    REGISTER
} from "./status";

const initialState = {
    loading: false,
    error: null,
    success: null,
    status: LOGIN
}

const authReducer = (state = initialState , action) => {
    switch (action.type) {
        case AUTH_LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case AUTH_LOGIN_COMPLETED:
            return {...state, user: action.user,loading: false}
        case AUTH_FALTURE:
            return {...state,loading: false, error: action.error}
        case AUTH_LOGOUT:
            return {...state, user: ''}
        case REGISTER_COMPLETED:
            return {...state,success: action.success}
        default: 
            return state;
    }
}
export default authReducer
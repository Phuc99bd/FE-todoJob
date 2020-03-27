import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import jobReducer from "./job/reducer"

const allReducers = combineReducers({
    auth: authReducer,
    job: jobReducer
})
export default allReducers
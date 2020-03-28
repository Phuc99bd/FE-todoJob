import thunk from "redux-thunk";
import {applyMiddleware,createStore,compose} from "redux";
import allReducers from "./reducers";


const store = createStore(
    allReducers,
    compose(applyMiddleware(thunk))
)


export default store
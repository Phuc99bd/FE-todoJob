import thunk from "react-thunk";
import {applyMiddleware,createStore,compose} from "redux";
import allReducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

// const allStoreEnhancers = composeWithDevTools(
//     applyMiddleware(thunk)
// )

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    allReducers,
    composeEnhancers(applyMiddleware(thunk))
)


export default store
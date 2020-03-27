import {
    ADD_JOB,
    DELETE_JOB,
    SEARCH_JOB,
    CHANGE_STATUS,
    SORT_BY_ACTIVE,
    SORT_BY_NAME,
    UPDATE_JOB,
    GET_JOB,
    PAGINATION
 } from "./actionType";

let initialState = {
    arrJob: [],
    numOfJob: 1,
    keyword: "",
    pages: 1,
    sortByName:0,
    sortByActive: 0,
    status: false
}

const jobReducer = (state = initialState, action) => {
    let actionFefeshArr = {...action};
    delete actionFefeshArr.type;
    switch (action.type) {
        case GET_JOB:
            return Object.assign(state,actionFefeshArr);
        case SEARCH_JOB:
            return Object.assign(state,actionFefeshArr);
        case ADD_JOB:
            return {...state,arrJob: [...state.arrJob,action.item]}
        case DELETE_JOB:
            return {...state,arrJob: state.arrJob.filter(i=>{
                return i._id !== action._id
            })}
        case PAGINATION:
            return Object.assign(state,actionFefeshArr)
        case CHANGE_STATUS:
            return {...state,status: !state.status}
        case UPDATE_JOB:
            state.arrJob.filter(i=>{
                if(i._id === action.item._id){
                    i = Object.assign(i,action.item) 
                }

            })
            return state;
        case SORT_BY_NAME:
            return Object.assign(state,actionFefeshArr)
        case SORT_BY_ACTIVE:
            return Object.assign(state,actionFefeshArr)
        default:
            return state;
    }
}

export default jobReducer
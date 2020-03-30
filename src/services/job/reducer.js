import {
    ADD_JOB,
    DELETE_JOB,
    SEARCH_JOB,
    CHANGE_STATUS,
    SORT_BY_ACTIVE,
    SORT_BY_NAME,
    UPDATE_JOB,
    GET_JOB,
    PAGINATION,
    GET_REQUEST,
    UPDATE_COMPLETE
 } from "./actionType";

let initialState = {
    arrJob: [],
    numOfJob: 1,
    keyword: "",
    pages: 1,
    sortByName:1,
    sortByActive: 0,
    status: false,
    loading: false,
    success: null
}

const jobReducer = (state = initialState, action) => {
    let actionFefeshArr = {...action.data};
    actionFefeshArr.loading=false;
    delete actionFefeshArr.type;
    switch (action.type) {
        case GET_JOB:              
            return {...state,...actionFefeshArr}
        case GET_REQUEST:
            return {...state,loading: true}
        case SEARCH_JOB:
            return {...state,keyword: action.keyword}
        case ADD_JOB:
            return {...state,arrJob: [action.item,...state.arrJob]}
        case DELETE_JOB:
            return {...state,arrJob: state.arrJob.filter(i=>{
                return i._id !== action._id
            })}
        case PAGINATION:
            return {...state,pages: action.pages}
        case CHANGE_STATUS:
            return {...state,status: !state.status}
        case UPDATE_JOB:
            state.arrJob.forEach(i=>{
                if(i._id === action.item._id){
                     i = action.item;
                }
            })
            return {...state};
        case SORT_BY_NAME:
            return {...state,sortByName: action.sortByName}
        case SORT_BY_ACTIVE:
            return {...state,sortByActive: action.sortByActive}
        case UPDATE_COMPLETE:
            return {...state,success: action.message}
        default:
            return state;
    }
}

export default jobReducer
import axios from "axios";
import {
    ADD_JOB,
    CHANGE_STATUS,
    DELETE_JOB,
    GET_JOB,
    PAGINATION,
    SEARCH_JOB,
    SORT_BY_ACTIVE,
    SORT_BY_NAME,
    UPDATE_JOB,
    GET_REQUEST,
    UPDATE_COMPLETE
} from "./actionType";


const getJob =(data)=>{
    return {
        type: GET_JOB,
        data
    }
}

const getRequest =()=>{
    return {
        type: GET_REQUEST
    }
}
const changeStt =()=>{
    return {
        type: CHANGE_STATUS
    }
}
export const getJOb =(props)=>{
    return async dispatch=>{
        dispatch(getRequest())
        let res = await axios.get("/job/allJob",{
            params:{
                page: props.job.pages,
                sortByActive: props.job.sortByActive,
                sortByName: props.job.sortByName,
                keyword: props.job.keyword
          }
        }); 
        if(res.data.arrJob)
            dispatch(getJob(res.data))
    }
}

export const changeStatus = ()=>{
    return async dispatch=>{
        dispatch(changeStt())
    }
}

const typeAddJob=(job)=>{
    return {
        type: ADD_JOB,
        item: {...job}
    }
}

export const addJob = (nameJob,active)=>{
    return async dispatch=>{
        let res = await axios.post("/job/add",{
            nameJob: nameJob,
            active: active
        });
        if(res.data.job)
            dispatch(typeAddJob(res.data.job))
    }
}

const typeDeleleJob=(id)=>{
    return {
        type: DELETE_JOB,
        _id: id
    }
}

export const deleteJob =(id)=>{
    return async dispatch=>{
        await axios.delete(`/job/delete/${id}`);
        dispatch(typeDeleleJob(id))
    }
}

const typeSearchJob= (keyword)=>{
    return {
        type: SEARCH_JOB,
        keyword: keyword
    }
}

export const searchJob = (keyword)=>{
    return async dispatch=>{
        dispatch(typeSearchJob(keyword))
    }
}

const typeChangeSortName = (val)=>{
    return {
        type: SORT_BY_NAME,
        sortByName: val
    }
}

export const changeSortName = (val)=>{
    return async dispatch=>{
        dispatch(typeChangeSortName(val))
    }
}

const typeChangeSTT = (val)=>{
    return {
        type: SORT_BY_ACTIVE,
        sortByActive: val
    }
}

export const changeSTT = (val)=>{
    return async dispatch =>{
        dispatch(typeChangeSTT(val))
    }
}

const typeChangePage = (val)=>{
    return {
        type: PAGINATION,
        pages: val
    }
}

export const changePage =(val)=>{
    return async dispatch =>{
        dispatch(typeChangePage(val))
    }
}

const typeUpdateJob = (item)=>{
    return {
        type: UPDATE_JOB,
        item: item
    }
}

const typeUpdateComplete =(message)=>{
    return {
        type: UPDATE_COMPLETE,
        message: message
    }
}

export const updateJob = (item)=>{
    return async dispatch =>{
        let res =await axios({
            url: `/job/update/${item.id}`,
            method:"PUT",
            data: {
                nameJob : item.nameJob,
                active: item.active
            }
        })
        dispatch(typeUpdateComplete(res.data.message))
        dispatch(typeUpdateJob(res.data.job))
    }
}
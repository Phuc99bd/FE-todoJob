
const {useSelector,shallowEqual} = require("react-redux")

const JobProps = ()=>{
    return { job: {...useSelector(state=>state.job),...useSelector(state=>state.auth.user,shallowEqual)}}
}
export default JobProps
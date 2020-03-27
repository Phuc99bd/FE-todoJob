const {useSelector} = require("react-redux")

export const job = {
    job: {...useSelector(state=>state.job),...useSelector(state=>state.auth.user)}
}
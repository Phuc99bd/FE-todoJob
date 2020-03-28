import { useSelector } from "react-redux";

 const Auth =()=> {
    return {auth: useSelector(state=> state.auth)}
}
export default Auth;
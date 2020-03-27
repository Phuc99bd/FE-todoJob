import { useSelector } from "react-redux";

export const auth = {
    auth: useSelector(state=> state.auth)
}
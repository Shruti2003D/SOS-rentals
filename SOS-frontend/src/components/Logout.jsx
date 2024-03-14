import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

const Logout=()=>{
    const dispatch = useDispatch()
    dispatch({ type: 'LogOut' })
    localStorage.clear();
    return (
        <Navigate to="/" />
    )
}

export default Logout;
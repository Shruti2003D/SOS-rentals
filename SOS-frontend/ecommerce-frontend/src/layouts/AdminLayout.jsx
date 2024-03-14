import { useSelector } from "react-redux";
import AdminNav from "../components/Adminnav";
import {Navigate, Outlet} from 'react-router-dom';
import '../css/adminlte.css';
import '../css/OverlayScrollbars.css';

const AdminLayout= ()=>{
    const state=useSelector((state)=>state)
    const isAdmin=state.loggedin.IsLoggedIn && state.loggedin.Role==="Admin";
    
    return (
        isAdmin ? (
        <>
        <AdminNav />
        <Outlet />
        </>
        ):<Navigate to="/login" />
    )
}

export default AdminLayout;
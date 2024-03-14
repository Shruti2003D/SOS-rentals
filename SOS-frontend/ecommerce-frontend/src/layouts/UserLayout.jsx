import UserNavbar from "../components/UserNavbar";
import {Outlet} from 'react-router-dom';
import '../css/style.css';
const UserLayout= ()=>{
    return (
        <>
        <UserNavbar />
        <Outlet />
        </>
    )
}

export default UserLayout;
import { Route, Routes } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import ForgotPwd from "../pages/ForgotPwd";
import MyBookings from "../pages/MyBookings";
import BkDetails from "../pages/BkDetails";
import Products from "../pages/Products";
import Details from "../pages/Details";

const UserRoutes=()=>{
    return (
        <>
            <UserLayout>
            <Routes>
                <Route element={<Register />} path="register" />          
                <Route element={<Login />} path="login" />          
                <Route element={<Contact />} path="contact" />                           
                <Route element={<ForgotPwd />} path="forgot" />  
                <Route element={<MyBookings />} path="mybookings" />                                
                <Route element={<BkDetails />} path="mybdetails/:bid" />                                
                <Route element={<Products />} path="products" exact />          
                <Route element={<Products />} path="products/:cid" />          
                <Route element={<Details />} path="details/:varid" />
            </Routes>
        </UserLayout>
        </>
    )
}

export default UserRoutes;
import { Route, Routes } from "react-router-dom"
import AdminLayout from "../layouts/AdminLayout"
import Dashboard from "../pages/Dashboard"
import Companies from "../pages/Companies"
import Variants from "../pages/Variants"
import Cars from "../pages/Cars"
import Customers from "../pages/Customers"
import Bookings from "../pages/Bookings"
import BookingDetails from "../pages/BookingDetails"
import Feedbacks from "../pages/Feedbacks"
import Reports from "../pages/Reports"
import NotFound from "../pages/404NotFound"

const AdminRoutes=()=>{
    return (
        <>        
        <Routes>
            <Route  element={<AdminLayout/>}>
            <Route element={<Dashboard />} path="dashboard" />                    
            <Route element={<Companies />} path="companies" />          
            <Route element={<Variants />} path="variants" />          
            <Route element={<Cars />} path="cars" />          
            <Route element={<Customers />} path="customers" />          
            <Route element={<Bookings />} path="bookings" />                                                              
            <Route element={<BookingDetails />} path="bdetails/:bid" />                                
            <Route element={<Feedbacks />} path="feedbacks" />                           
            <Route element={<Reports />} path="reports" />              
            </Route>
          <Route path="*" element={<NotFound />} />
          </Routes>
          </>
    )
}

export default AdminRoutes;
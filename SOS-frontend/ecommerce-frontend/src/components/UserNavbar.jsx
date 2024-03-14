import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link,NavLink } from 'react-router-dom'

export default function UserNavbar() {
  const store=useSelector((state)=>state)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logout = (e) => {
    dispatch({ type: 'LogOut' })
    sessionStorage.clear()
    navigate('/',{replace: true})
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div className="container">
	      <Link className="navbar-brand" to="/">SOS<span>Rental</span></Link>
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>

	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
	          <li className="nav-item"><NavLink to="/" replace className="nav-link">Home</NavLink></li>
	          <li className="nav-item"><NavLink to="/products" className="nav-link">Cars</NavLink></li>
            {store.loggedin && store.loggedin.Role === 'Customer' ? (
              <>
              <li className="nav-item"><Link to="/" className="nav-link">Hi! {store.loggedin.Username}</Link></li>
              <li className="nav-item"><NavLink to="/mybookings" className="nav-link">My Bookings</NavLink></li>
              <li className="nav-item"><Link onClick={logout} to="/" replace className="nav-link">Logout</Link></li>
              </>
            ):(
              <>
                <li className="nav-item"><NavLink to="/login" className="nav-link">Login</NavLink></li>	          
                <li className="nav-item"><NavLink to="/register" className="nav-link">Register</NavLink></li>
                {/* <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li> */}
                <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
              </>
            )}
	        </ul>
	      </div>
	    </div>
	  </nav>      
    </>
  )
}

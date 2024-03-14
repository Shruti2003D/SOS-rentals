import AdminNav from "./Adminnav";
import UserNavbar from "./UserNavbar";

function NavBar(info){
  console.log("navbar",info)
    const isadmin=info.loggedin && info.loggedin.Role==="Admin";
    return (
        <>
          {isadmin ? (<>
              <AdminNav loggedin={info.loggedin} />
          </>) : (
            <header>
              <UserNavbar loggedin={info.loggedin} />
            </header>
        )}
        </>
    )
}

export default NavBar;

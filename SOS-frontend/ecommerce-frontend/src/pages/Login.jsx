import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { post } from '../utils/axios-utils'
import axios from 'axios'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [user, setUser] = useState({
    userid: '',
    pwd: '',
    role: '',
  })
  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    if (user.userid === '' || user.pwd === '' || user.role === '') {
      toast.error('Please fill all required fields')
      return
    }
    let url = 'api/customers/validate'
    if (user.role === 'Admin') {
      url = 'api/admin/validate'
    }
    axios.post(url,user).then(resp=>{
        localStorage.setItem('userid', resp.data.userid)
        localStorage.setItem('uname', resp.data.uname)
        localStorage.setItem('role', user.role)
        dispatch({ type: 'IsLoggedIn' })
        toast.success('Login successfull')
        if (user.role === 'Admin') {
          navigate('/dashboard')
        } else {
          navigate('/')
        }
      })
    .catch(error=>
      {
      console.log("error ",error.response.status)
      if(error.response.status === 404)
        toast.error('Invalid username or password')
      }
    );
  }

  return (
    <>
      <section className="ftco-section ftco-about">
			<div className="container">
				<div className="row no-gutters">
					<div className="col-md-6 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: "url('images/about.jpg')"}}>
					</div>
					<div className="col-md-6 wrap-about ftco-animate">
	          <div className="heading-section heading-section-white pl-md-5">
	          	<span className="subheading">Login</span>
	            <h2 className="mb-4">Welcome Back to Carbook</h2>

	            <form autoComplete='off' className='bg-light p-5 contact-form'>
                    <div className='form-group'>
                        <input
                          type='text'
                          required
                          placeholder='User ID here'
                          name='userid'
                          value={user.userid}
                          onChange={handleInput}
                          className='form-control'
                        />
                      
                    </div>
                    <div className='form-group'>
                      
                        <input
                          required
                          type='password'
                          name='pwd'
                          placeholder='Password here'
                          value={user.pwd}
                          onChange={handleInput}
                          className='form-control'
                        />
                      
                    </div>
                    <div className='form-group'>
                      
                        <select
                          value={user.role}
                          onChange={handleInput}
                          required
                          name='role'
                          className='form-control'
                        >
                          <option value=''>Select Role</option>
                          <option>Admin</option>
                          <option>Customer</option>
                        </select>
                      </div>
                    
                    <input
                      type='submit'
                      onClick={handleSubmit}
                      value='Login'
                      className="btn btn-primary py-3 px-5"
                    />
                  </form>
	          </div>
					</div>
				</div>
			</div>
		</section>
    </>
  )
}

export default Login

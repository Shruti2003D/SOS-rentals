import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [data, setData] = useState()
  const BASE_URL = process.env.REACT_APP_BACKEND_URL
  useEffect(() => {
    axios.get(BASE_URL + 'api/admin/dashboard').then((resp) => {
      setData(resp.data)
    })
  }, [BASE_URL])
  return (
    <>
      <div className='content-wrapper p-2'>
        <div
          className='container-fluid shadow p-2'
          style={{ minHeight: '88vh',backgroundColor:"#eff3f5" }}
        >
          <h4 className='p-2 border-bottom border-success'>Admin Dashboard</h4>
          <div className='row'>
            <div className='col-sm-3'>
              <div className='card shadow m-2'>
                <div className='card-body p-3'>
                  <h5>Registered Users</h5>
                  <h5>{data?.users}</h5>
                </div>

                <div className='card-footer'>
                  <Link to='/customers'>View Details</Link>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='card shadow m-2'>
                <div className='card-body p-3'>
                  <h5>Companies</h5>
                  <h5>{data?.companies}</h5>
                </div>
                <div className='card-footer'>
                  <Link to='/companies'>View Details</Link>
                </div>
              </div>
            </div>

            <div className='col-sm-3'>
              <div className='card shadow m-2'>
                <div className='card-body p-3'>
                  <h5>Variants</h5>
                  <h5>{data?.variants}</h5>
                </div>
                <div className='card-footer'>
                  <Link to='/variants'>View Details</Link>
                </div>
              </div>
            </div>

            <div className='col-sm-3'>
              <div className='card shadow m-2'>
                <div className='card-body p-3'>
                  <h5>Cars</h5>
                  <h5>{data?.cars}</h5>
                </div>
                <div className='card-footer'>
                  <Link to='/cars'>View Details</Link>
                </div>
              </div>
            </div>

            <div className='col-sm-3'>
              <div className='card shadow m-2'>
                <div className='card-body p-3'>
                  <h5>Bookings</h5>
                  <h5>{data?.bookings}</h5>
                </div>
                <div className='card-footer'>
                  <Link to='/bookings'>View Details</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard

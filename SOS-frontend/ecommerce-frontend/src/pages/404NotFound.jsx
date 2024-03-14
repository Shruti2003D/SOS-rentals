import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function NotFound() {
  const navigate=useNavigate()

  useEffect(()=>{
    setTimeout(()=>{
      navigate(-1);
    },2000);
  },[])

  return (
    <div
      className='container-fluid shadow p-2 bg-danger text-white'
      style={{ minHeight: '88vh' }}
    >
      <div className='container text-center'>
        <h4 style={{ marginTop: '200px' }}>There is nothing here! 404</h4>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'

const Footer=()=>{
    return(
        <>
        <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2"><Link to="#" className="logo">Car<span>book</span></Link></h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
              
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-5">
              <h2 className="ftco-heading-2">Information</h2>
              <ul className="list-unstyled">
                <li><Link to="#" className="py-2 d-block">About</Link></li>
                <li><Link to="#" className="py-2 d-block">Services</Link></li>
                <li><Link to="#" className="py-2 d-block">Term and Conditions</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
             <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Customer Support</h2>
              <ul className="list-unstyled">
                <li><Link to="#" className="py-2 d-block">FAQ</Link></li>
                <li><Link to="#" className="py-2 d-block">Booking Tips</Link></li>                
                <li><Link to="#" className="py-2 d-block">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
            	<h2 className="ftco-heading-2">Have a Questions?</h2>
            	<div className="block-23 mb-3">
	              <ul>
	                <li><span className="icon icon-map-marker"></span><span className="text">India India</span></li>
	                <li><Link to="#"><span className="icon icon-phone"></span><span className="text">+91 123 456 7890</span></Link></li>
	                <li><Link to="#"><span className="icon icon-envelope"></span><span className="text">info@carrent.com</span></Link></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">

            <p>
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved Car Rent
  </p>
          </div>
        </div>
      </div>
    </footer>
        </>
    )
}

export default Footer;
import { Link } from 'react-router-dom'
function About(){
    return (
        <>
        <section className="ftco-section ftco-about">
			<div className="container">
				<div className="row no-gutters">
					<div className="col-md-6 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: "url('images/about.jpg')"}}>
					</div>
					<div className="col-md-6 wrap-about ftco-animate">
	          <div className="heading-section heading-section-white pl-md-5">
	          	<span className="subheading">About us</span>
	            <h2 className="mb-4">Welcome to SOSRental</h2>
				<p>Welcome to SOSRENTAL, your ultimate destination for top-notch car rental services. Our mission is to elevate your travel experience by offering a diverse fleet of well-maintained vehicles suited to your preferences. </p>
				<p>With a simple and efficient online booking platform, securing your ideal car for any purpose has never been more convenient. From business trips to family vacations, we have the perfect vehicle for every venture. Our unwavering commitment to customer satisfaction is evident in our exceptional service and reliable vehicles. Your safety and comfort are our priorities, and our team of experts ensures each car meets the highest standards before it reaches your hands. Embrace the joy of hassle-free travel with SOSRentals – where your journey begins.</p>

	            <p><Link to="products" className="btn btn-primary py-3 px-4">Search Vehicle</Link></p>
	          </div>
					</div>
				</div>
			</div>
		</section>

        </>
    )
}

export default About;
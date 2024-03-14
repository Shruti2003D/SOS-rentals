import { Link } from "react-router-dom";
const Featured = () => {
  return (
    <>
      <section className="ftco-section ftco-no-pt bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 heading-section text-center ftco-animate mb-5">
              <span className="subheading">What we offer</span>
              <h2 className="mb-2">Feeatured Vehicles</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="carousel-car row">
                <div className="item col-sm-3">
                  <div className="car-wrap rounded ftco-animate">
                    <div
                      className="img rounded d-flex align-item col-sm-3s-end"
                      style={{ backgroundImage: "url('images/car-1.jpg')" }}
                    ></div>
                    <div className="text">
                      <h2 className="mb-0">
                        <Link to="#">Mercedes Grand Sedan</Link>
                      </h2>
                      <div className="d-flex mb-3">
                        <span className="cat">Cheverolet</span>
                        <p className="price ml-auto">
                          $500 <span>/day</span>
                        </p>
                      </div>
                      <p className="d-flex mb-0 d-block">
                        <Link to="#" className="btn btn-primary py-2 mr-1">
                          Book now
                        </Link>{" "}
                        <Link to="#" className="btn btn-secondary py-2 ml-1">
                          Details
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item col-sm-3">
                  <div className="car-wrap rounded ftco-animate">
                    <div
                      className="img rounded d-flex align-item col-sm-3s-end"
                      style={{ backgroundImage: "url('images/car-2.jpg')" }}
                    ></div>
                    <div className="text">
                      <h2 className="mb-0">
                        <Link to="#">Mercedes Grand Sedan</Link>
                      </h2>
                      <div className="d-flex mb-3">
                        <span className="cat">Cheverolet</span>
                        <p className="price ml-auto">
                          $500 <span>/day</span>
                        </p>
                      </div>
                      <p className="d-flex mb-0 d-block">
                        <Link to="#" className="btn btn-primary py-2 mr-1">
                          Book now
                        </Link>{" "}
                        <Link to="#" className="btn btn-secondary py-2 ml-1">
                          Details
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item col-sm-3">
                  <div className="car-wrap rounded ftco-animate">
                    <div
                      className="img rounded d-flex align-item col-sm-3s-end"
                      style={{ backgroundImage: "url('images/car-3.jpg')" }}
                    ></div>
                    <div className="text">
                      <h2 className="mb-0">
                        <Link to="#">Mercedes Grand Sedan</Link>
                      </h2>
                      <div className="d-flex mb-3">
                        <span className="cat">Cheverolet</span>
                        <p className="price ml-auto">
                          $500 <span>/day</span>
                        </p>
                      </div>
                      <p className="d-flex mb-0 d-block">
                        <Link to="#" className="btn btn-primary py-2 mr-1">
                          Book now
                        </Link>{" "}
                        <Link to="#" className="btn btn-secondary py-2 ml-1">
                          Details
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item col-sm-3">
                  <div className="car-wrap rounded ftco-animate">
                    <div
                      className="img rounded d-flex align-item col-sm-3s-end"
                      style={{ backgroundImage: "url('images/car-4.jpg')" }}
                    ></div>
                    <div className="text">
                      <h2 className="mb-0">
                        <Link to="#">Mercedes Grand Sedan</Link>
                      </h2>
                      <div className="d-flex mb-3">
                        <span className="cat">Cheverolet</span>
                        <p className="price ml-auto">
                          $500 <span>/day</span>
                        </p>
                      </div>
                      <p className="d-flex mb-0 d-block">
                        <Link to="#" className="btn btn-primary py-2 mr-1">
                          Book now
                        </Link>{" "}
                        <Link to="#" className="btn btn-secondary py-2 ml-1">
                          Details
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;

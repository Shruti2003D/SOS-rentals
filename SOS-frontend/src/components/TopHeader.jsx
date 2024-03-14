const TopHeader = () => {
  return (
    <>
      <div
        className="hero-wrap ftco-degree-bg"
        style={{ backgroundImage: "url('images/bg_1.jpg')" }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text justify-content-start align-items-center justify-content-center">
            <div className="col-lg-8 ftco-animate">
              <div className="text w-100 text-center mb-md-5 pb-md-5">
                <h1 className="mb-4">Fast &amp; Easy Way To Rent A Car</h1>
                <p style={{ fontSize: "18px" }}>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;

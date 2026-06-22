import Footer from "../Components/Footer"
import Header from "../Components/Header"

const Packages = ()=>{
    return(
        <>
        <Header title={"Our Packages"}/>
          <div className="container-fluid py-2">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Packages</h6>
                <h1 className="mb-5 ">Our Packages</h1>
            </div>
            <div className="row">
               <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.1s">

                    <div className="tour-card">
                        <div className="tour-image">
                            <img src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74"
                                alt="American Dream"/>
                           {/*  <!--  <div className="tour-days"><span>14</span>DAYS</div> --> */}
                            <div className="tour-duration"><i className="fa fa-moon"></i>4N / 5D</div>
                        </div>
                        <div className="tour-content">
                            <h3 className="explore-text">American Dream</h3>
                            <p className="location">
                                <i className="fa fa-map-marker"></i> United States of America
                            </p>
                            <div className="date-section">
                                <div className="date-box">
                                    <span>Start From</span>
                                    <p><i className="fa fa-calendar"></i> 11-02-2026</p>
                                </div>

                                <div className="flight-path"><i className="fa fa-plane"></i></div>

                                <div className="date-box text-end">
                                    <span>End To</span>
                                    <p><i className="fa fa-calendar"></i> 25-02-2026</p>
                                </div>

                            </div>
                            <div className="tour-footer">
                                <div className="price-box">
                                    <span>Price Starts at</span>
                                    <h4>₹5,38,837*</h4>
                                </div>
                                <a href="#" className="know-more-btn">
                                    <span>Know More</span>
                                    <i className="fa fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

               <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.3s">

                    <div className="tour-card">
                        <div className="tour-image">
                            <img src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74"
                                alt="American Dream"/>
                              {/* <div className="tour-days"><span>14</span>DAYS</div>  */}
                            <div className="tour-duration"><i className="fa fa-moon"></i>4N / 5D</div>
                        </div>
                        <div className="tour-content">
                            <h3 className="explore-text">American Dream</h3>
                            <p className="location">
                                <i className="fa fa-map-marker"></i> United States of America
                            </p>
                            <div className="date-section">
                                <div className="date-box">
                                    <span>Start From</span>
                                    <p><i className="fa fa-calendar"></i>11-02-2026</p>
                                </div>

                                <div className="flight-path"><i className="fa fa-plane"></i></div>

                                <div className="date-box text-end">
                                    <span>End To</span>
                                    <p><i className="fa fa-calendar"></i>25-02-2026</p>
                                </div>

                            </div>
                            <div className="tour-footer">
                                <div className="price-box">
                                    <span>Price Starts at</span>
                                    <h4>₹5,38,837*</h4>
                                </div>
                                <a href="#" className="know-more-btn">
                                    <span>Know More</span>
                                    <i className="fa fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.5s">

                    <div className="tour-card">
                        <div className="tour-image">
                            <img src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74"
                                alt="American Dream"/>
                            {/* <div className="tour-days"><span>14</span>DAYS</div> --> */}  
                            <div className="tour-duration"><i className="fa fa-moon"></i>4N / 5D</div>
                        </div>
                        <div className="tour-content">
                            <h3 className="explore-text">American Dream</h3>
                            <p className="location">
                                <i className="fa fa-map-marker"></i> United States of America
                            </p>
                            <div className="date-section">
                                <div className="date-box">
                                    <span>Start From</span>
                                    <p><i className="fa fa-calendar"></i>11-02-2026</p>
                                </div>

                                <div className="flight-path"><i className="fa fa-plane"></i></div>

                                <div className="date-box text-end">
                                    <span>End To</span>
                                    <p><i className="fa fa-calendar"></i>25-02-2026</p>
                                </div>

                            </div>
                            <div className="tour-footer">
                                <div className="price-box">
                                    <span>Price Starts at</span>
                                    <h4>₹5,38,837*</h4>
                                </div>
                                <a href="#" className="know-more-btn">
                                    <span>Know More</span>
                                    <i className="fa fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/> 
        </>
    )
}
export default Packages
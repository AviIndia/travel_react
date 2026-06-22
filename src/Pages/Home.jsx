import Footer from "../Components/Footer"
import Header from "../Components/Header"
import about from "../assets/img/about.jpg"
const Home = ()=>{
    return(
        <>
            <Header/>
            
    <div className="container-fluid py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{"minHeight": "400px"}}>
                    <div className="position-relative h-100">
                        <img className="img-fluid position-absolute w-100 h-100" src={about} alt=""
                            style={{"objectFit": "cover"}}/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                    <h1 className="mb-4">Welcome to <span className="text-primary">Tourist</span></h1>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
                        eos. Clita erat ipsum et lorem et sit.</p>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
                        eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                    </p>
                    <div className="row gy-2 gx-4 mb-4">
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>First Class Flights</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Handpicked Hotels</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>5 Star Accommodations</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Latest Model Vehicles</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>150 Premium City Tours
                            </p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>24/7 Service</p>
                        </div>
                    </div>
                    <a className="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
                </div>
            </div>
        </div>
    </div>
  
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
   
    <div className="container-fluid py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Services</h6>
                <h1 className="mb-5">Our Services</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item rounded pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                            <h5>WorldWide Tours</h5>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item rounded pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-hotel text-primary mb-4"></i>
                            <h5>Hotel Reservation</h5>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item rounded pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-user text-primary mb-4"></i>
                            <h5>Travel Guides</h5>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="service-item rounded pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-cog text-primary mb-4"></i>
                            <h5>Event Management</h5>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </div>
                </div>
        
            </div>
        </div>
    </div>

   
   
    <div className="container-fluid py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Contact Us</h6>
                <h1 className="mb-5">Contact For Any Query</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <h5>Get In Touch</h5>
                    <h6 className="mb-4">Receive messages instantly with our PHP and Ajax contact form - available in the <a
                            href="https://htmlcodex.com/downloading/?item=2111">Pro Version</a> only.</h6>
                    <div className="d-flex align-items-center mb-4">
                        <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                            style={{"width": "50px", "height": "50px"}}>
                            <i className="fa fa-map-marker-alt text-white"></i>
                        </div>
                        <div className="ms-3">
                            <h5 className="text-primary">Office</h5>
                            <p className="mb-0">123 Street, New York, USA</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-4">
                        <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                            style={{"width": "50px", "height": "50px"}}>
                            <i className="fa fa-phone-alt text-white"></i>
                        </div>
                        <div className="ms-3">
                            <h5 className="text-primary">Mobile</h5>
                            <p className="mb-0">+012 345 67890</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                            style={{"width": "50px", "height": "50px"}}>
                            <i className="fa fa-envelope-open text-white"></i>
                        </div>
                        <div className="ms-3">
                            <h5 className="text-primary">Email</h5>
                            <p className="mb-0">info@example.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <iframe className="position-relative rounded w-100 h-100"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                        frameBorder="0" style={{"minHeight": "300px", "border":"0"}} allowFullScreen="" aria-hidden="false"
                        tabIndex="0"></iframe>
                </div>
                <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                    <label >Your Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                    <label >Your Email</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                    <label >Subject</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a message here" id="message"
                                        style={{"height": "100px"}}></textarea>
                                    <label >Message</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  <Footer/>
        </>
    )
}
export default Home
import video from '../assets/img/hero.mp4'
const HeroVideo = ()=>{
    return(
        <>
          <div className="container-fluid hero-header position-relative overflow-hidden">

           <video autoPlay muted loop playsInline className="hero-video">
                <source src={video} type="video/mp4"/>
            </video>

            <div className="hero-overlay"></div>

            <div className="container py-5 position-relative">
                <div className="row align-items-center py-5">

                  
                    <div className="col-lg-7 text-white">
                        <h1 className="display-3 text-white mb-3">

                            Where <span className="spanWord" >Every Journey</span> Becomes a Story
                        </h1>

                        <p className="fs-5 mb-0">
                            Turn your travel dreams into unforgettable moments with carefully curated destinations and
                            experiences.
                        </p>
                    </div>

                  
                    <div className="col-lg-4 offset-lg-1 mt-lg-0">
                        <div className="travel-form mt-4">

                            <h4 className="text-white mb-3 text-left explore-text formHeader">
                                Plan Your Journey
                            </h4>

                            <form>
                                <div className="mb-3">
                                    <label className="form-label text-white">From</label>
                                    <input type="text" className="form-control custom-input" placeholder="Kolkata"/>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label text-white">To</label>
                                    <input type="text" className="form-control custom-input" placeholder="Goa"/>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label text-white">Start Date</label>
                                        <input type="date" className="form-control custom-input"/>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label text-white">End Date</label>
                                        <input type="date" className="form-control custom-input"/>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-search w-100">
                                    Search Packages
                                </button>
                            </form>

                        </div>
                    </div>

                </div>
            </div>

        </div>
        </>
    )
}
export default HeroVideo
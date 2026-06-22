import Header from "../Components/Header"

const Feedback = () => {
    return (
        <>
            <Header title={"Our Feedback"} />
            <div class="container py-5">
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="feedback-card">

                            <div class="quote-icon">
                                <i class="fa fa-quote-left"></i>
                            </div>

                            <div class="feedback-content">
                                <p>
                                    Our Varanasi trip was absolutely amazing. Everything was well
                                    organized, from hotel booking to sightseeing. The AI itinerary
                                    made our journey hassle-free.
                                </p>
                            </div>

                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>

                            <div class="client-info">

                                <img src="https://randomuser.me/api/portraits/men/32.jpg"
                                    alt="Client" />

                                <div>
                                    <h5>Rahul Sharma</h5>
                                    <span>Kolkata to Varanasi</span>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Feedback
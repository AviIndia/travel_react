import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from "react"
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { getPackages } from "../Services/package-serach"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const PackageSlider = () => {
    const [packageData, setPackageData] = useState([]);
    const fetchDataPackage = async () => {
        try {
            const res = await getPackages();
            console.log(res.data)
            setPackageData(res.data.packages)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchDataPackage()
    }, [])
    return (
        <>





            <div className="container-fluid py-2">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Packages</h6>
                        <h1 className="mb-5 ">Our Packages</h1>
                    </div>
                    <div className="row">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={3}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{
                                delay: 3000
                            }}
                            loop={true}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1
                                },
                                768: {
                                    slidesPerView: 2
                                },
                                992: {
                                    slidesPerView: 3
                                }
                            }}
                        >
                            {
                                packageData.map((item, index) => (
                                    <SwiperSlide key={index}>

                                        <div className="tour-card">
                                            <div className="tour-image">
                                                <img
                                                    src={item.thumbnail}
                                                    alt={item.destination_name}
                                                />

                                                <div className="tour-duration">
                                                    <i className="fa fa-moon"></i>
                                                    {item.total_days}D / {item.total_nights}N
                                                </div>
                                            </div>

                                            <div className="tour-content">

                                                <h3 className="explore-text">
                                                    {item.package_name}
                                                </h3>

                                                <p className="location">
                                                    <i className="fa fa-map-marker"></i>
                                                    {item.state} - {item.destination_name}
                                                </p>

                                                <div className="date-section">

                                                    <div className="date-box">
                                                        <span>Start From</span>
                                                        <p>
                                                            <i className="fa fa-calendar"></i>
                                                            {item.start_date}
                                                        </p>
                                                    </div>

                                                    <div className="flight-path">
                                                        <i className="fa fa-plane"></i>
                                                    </div>

                                                    <div className="date-box text-end">
                                                        <span>End To</span>
                                                        <p>
                                                            <i className="fa fa-calendar"></i>
                                                            {item.end_date}
                                                        </p>
                                                    </div>

                                                </div>

                                                <div className="tour-footer">

                                                    <div className="price-box">
                                                        <span>Price Starts at</span>
                                                        <h4>₹{item.package_cost}*</h4>
                                                    </div>

                                                    <a href="#" className="know-more-btn">
                                                        <span>Know More</span>
                                                        <i className="fa fa-arrow-right"></i>
                                                    </a>

                                                </div>

                                            </div>

                                        </div>

                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>

                    </div>
                </div>
            </div>


        </>)
}
export default PackageSlider
import { useEffect, useState } from "react"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { useSearchParams } from "react-router-dom";
import { packageSearch } from "../Services/package-serach";

const PackagesSearch = ()=>{

    const [searchData,setSearchData] = useState([]);
    const [searchParams] = useSearchParams();

    const loadPackages = async ()=>{
        try {
            const payload ={
            destination_id: searchParams.get('destination_id'),
            start_date: searchParams.get('start_date')
        }
        const res = await packageSearch(payload);
        if(res.status)
        {
            const serachPackageData = res.data.packages;
            setSearchData(serachPackageData);
        }
        } catch (error) {
            console.log(error)
        }
        
    }
   
    useEffect(()=>{
        loadPackages()
    },[])
    return(
        <>
        <Header title= {searchData?.[0]?.destination_name}/>
          <div className="container-fluid py-2">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
               <h6 className="section-title bg-white text-center text-primary px-3">
    {searchData?.[0]?.destination_name}
</h6>
   <h1 className="mb-5 ">Our Packages</h1>
            </div>
            <div className="row">
                {
                    searchData.map((item)=>{
                        return(
                <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.1s">

                    <div className="tour-card">
                        <div className="tour-image">
                            <img src={item.thumbnail}
                                alt={item.destination_name}/>
                           {/*  <!--  <div className="tour-days"><span>14</span>DAYS</div> --> */}
                            <div className="tour-duration"><i className="fa fa-moon"></i>{item.total_days}D / {item.total_nights}N</div>
                        </div>
                        <div className="tour-content">
                            <h3 className="explore-text">{item.package_name}</h3>
                            <p className="location">
                                <i className="fa fa-map-marker"></i> {item.state} - {item.destination_name}
                            </p>
                            <div className="date-section">
                                <div className="date-box">
                                    <span>Start From</span>
                                    <p><i className="fa fa-calendar"></i> {item.start_date}</p>
                                </div>

                                <div className="flight-path"><i className="fa fa-plane"></i></div>

                                <div className="date-box text-end">
                                    <span>End To</span>
                                    <p><i className="fa fa-calendar"></i> {item.end_date}</p>
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
                </div>
                        )
                    })
                }
               

           
            </div>
        </div>
    </div>
    <Footer/> 
        </>
    )
}
export default PackagesSearch
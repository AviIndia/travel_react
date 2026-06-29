import { useNavigate } from 'react-router-dom'
import video from '../assets/img/hero.mp4'
import { useEffect, useState } from 'react';
import { destinationList } from '../Services/destination';

const HeroVideo = ()=>{
    const navigate  = useNavigate();
    const [destData,setDestdata] = useState([])
    const [formData,setFormData] = useState({
        from_destination : '',
        to_destination :"",
        start_date :"",
        end_date:""
    })
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const getDestination = async()=>{
        try {
           const res = await destinationList()
          
           if(res.status)
           {
            const destination = res.data.destinations;
            setDestdata(destination);
            console.log(res.data.destinations);
            
           }
         
        } catch (error) {
          console.log  (error)
        }
    }

    useEffect(()=>{
        getDestination()
    },[])

    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate(`/PackagesSearch?destination_id=${formData.to_destination}&start_date=${formData.start_date}`)
        
    }
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

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label text-white">From</label>
                                    <input onChange={handleChange} value={formData.from_destination} type="text" name='from_destination' className="form-control custom-input" placeholder="Kolkata"/>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label text-white">To</label>
                                    <select
                                            onChange={handleChange}
                                            name="to_destination"
                                            className="form-control custom-input"
                                            value={formData.to_destination}
                                        >
                                            <option value="" style={{"color":"#000"}} disabled>Select Destination</option>

                                           {
                                            destData.map((item)=>{
                                                return (
                                                    <option key={item.id} value={item.id} style={{"color":"#000"}}>
                                                        {item.destination_name} - {item.state}
                                                    </option>
                                                )
                                            })
                                        }

                                        </select>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label text-white">Start Date</label>
                                        <input type="date" value={formData.start_date} onChange={handleChange} name='start_date' className="form-control custom-input"/>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label text-white">End Date</label>
                                        <input type="date" value={formData.end_date} onChange={handleChange} name='end_date' className="form-control custom-input"/>
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
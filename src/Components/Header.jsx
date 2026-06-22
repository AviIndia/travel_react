import HeroVideo from "./HeroVideo"
import logo from '../assets/img/logo.png'
import darklogo from '../assets/img/logo-dark.png'
import { NavLink, useLocation } from "react-router-dom"

const Header = ({ title }) => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const navClass = ({ isActive }) =>
    isActive
        ? "nav-item nav-link active"
        : "nav-item nav-link";
    return (
        <>
            <div className="container-fluid bg-dark px-5 p-1 d-none d-lg-block">
                <div className="row gx-0">
                    <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center" style={{ "height": "45px" }}>
                            <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2"></i>Kolkata,West Bengal,
                                India</small>
                            <small className="me-3 text-light"><i className="fa fa-phone-alt me-2"></i>+919874438716</small>
                            <small className="text-light"><i className="fa fa-envelope-open me-2"></i>avijitweb90@gmail.com</small>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <div className="d-inline-flex align-items-center" >
                            <a className="btn btn-sm  btn-sm-square rounded-circle me-2 text-light" ><i
                                className="fab fa-facebook-f fw-normal"></i></a>
                            <a className="btn btn-sm  btn-sm-square rounded-circle me-2 text-light" ><i
                                className="fab fa-linkedin-in fw-normal"></i></a>
                            <a className="btn btn-sm  btn-sm-square rounded-circle me-2 text-light" ><i
                                className="fab fa-instagram fw-normal"></i></a>
                            <a className="btn btn-sm  btn-sm-square rounded-circle text-light" ><i
                                className="fab fa-youtube fw-normal"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                    <a href="" className="navbar-brand p-0">
                        <img src={logo} alt="Logo" className="logo-light" />
                        <img src={darklogo} alt="Logo" className="logo-dark" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                           <NavLink to="/" className={navClass}>Home</NavLink>
                            <NavLink to="/About" className={navClass}>About</NavLink>
                            <NavLink to="/packages" className={navClass}>Packages</NavLink>
                            <NavLink to="/feedback" className={navClass}>Feedback</NavLink>
                            <NavLink to="/signin" className={navClass}>Sign In</NavLink>
                            <NavLink to="/contact" className={navClass}>Contact</NavLink>
                        </div>
                        <a className="btn btn-primary rounded-pill py-2 px-4" style={{ "border": "none" }}>AI
                            Trip Planner</a>
                    </div>
                </nav>

                {
                    isHomePage ? (<HeroVideo />) :
                        (
                            <div class="container-fluid bg-primary py-5 mb-5 hero-header-page">
                                <div class="container py-5">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                                            <h1 class="disPlay text-white animated slideInDown">{title}</h1>
                                            <nav aria-label="breadcrumb">
                                                <ol class="breadcrumb justify-content-center">
                                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                                    <li class="breadcrumb-item"><a href="#">Pages</a></li>
                                                    <li class="breadcrumb-item text-white active" aria-current="page">{title}</li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                }





            </div>


        </>
    )
}
export default Header
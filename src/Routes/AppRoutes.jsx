import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Aboutus from "../Pages/Aboutus"
import Packages from "../Pages/Packages"
import Feedback from "../Pages/Feedback"
import PackagesSearch from "../Pages/PackagesSearch"

const AppRoutes = ()=>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/About" element={<Aboutus/>}></Route>
                <Route path="/Packages" element={<Packages/>}></Route>
                <Route path="/Feedback" element={<Feedback/>}></Route>
                <Route path="/PackagesSearch" element={<PackagesSearch/>}></Route>
            </Routes>
        </>
    )
}
export default AppRoutes
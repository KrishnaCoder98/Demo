import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import Home from "../Components/Pages/Home"
import Products from "../Components/Pages/Product"
import Services from "../Components/Pages/Service"
import SignUp from "../Components/Pages/SignUp"
import Footer from "../Components/Footer/Footer"
export default function Routing(){
    return(
        <>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
            </Routes>
            <Footer/>
        </Router>

        </>
    )
}
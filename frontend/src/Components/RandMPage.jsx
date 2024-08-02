import React from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar2 from "./Navbar2";
import '../assets/Styles/RandMPage.css';
import CarSelectorForm from './CarSelectorForm';
import Footer from "./Footer";
const RandMPage = () =>{
    return(
        <div className="RnMbg-custom">
        <div>
         <NavigationBar2 />
        </div>
        <div className="csf-custom">
            <CarSelectorForm />
        </div>   
        </div>
    );
}
export default RandMPage;
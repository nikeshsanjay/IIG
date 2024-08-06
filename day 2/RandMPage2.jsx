import React from "react";
import NavigationBar3 from "./Navbar3";
import '../assets/Styles/RandMPage2.css';
import ServicesDashboard from "./Dashboard";
import Repair from "./Repair";
import CarSelectorForm from "./CarSelectorForm";

const RandMPage2 = () => {
  return (
    <div className="Recat-custom">
      <div className="nav3-custom">
        <NavigationBar3 />
      </div>
      <div className="redo-custom">
        <ServicesDashboard />
      </div>
      <div className="csfrm-custom">
        <CarSelectorForm />
      </div>
      <br />
      <div className="Repair-postion d-flex">
        <Repair />
      </div>
    </div>
  );
}

export default RandMPage2;

import React from "react";
import repaimg from '../assets/images/image.png';
import repaim from '../assets/images/image copy.png';
import repaim1 from '../assets/images/image copy 2.png';
import repaim2 from '../assets/images/image copy 3.png';
import repaim3 from '../assets/images/image copy 4.png';
import '../assets/Styles/Repair.css';
import CarSelectorForm from "./CarSelectorForm";

const Repair = () => {
  return (
    <div className="repair-container">
      <div className="repair-image-container">
        <img src={repaimg} className="repair-img animate__animated animate__fadeInDown" alt="Repair" />
        <div className="repair-content animate__animated animate__fadeInUp">
          <h1>10 Most Common Car Problems and their Easy Solutions</h1>
          <br />
          <div>
            <h3>1. Dead or Discharged Battery</h3>
            <img src={repaim} className="repair-img2 animate__animated animate__zoomIn" alt="" />
            <br />
            <p>A dead or discharged battery is a very common car problem reported. There are plenty of reasons for your car battery to doze off like leaving electricals on when not in use, faulty charging, parasitic drain, defective alternator if the battery is beginning to show its age and the one which is the COVID-19 Lockdown special is leaving the car unused for a long time.</p>
            <h5>Suggested: What is the Right Time to Get Your Car Battery Replaced?</h5>
            <br />
            <p>All these factors can cause a car battery to rapidly discharge which will make your car in-operational when you need it. So if you ever end up in such a situation with your car, there basically two options you can resort to:</p>
            <br />
            <p>Jump starting the car: for this, you need a jumper cable and a donor car whose battery you will use to charge your car. Place the positive and negative terminals of the jumper cable on the positive and negative terminal of the donor car battery respectively. Then start the donor car and let it run for a few minutes. After some time, your car battery would be charged enough for ignition and once it is done, try the ignition of your car. You’ll be good to go. Want to skip the hassle? Simply book a jumpstart service with GoMechanic and we will handle the situation for you.</p>
            <br />
            <p>Charging the battery: if you have access to a mechanic in a situation of car battery discharge, then the best thing to do is get the battery removed and the mechanic will put it up on charging so that it can attain all the juice back. These practices can work a couple of times maybe but if your car battery isn’t responding even after trying both the things then you probably want to consider getting a new battery for your car.</p>
            <br />
            <h3>2. Car pulling on one side</h3>
            <br />
            <img src={repaim1} className="repair-img2 animate__animated animate__zoomIn" alt="" />
            <br />
            <p>You’re out on the highway or you’re simply coming back from the office and while driving your car in a straight line for some time you realise that your car is throwing itself to the guardrail and you have to put in extra effort to keep your car straight-lined. This can be a very panicky situation for a novice driver.</p>
            <br />
            <br />
            <p>But not to worry, nothing terrible has happened to your car, it’s just that your car is out of alignment i.e all four wheels aren’t pointing in a linear manner and they are off their usual angle with the road while moving. The solution to this you ask? Get your car’s Wheel Alignment done. Tyre experts at GoMechanic with the help of computer-aided systems can align your car tyres back in no time.</p>
            <br />
            <p>Wheel alignment is recommended to be checked after every 6,000-8,000 kms to avoid any major damage to the wheels or the suspension of the car.</p>
            <br />
            <h3>4. Engine Overheating</h3>
            <img src={repaim2} className="repair-img2 animate__animated animate__zoomIn" alt="" />
            <br />
            <p>The process of combusting power out of an engine is piping hot and in order to keep the heat optimum for efficient combustion, components like radiators are there at the engines disposal.</p>
            <br />
            <p>So while driving if your car’s temp gauge goes all red and your car’s engine is overheating unusually then it is certain that there’s something wrong with your car’s cooling system.</p>
            <br />
            <h5>Must Read: Engine Oil | A Comprehensive Guide | Everything You Need To Know</h5>
            <br />
            <p>The most common problem for engine overheating might be the low coolant level. Your car’s regular service always includes a coolant top-up, so the main reason for low coolant is irregular servicing of your car.</p>
            <br />
            <p>So if your car is constantly overheating, do check for the coolant levels and keep it up to the mark.</p>
            <br />
            <h1>5. Car Paint Fading and Chipping</h1>
            <br />
            <img src={repaim3} className="repair-img2 animate__animated animate__zoomIn" alt="" />
            <br />
            <p>If your car is parked out in the open, chances are that you will definitely face the problem of your car’s paint gradually fading and also chipping out from different sections around the car.</p>
            <br />
            <p>Primary causes for these are, the Ultraviolet rays from exposure to sun, corrosion, use of low-quality cleaning agents, harsh cleaning, etc.</p>
            <br />
            <h5>Popular Read: Car Paint | Automotive Paints And Coatings | An Insight</h5>
            <br />
            <p>But these aren’t permanent and can be redone, just go for an experienced car body shop and they can paint your car to look as good as new. Also, there are various high-grade coating kits available in the market to help you preserve the natural shade of your car’s paint for a significant time.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Repair;

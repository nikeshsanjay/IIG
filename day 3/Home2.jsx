import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/Styles/Home2.css';
import card1 from '../assets/images/card1.png';
import card2 from '../assets/images/card2.jpg';
import card3 from '../assets/images/card3.jpg';
import NavigationBar2 from './Navbar2';
import Footer from './Footer';

const Home2 = () => {
  const navigate = useNavigate();

  const handleInquiryClick = () => {
    navigate('/RandM');
  };

  return (
    <div className="Home">
      <div className='pos-custom'>
      <NavigationBar2 />
      </div>
      <div className="background-container">
        <div className="Fid-custom">
          <p className="Fi-custom">Ignition Innovators Garage</p>
          <p className="fis-custom">Caring for cars since 2000</p>
          <button className="inquire-button" onClick={handleInquiryClick}>Inquire Now</button>
        </div>
      </div>
      <div className="df2-custom">
        <div className="offer-custom">
          <p>What we <br /> Offer</p>
        </div>
        <div className="cards-container">
          <div className="card">
            <img src={card1} className="card-img-top" alt="Service 1" />
            <div className="card-body">
              <h5 className="card-title">Maintenance</h5>
              <p className="card-text">Regular checkups to maintain your <br /> car's high performance</p>
            </div>
          </div>
          <div className="card">
            <img src={card2} className="card-img-top" alt="Service 2" />
            <div className="card-body">
              <h5 className="card-title">Repair</h5>
              <p className="card-text">Quality service that guarantees <br /> smooth and safe rides</p>
            </div>
          </div>
          <div className="card">
            <img src={card3} className="card-img-top" alt="Service 3" />
            <div className="card-body">
              <h5 className="card-title">Parts/Accessories</h5>
              <p className="card-text">Interior parts and premium <br /> exteriors for standout style</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg2-custom'>
        <div className='contact-details'>
          <h2>Contact Details</h2>
          <div className='contact-row'>
            <div className='contact-item'>
              <h3>Mailing Address</h3>
              <p>123 Anywhere St., Any City<br />State, Country 12345</p>
            </div>
            <div className='contact-item'>
              <h3>Email Address</h3>
              <p>hello@reallygreatsite.com</p>
            </div>
            <div className='contact-item'>
              <h3>Phone Number</h3>
              <p>(123) 456 7890</p>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home2;

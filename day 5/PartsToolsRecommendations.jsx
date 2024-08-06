import React from 'react';
import Navbar3 from './Navbar3';
import Footer from './Footer';
import '../assets/Styles/PartsandTools.css';
import ServicesDashboard from './Dashboard';

const partsAndTools = [
  { name: 'Wrench Set', description: 'High-quality steel wrenches', image: 'path/to/wrench.jpg' },
  { name: 'Screwdriver Set', description: 'Magnetic tip screwdrivers', image: 'path/to/screwdriver.jpg' },
  { name: 'Car Jack', description: 'Heavy-duty hydraulic car jack', image: 'path/to/jack.jpg' },
  { name: 'Tire Inflator', description: 'Portable electric tire inflator', image: 'path/to/inflator.jpg' },
  { name: 'Oil Filter', description: 'High-efficiency oil filter', image: 'path/to/oil-filter.jpg' },
  { name: 'Brake Pads', description: 'Ceramic brake pads', image: 'path/to/brake-pads.jpg' },
  { name: 'Brake Pads', description: 'Ceramic brake pads', image: 'path/to/brake-pads.jpg' },
  { name: 'Brake Pads', description: 'Ceramic brake pads', image: 'path/to/brake-pads.jpg' },
  { name: 'Brake Pads', description: 'Ceramic brake pads', image: 'path/to/brake-pads.jpg' },
  { name: 'Brake Pads', description: 'Ceramic brake pads', image: 'path/to/brake-pads.jpg' },
  { name: 'Brake Pads', description: 'Ceramic brake pads', image: 'path/to/brake-pads.jpg' },
  { name: 'Brake Pads', description: 'Ceramic brake pads', image: 'path/to/brake-pads.jpg' },
  { name: 'Brake Pads', description: 'Ceramic brake pads', image: 'path/to/brake-pads.jpg' },
  { name: 'Brake Pads', description: 'Ceramic brake pads', image: 'path/to/brake-pads.jpg' },
  // Add more parts and tools as needed
];

const PartsAndTools = () => {
  return (
    <div>
      <Navbar3 />
      <div className='dash-align'>
      <ServicesDashboard />
      </div>
      <br />
      <br />
      <br />
      <div className="parts-tools-container">
        <h1>Parts and Tools</h1>
        <div className="cards-container">
          {partsAndTools.map((item, index) => (
            <div key={index} className="card">
              <img src={item.image} alt={item.name} />
              <div className="card-content">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PartsAndTools;

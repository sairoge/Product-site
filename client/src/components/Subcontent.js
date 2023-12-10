import React from 'react';
import '../Subcontent.css';

const Subcontent = () => {
  return (
    <div className="subcontent-container"  data-aos="fade-up">
      <div className='content-wrapper'>
      <div className="aside-content">
        <div className='product-text'>
          <h3>Services</h3>
        </div>
        <div className="image-row"  data-aos="fade-up">
          <img src={require("../assets/Product14.jpg")}  alt="Image 1"    />
          <img src={require("../assets/Design.jpg")}   alt="Image 2"   />
        </div>
        <div className="image-center"  data-aos="fade-up">
        <img src={require("../assets/Maintenance.jpg")}  alt="Image 3"   />
        </div>
      </div>
      <div className="text-content">
      <div className='product-range-text'>
          <h3>Product Range</h3>
        </div>
        <ul className='list-items'>
          <li>Heat Ventillation System</li>
          <li>Diary Cold Storage</li>
          <li>Logistic Cold Storage</li>
          <li>Ripening Chamber</li>
          <li>Industrial Chillers</li>
          <li>Ductable AC Services</li>
          <li>Cold Storage Cabin Construction Service</li>
        </ul>
        <a href="/products" className="view-all-button">View All</a>
      </div>
    </div>
  </div>
  );
};

export default Subcontent;

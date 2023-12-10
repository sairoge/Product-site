import React from 'react';
import '../Footer.css'

function Footer() {
  return (
    <div className='Footer'  data-aos="fade-up">
      <div className='main--section bg-indigo-900 flex justify-around text-white'>
        <div className='footer--section flex text-justify'>
          <a href='#'>
            <img className='footer--image w-20 h-8' src={require('../assets/address.png')} alt="Address" />
          </a>
          <div className="footer--text">
            <p className="main--text">Reach us</p>
            <p className='second--text'>207, Jaivijay Industrial Estate, Bapane Village, off NH8, Naigoan (E) Thane - 401208, Maharashtra, India Maharashtra, India</p>
          </div>
        </div>

        <div className='flex text-justify'>
          <a href='tel:7709971291'>
            <img className='footer--image w-6 h-8' src={require('../assets/phone-call-icon-phone_call.png')} alt="Call Us" />
          </a>
          <div className="footer--text">
            <p className="call-text">Call us</p>
            <p className='second--text'>7709971291</p>
          </div>
        </div>

        <div className='product--section flex text-justify'>
          <img className='footer--image w-6 h-7' src={require('../assets/productAndService.png')} alt="Product and Services" />
          <div className="footer--text">
            <p className="main--text">Product And Services</p>
            <p className='second--text'>Our focus on the qualitative procedures at our premises, we have maintained in-house quality checking facility for our provided range of Dairy Cold Storage Room, VRF System Installation, Cold Storage Cabin Construction Service and many more</p>
          </div>
        </div>
      </div>

      <div className='info--section bg-indigo-950 text-white text-center flex'>
        <p>&copy; 2016 Gallops Systems and Solutions</p>
      </div>
    </div>
  );
}

export default Footer;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import '../Content.css';

function Content() {

    return (
        <div className='content-container'  >
            <div className='left-content' data-aos="fade-up">
                <h3>Welcome To Gallops System And Solutions</h3>
                <p className="justified-text">We are your trusted partner for all your industrial needs. With a strong commitment to excellence, we specialize in the installation of cold storage and industrial equipment. Our dedication doesn't stop there; we also offer comprehensive maintenance services to ensure the optimal performance and longevity of your equipment. At Gallops, we strive to provide solutions that keep your business running smoothly and efficiently. Explore our services and let us be your go-to choice for all your industrial solutions.</p>
                <Link to="/about" className="read-more-button">Read More</Link>
            </div>
            <div className='right-content' data-aos="fade-up">
                <h3>Our Notable Projects</h3>
                <div className="image-container">
                    <div className="image-card">
                        <img src={require("../assets/Project1.jpeg")} alt="Image 1" className="image" />
                        <p>VNR Seeds pvt ltd , Raipur</p>
                    </div>
                    <div className="image-card">
                        <img src={require("../assets/Project2.jpeg")} alt="Image 2" className="image" />
                        <p>Merck Pharma pvt ltd</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;

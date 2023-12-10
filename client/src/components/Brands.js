import React from 'react';
import '../Brands.css'


function Brands() {
  return (
    <div className="brands-container" data-aos="fade-up">
      <h2 className="heading text-2xl text-center">Brands We Deal In</h2>

      <div className="box-container">
        <div className="box-subset">
          <img src={require("../assets/aboutusimage1.png")} alt=""  data-aos="fade-up" />
        </div>

        <div className="box-subset">
          <img src={require("../assets/aboutusimage2.jpg")} alt="" data-aos="fade-up"/>
        </div>

        <div className="box-subset">
          <img src={require("../assets/aboutusimage3.jpg")} alt="" data-aos="fade-up"/>

        </div>

        <div className="box-subset">
          <img src={require("../assets/aboutusimage4.jpeg")} alt="" data-aos="fade-up"/>
        </div>

      </div>
    </div>
  );
}

export default Brands;
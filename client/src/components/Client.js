import React from 'react';
import '../Client.css'

function Client() {
  return (
    <div className="client-container bg-white">
      <h2 className="heading">Our Clients</h2>

      <div className="box-sub-container">
        <div className="box-inside"  data-aos="fade-up">
          <img src={require("../assets/atos_image.png")} alt="" style={{height:"30px"}} />
          <h3>Atos</h3>
          {/* <p>Atos is a European multinational information technology service and consulting company with headquarters in Bezons, France, and offices worldwide. </p> */}
          <a href="https://atos.net/en/" className="btn-info">Read more</a>
        </div>

        <div className="box-inside"  data-aos="fade-up">
          <img src={require("../assets/imagica_image.jpg")} alt="" />
          <h3>Imagica</h3>
          {/* <p>Imagicaa is a themed entertainment destination featuring world class rides & attractions. Plan your visit to this perfect family holiday destination near Mumbai, Pune & Lonavala. Night Parade. Late Night Rides. Dance Party. Holi party. Types: Theme Park, Water Park</p> */}
          <a href="https://www.imagicaaworld.com/theme-park/?utm_source=google_sem&utm_medium=brand_keywords&gclid=CjwKCAjwg4SpBhAKEiwAdyLwvDFNqUoDNl5g_sW4XjV39VG0kwyugvSErzjhLccCG7S3vYLbzYCRGRoCpV8QAvD_BwE" className="btn-info">Read more</a>
        </div>

        <div className="box-inside"  data-aos="fade-up">
          <img src={require("../assets/pizzaexpress-image.png")} alt="" />
          <h3>Pizza express </h3>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p> */}
          <a href="https://www.pizzaexpress.com/" className="btn-info">Read more</a>
        </div>

        <div className="box-inside"  data-aos="fade-up">
          <img src={require("../assets/reliance-image.jpg")} alt="" />
          <h3>Reliance</h3>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p> */}
          <a href="https://www.ril.com/" className="btn-info">Read more</a>
        </div>

        <div className="box-inside" data-aos="fade-up">
          <img src={require("../assets/raymond-image.png")} alt="" />
          <h3>Raymond</h3>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p> */}
          <a href="https://www.raymond.in/" className="btn-info">Read more</a>
        </div>

        <div className="box-inside"  data-aos="fade-up">
          <img src={require("../assets/lilavati-image.jpg")} alt="" />
          <h3>Lilavati Hopsital</h3>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p> */}
          <a href="https://lilavatihospital.com/" className="btn-info">Read more</a>
        </div>

        <div className="box-inside"  data-aos="fade-up">
          <img src={require("../assets/rusom-iamge.png")} alt="" />
          <h3>Rustomjee</h3>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p> */}
          <a href="https://www.rustomjee.com/" className="btn-info">Read more</a>
        </div>

        <div className="box-inside"  data-aos="fade-up">
          <img src={require("../assets/syscom-image.png")} alt=""  style={{height:"50px"}}/>
          <h3>Syscom</h3>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p> */}
          <a href="https://syscom.com/" className="btn-info">Read more</a>
        </div>

        <div className="box-inside"  data-aos="fade-up">
          <img src={require("../assets/novartis-image.png")} alt="" style={{height:"50px"}} />
          <h3>Novartis</h3>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p> */}
          <a href="https://www.novartis.com/" className="btn-info">Read more</a>
        </div>

        <div className="box-inside"  data-aos="fade-up">
          <img src={require("../assets/amul-image.jpg")} alt="" />
          <h3>Amul</h3>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p> */}
          <a href="https://amul.com/" className="btn-info">Read more</a>
        </div>

        <div className="box-inside"  data-aos="fade-up">
          <img src={require("../assets/coldstar-image.png")} alt="" />
          <h3>Cold Star</h3>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p> */}
          <a href="https://coldstar.in/" className="btn-info">Read more</a>
        </div>

        <div className="box-inside"  data-aos="fade-up">
          <img src={require("../assets/blue-image.png")} alt="" style={{height:"50px"}}/>
          <h3>Blue Star</h3>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p> */}
          <a href="https://www.bluestarindia.com/" className="btn-info">Read more</a>
        </div>

        <div className="box-inside"  data-aos="fade-up">
          <img src={require("../assets/dhl-image.png")} alt="" style={{height:"50px"}} />
          <h3>DHL</h3>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p> */}
          <a href="https://www.dhl.com/in-en/home.html?locale=true" className="btn-info">Read more</a>
        </div>

        <div className="box-inside"  data-aos="fade-up">
          <img src={require("../assets/hinduja-hospital-image.jpg")} alt="" />
          <h3>Hinduja Hospital</h3>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p> */}
          <a href="https://www.hindujahospital.com/" className="btn-info">Read more</a>
        </div>

        <div className="box-inside"  data-aos="fade-up">
          <img src={require("../assets/johnson-image.png")} alt="" />
          <h3>Johnson & Johnson</h3>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p> */}
          <a href="https://www.jnj.in/" className="btn-info">Read more</a>
        </div>

      </div>
    </div>
  );
}

export default Client;
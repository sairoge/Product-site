import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Product.css";
import data from "./TemplateData.json";

import industrialStorageRack from "../assets/Product1.jpg";
import blastChillers from "../assets/Product2.jpg";
import ductableAirConditioner from "../assets/Product3.jpg";
import industrialChillers from "../assets/Product4.jpg";
import ripeningChambers from "../assets/Product5.jpg";
import dairyColdStorage from "../assets/Product6.jpg";
import logisticStorage from "../assets/Product7.jpg";
import heatVentillation from "../assets/Product8.jpg";
import iceStorage from "../assets/Product9.jpg";
import foodRoom from "../assets/Product10.jpg";
import vrfSystem from "../assets/Product11.jpg";
import turnkeyStorage from "../assets/Product12.jpg";
import cabinStorage from "../assets/Product13.jpg";
import ductService from "../assets/Product14.jpg";
import pharService from "../assets/Product15.jpg";

function getImagePath(imageFileName) {
  switch (imageFileName) {
    case "Product1.jpg":
      return "/industrial-storage-rack";
    case "Product2.jpg":
      return "/blast-chillers";
    case "Product3.jpg":
      return "/ductable-air-conditioner";
    case "Product4.jpg":
      return "/industrial-chillers";
    case "Product5.jpg":
      return "/ripening-chambers";
    case "Product6.jpg":
      return "/dairy-cold-storage";
    case "Product7.jpg":
      return "/logistic-storage";
    case "Product8.jpg":
      return "/heat-ventillation-system";
    case "Product9.jpg":
      return "/ice-storage";
    case "Product10.jpg":
      return "/food-processing-cold-room";
    case "Product11.jpg":
      return "/vrf-system-installation";
    case "Product12.jpg":
      return "/cold-storage-turnkey-project-services";
    case "Product13.jpg":
      return "/cold-storage-cabin";
    case "Product14.jpg":
      return "/hvac-duct-installation-service";
    case "Product15.jpg":
      return "/pharmaceutical-cold-storage-construction-service";
    default:
      return "";
  }
}


function Product() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = data.filter((val) => {
    if (searchTerm === "") {
      return true;
    } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    }
    return false;
  });

  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input
            id="searchInput"
            type="text"
            placeholder="Search here..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className="template_Container">
          {filteredData.length === 0 ? (
            <div className="render-text">
              No results found for your search.
            </div>
          ) : (
            filteredData.map((val) => (
              <div className="template" key={val.id} data-aos="fade-up">
              <Link to={getImagePath(val.image)}>
              <img
                src={
                  val.image === "Product1.jpg"
                    ? industrialStorageRack
                    : val.image === "Product2.jpg"
                    ? blastChillers
                    : val.image === "Product3.jpg"
                    ? ductableAirConditioner
                    : val.image === "Product4.jpg"
                    ? industrialChillers
                    : val.image === "Product5.jpg"
                    ? ripeningChambers
                    : val.image === "Product6.jpg"
                    ? dairyColdStorage
                    : val.image === "Product7.jpg"
                    ? logisticStorage
                    : val.image === "Product8.jpg"
                    ? heatVentillation
                    : val.image === "Product9.jpg"
                    ? iceStorage
                    : val.image === "Product10.jpg"
                    ? foodRoom
                    : val.image === "Product11.jpg"
                    ? vrfSystem
                    : val.image === "Product12.jpg"
                    ? turnkeyStorage
                    : val.image === "Product13.jpg"
                    ? cabinStorage
                    : val.image === "Product14.jpg"
                    ? ductService
                    : val.image === "Product15.jpg"
                    ? pharService
                    : ""
                }
                alt=""
              />
              </Link>
              <br />
              <h3>{val.title}</h3>
              </div>
            ))
          )}
        </div>
      </div>
      <div className='info--section bg-indigo-950 text-white text-center flex' data-aos="fade-up">
        <p>&copy; 2016 Gallops Systems and Solutions</p>
      </div>
    </>
  );
}

export default Product;

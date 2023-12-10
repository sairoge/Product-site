import React from 'react';
import  Product from '.././components/ProductItem'
function industrialrack() {
  return (
    <div className='Productitem'>
        <Product
        img1 = {require("./assets/industrial-storage-rack-image1.jpg")}
        img2 = {require("./assets/industrial-storage-rack-image2.jpg")}
        img3 = {require("./assets/industrial-storage-rack-image3.jpg")}
        img4 = {require("./assets/industrial-storage-rack-image4.jpg")}
        title="Industrial Storage Rack"
        description="Recognizing the rising necessities and requirements of our respected customers,we are affianced in offering top class series of Industrial Storage Rack"
        f1="Precise design"
        f2="Durable nature"
        f3="Nominal costs"
        f4="Longer life"
        f5="Low maintenance"
        />
    </div>
  )
}

export default industrialrack
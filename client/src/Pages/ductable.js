import React from 'react'
import  Product from '.././components/ProductItem'
function ductable() {
  return (
    <div className='Productitem'>
        <Product
        img1 = {require("./assets/ductable-photo1.jpg")}
        img2 = {require("./assets/ductable-photo2.jpg")}
        img3 = {require("./assets/ductable-photo3.jpg")}
        img4 = {require("./assets/ductable-photo4.jpg")}
        title="Ductable Air Conditioner Installation Services"
        description="Backed by adroit experts, we are proficient in rendering Ductable Air Conditioner Installation Services.

        These services are extremely appreciated in market due to their timely completion. Our professionals render our offered service using the advanced machines. 
        
        Offered services are rendered in diverse forms and terms that meet on customers demand."
        f1="Longer service life"
        f2="Lower power consumption"
        f3="Hassle free performance"
        />
    </div>
  )
}

export default ductable
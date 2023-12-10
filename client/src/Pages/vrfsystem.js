import React from 'react'
import  Product from '.././components/ProductItem'
function vrfsystem() {
  return (
    <div className='Productitem'>
        <Product
        img1 = {require("./assets/vrf-system-photo1.jpg")}
        img2 = {require("./assets/vrf-system-photo2.jpg")}
        img3 = {require("./assets/vrf-system-photo3.jpg")}
        img4 = {require("./assets/vrf-system-photo4.jpg")}
        title="VRF System Installation"
        description="As a leading business name, we are engrossed in delivering VRF System Installation services to our patrons.

        Applauded owing to their exactness and timeliness, these are widely recommended amid our clients.
        
        Also, we can modify these as per the varying needs of our customers to acquire their trust."
        f1="Longer service life"
        f2="Lower power consumption"
        f3="Hassle free performance"
        />
      
    </div>
  )
}

export default vrfsystem
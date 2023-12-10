import React from 'react'
import  Product from '.././components/ProductItem'
function food() {
  return (
    <div className='Productitem'>
        <Product
        img1 = {require("./assets/food-photo1.jpg")}
        img2 = {require("./assets/food-photo2.jpg")}
        img3 = {require("./assets/food-photo3.jpg")}
        title="Food Processing Cold Room"
        description="We are actively betrothed in providing an extensive range of Ice Cream Cold Storage Room. Due to high demand, professionals make these products in diverse specifications that meet on clients demand."
        f1="Longer life service"
        f2="High strength"
        f3="Accurate dimensions"
        f4="Superior finish"
        f5="Low maintenance"
        />
      
    </div>
  )
}

export default food
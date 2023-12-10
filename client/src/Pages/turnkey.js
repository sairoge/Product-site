import React from 'react'
import  Product from '.././components/ProductItem'
function turnkey() {
  return (
    <div className='Productitem'>
        <Product
        img1 = {require("./assets/turnkey-photo1.jpg")}
        img2 = {require("./assets/turnkey-photo2.jpg")}
        img3 = {require("./assets/turnkey-photo3.jpg")}
        img4 = {require("./assets/turnkey-photo4.jpg")}
        title="Cold Storage Turnkey Project Services"
        description="Keeping in mind the varied preferences of the customers, we conduct Cold Storage Turnkey Project Services within the promised time frame.

        Our offered services are known for hassle free management, experienced experts, timely execution, effective planning, precise solutions, enhanced safety and many more attributes.
        
        It is rendered as per the various specifications and requirements of our esteemed clients"
        f1="Longer service life"
        f2="Lower power consumption"
        f3="Hassle free performance"
        />
      
    </div>
  )
}

export default turnkey
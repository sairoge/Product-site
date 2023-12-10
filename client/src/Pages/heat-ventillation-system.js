import React from 'react'
import  Product from '.././components/ProductItem'
function heat() {
  return (
    <div className='Productitem'>
        <Product
        img1 = {require("./assets/heat-photo1.jpg")}
        img2 = {require("./assets/heat-photo12.jpg")}
        img3 = {require("./assets/heat-photo3.jpg")}
        img4 = {require("./assets/heat-photo4.jpg")}
        title="Heat Ventilation System"
        description="We are reckoned among the most prominent business enterprise in the domain and are highly dedicated in offering our valued clients with Heat Ventilation System at industry leading rates"
        f1="High efficiency"
        f2="Optimum performance"
        f3="No maintenance required"
        f4="Premium finish"
        f5="Extremely durable"
        f6="Long service life"
        />
    </div>
  )
}

export default heat;
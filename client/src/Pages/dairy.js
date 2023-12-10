import React from 'react';
import  Product from '.././components/ProductItem'
function dairy() {
  return (
    <div className='Productitem'>
        <Product
        img1 = {require("./assets/dairy-photo1.jpg")}
        img2 = {require("./assets/dairy-photo2.jpg")}
        img3 = {require("./assets/dairy-photo3.jpg")}
        img4 = {require("./assets/dairy-photo4.jpg")}
        title="Dairy Cold Storage Room"
        description="Due to our deep acquaintance of this area, we are engaged in offering an extensive series of Dairy Cold Storage Room."
        f1="Longer service life"
        f2="Lower power consumption"
        f3="Hassle free performance"
        f4="Sturdy construction"
        f5="Corrosion resistance"
        />
    </div>
  )
}

export default dairy
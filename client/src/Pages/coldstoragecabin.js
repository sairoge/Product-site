import React from 'react'
import  Product from '.././components/ProductItem'
function coldstoragecabin() {
  return (
    <div className='Productitem'>
        <Product
        img1 = {require("./assets/cold-storage-cabin-photo1.jpg")}
        img2 = {require("./assets/cold-storage-cabin-photo2.jpg")}
        img3 = {require("./assets/cold-storage-cabin-photo3.jpg")}
        img4 = {require("./assets/cold-storage-cabin-photo4.jpg")}
        title="Cold Storage Cabin Construction Service"
        description="Since establishment, we have been meeting the wide needs of our clients by offering Cold Storage Cabin Construction Service.

        In order to render these construction services our adroit team of professional makes consistent improvisation of cutting-edge techniques and excellent methods of management.
        
        Additionally, these services are provided in a cost-effective manner"
        f1="Longer service life"
        f2="Lower power consumption"
        f3="Hassle free performance"
        />
      
    </div>
  )
}

export default coldstoragecabin
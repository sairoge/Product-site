import React, { useState } from 'react'
import '../ProductItem.css'

const ProductItem = ({img1,img2,img3,img4,title,description,f1,f2,f3,f4,f5,f6,f7}) => {

    const [activeImg, setActiveImage] = useState(img1)

    return (
    <div>
        <div className='product--container flex flex-col justify-between lg:flex-row  lg:items-center '>
            {/*gap-16
            gap-6*/}
            <div className='mobile-centre flex flex-col  lg:w-2/4 '>
                <img src={activeImg} alt="image" className='product--main--image h-full aspect-square object-cover no-max-width' />
                <div className='mt-10 flex flex-row justify-between gap-6 h-24'>
                    <img src={img1} alt="" className='product--image--1 w-14 h-16 rounded-md cursor-pointer secondary--image' onClick={() => setActiveImage(img1)} />
                    <img src={img2} alt="" className='product--image--2 w-14 h-16 rounded-md cursor-pointer secondary--image' onClick={() => setActiveImage(img2)} />
                    <img src={img3} alt="" className='product--image--3 w-14 h-16 rounded-md cursor-pointer secondary--image' onClick={() => setActiveImage(img3)} />
                    <img src={img4} alt="" className='product--image--4 w-14 h-16 rounded-md cursor-pointer secondary--image' onClick={() => setActiveImage(img4)} />
                </div>
            </div>  

            {/* ABOUT */}
            <div className='inside-mobile outside-mobile text-field product--text--feild flex flex-col gap-4'>
                <div>
                    {/* <span className=' text-violet-600 font-semibold'>Special Sneaker</span> */}
                    <h1 className=' text-2xl font-bold'>{title}</h1>
                </div>
                <p className='text-base w-90 text-gray-700 justified-text'>
                {description}
                </p>
                 <h6 className='text-2xl font-bold '>Features</h6>
                <div className='flex flex-col '>
                    <div className='flex flex-col items-left text-base'>
                        <span>{f1}</span>
                        <span>{f2}</span>
                        <span>{f3}</span>
                        <span>{f4}</span>
                        <span>{f5}</span>
                        <span>{f6}</span>
                        <span>{f7}</span>
                    </div>
                </div> 
            </div>
            
        </div>
        <div className='info--section bg-indigo-950 text-white text-center flex' data-aos="fade-up">
        <p>&copy; 2016 Gallops Systems and Solutions</p>
      </div>
      </div>
    )
}

export default ProductItem;
import React, { useState, useEffect, useRef } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Slide1 from '../assets/Slide1.jpg';
import Slide2 from '../assets/Slide2.jpeg';
import Slide3 from '../assets/Slide3.jpg';
import Slide4 from '../assets/Slide4.jpg';
import Slide41 from '../assets/Slide41.jpg';
import Slide12 from '../assets/Slide12.jpg';

function Slider() {
  const isMobile = window.innerWidth <= 768; 
  const mobileSlides = [
    {
      url: Slide41,
    },
    {
      url: Slide12,
    },
    {
      url: Slide3,
    },
    {
      url: Slide2,
    }
  ];
  const laptopSlides = [
    {
      url: Slide4,
    },
    {
      url: Slide1,
    },
    {
      url: Slide3,
    },
    {
      url: Slide2,
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? (isMobile ? mobileSlides.length - 1 : laptopSlides.length - 1) : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  
  const nextSlide = () => {
    const isLastSlide = currentIndex === (isMobile ? mobileSlides.length - 1 : laptopSlides.length - 1);
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    // Auto slide every 3 seconds (3000 milliseconds)
    const autoSlideInterval = setInterval(() => {
      nextSlide();
    }, 3000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(autoSlideInterval);
    };
  }, [currentIndex]); // Reset the interval whenever the currentIndex changes

  return (
    <div className='max-w-screen-xl mx-auto relative group'>
      <div
        ref={sliderRef}
        style={{ backgroundImage: `url(${isMobile ? mobileSlides[currentIndex].url : laptopSlides[currentIndex].url})` }}
        className='w-full h-[228px] md:h-[400px] bg-center  bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden md:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden md:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 md:top-2 justify-center py-2'>
        {isMobile
          ? mobileSlides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`text-2xl cursor-pointer ${
                  slideIndex === currentIndex ? 'text-blue-500' : ''
                }`}
              >
                <RxDotFilled />
              </div>
            ))
          : laptopSlides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`text-2xl cursor-pointer ${
                  slideIndex === currentIndex ? 'text-blue-500' : ''
                }`}
              >
                <RxDotFilled />
              </div>
            ))}
      </div>
    </div>
  );
}

export default Slider;
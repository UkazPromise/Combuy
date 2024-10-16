import React, { useRef } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const imagesWithHeadings = [
  {
    imageUrl: 'img/WhatsApp Image 2024-02-26 at 01.58.11_b58fcbb0.jpg',
    width: 'w-24',
    height: 'h-24'
  },
  {
    imageUrl: 'img/WhatsApp Image 2024-04-26 at 21.01.28_82234ddf.jpg',
    width: 'w-24',
    height: 'h-24'
  },
  {
    imageUrl: 'img/WhatsApp Image 2024-04-26 at 21.01.29_da93e774.jpg',
    width: 'w-24',
    height: 'h-24'
  },
  {
    imageUrl: 'img/WhatsApp Image 2024-02-26 at 01.58.11_b58fcbb0.jpg',
    width: 'w-24',
    height: 'h-24'
  },
  {
    imageUrl: 'img/WhatsApp Image 2024-02-26 at 01.58.11_b58fcbb0.jpg',
    width: 'w-24',
    height: 'h-24'
  },
  {
    imageUrl: 'img/WhatsApp Image 2024-02-26 at 01.58.11_b58fcbb0.jpg',
    width: 'w-24',
    height: 'h-24'
  }
]

const Carousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };

  return (
    <div className='w-full h-24'>
      <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
        {imagesWithHeadings.map((imageData, index) => (
          <div className='w-full h-96 flex items-center' key={index}>
              <img src={imageData.imageUrl} alt={`Slide ${index + 1}`} className="rounded-lg h-full w-full" />
            <div >
              <h3 className="text-lg">{imageData.heading}</h3>
            </div>                                                                                                                 
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel
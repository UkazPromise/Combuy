import React, { useRef } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const imagesWithHeadings = [
  {
    imageUrl: 'https://i0.wp.com/xavier.ng/wp-content/uploads/2023/10/xavier-product-detail-page-header-alpha-xl.png?w=1198&ssl=1',
    heading: 'Image 1 Heading',
    width: 'w-24',
    height: 'h-32'
  },
  {
    imageUrl: 'https://i0.wp.com/xavier.ng/wp-content/uploads/2023/10/xavier-product-detail-page-header-alpha-m-1.png?w=1198&ssl=1',
    heading: 'Image 2 Heading',
    width: 'w-24',
    height: 'h-32'
  },
  {
    imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AK7aPaAoWFUtIVd79IrNdCIqqiVJptk9o2BFvfUYhT6ATYEd8YCF6K64XgvOjwq1_1yOpzw4f0T46t--gC4efmlRjnzJNImgQA=s1600',
    heading: 'Image 3 Heading',
    width: 'w-24',
    height: 'h-32'
  },
  {
    imageUrl: 'https://m.media-amazon.com/images/I/71DL+S6ihBL._AC_SX679_.jpg',
    heading: 'Image 4 Heading',
    width: 'w-24',
    height: 'h-32'
  },
  {
    imageUrl: 'https://m.media-amazon.com/images/I/711+0tgn+6L._AC_SY300_SX300_.jpg',
    heading: 'Image 5 Heading',
    width: 'w-24',
    height: 'h-32'
  },
  {
    imageUrl: 'https://m.media-amazon.com/images/I/71ctRE34RuL.__AC_SY300_SX300_QL70_FMwebp_.jpg',
    heading: 'Image 6 Heading',
    width: 'w-24',
    height: 'h-32'
  }
]

const Carousel = () => {
  const sliderRef = useRef(null);

  const play = () => {
    sliderRef.current.slickPlay();
  };

  const pause = () => {
    sliderRef.current.slickPause();
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };

  return (
    <div className='w-full'>
      <h2>Slider</h2>
      <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
        {imagesWithHeadings.map((imageData, index) => (
          <div className='w-full h-[300px] flex items-center' key={index}>
              <img src={imageData.imageUrl} alt={`Slide ${index + 1}`} className="rounded-lg ml-4 h-full object-cover mx-auto" style={{ maxWidth: '400px' }} />
            <div >
              <h3 className="text-lg">{imageData.heading}</h3>
            </div>
          </div>
        ))}
      </Slider>
      <div style={{ textAlign: 'center' }}>
        <button className="button" onClick={play}>
          Play
        </button>
        <button className="button" onClick={pause}>
          Pause
        </button>
      </div>
    </div>
  )
}

export default Carousel
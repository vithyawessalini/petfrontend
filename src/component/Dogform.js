import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    style: { overflow: 'hidden' },
    appendDots: dots => (
      <div style={{ 
        position: 'absolute',
        bottom: '10px',
        width: '100%',
        textAlign: 'center',
        zIndex: 2, /* Ensure dots are above the image */
      }}>
        <ul style={{ padding: 0, margin: 0 }}>
          {dots}
        </ul>
      </div>
    ),
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          src="https://strayanimalfoundationindia.org/wp-content/uploads/2022/08/Uj-kalu-copy-2.jpg"
          alt="Image 1"
          style={{ width: '100%', height: '600px' }}
        />
        <div className="carousel-text">
          <h2>A BETTER LIFE FOR INDIA’S STRAY ANIMALS</h2>
          <p>Stray animals roam the streets of India without food, veterinary care or refuge from the elements. Help us give them a chance.</p>
          <Link to="/donate">
          <button>Donate</button>
        </Link>&emsp;&emsp;
        <Link to="/adopt">
          <button>Adopt</button>
        </Link>
        </div>
      </div>
      <div>
        <img
          src="https://strayanimalfoundationindia.org/wp-content/uploads/2022/08/6Y9A0029-copy.jpeg"
          alt="Image 1"
          style={{ width: '100%', height: '600px' }}
        />
        <div className="carousel-text">
          <h2>HOUSING, CARE & MORE FOR INDIA'S MOST VULNERABLE</h2>
          <p>CARE works alongside India’s local shelters to rescue, rehabilitate, vaccinate, and house<br></br> these strays in need.</p>
          <Link to="/volunform">
          <button>Volunteer</button>
        </Link>
        </div>
      </div>
      <div>
        <img
          src="https://strayanimalfoundationindia.org/wp-content/uploads/2022/08/Uj-Wcows-copy-1.jpg"
          alt="Image 2"
          style={{ width: '100%', height: '600px' }}
        />
        <div className="carousel-text">
          <h2>PUP TRAVELED 11900 MILES TO HIS FOREVER HOME</h2>
          <p>Kala has the coolest shoes. (And, well, he’s a dog, so you know this is going<br></br> to be interesting!)</p>
          <Link to="/passive">
          <button>Passive adoption</button>
        </Link>
        </div>
      </div>
      <div>
        <img
          src="https://strayanimalfoundationindia.org/wp-content/uploads/2023/04/Wizardop-website.jpg"
          alt="Image 3"
          style={{ width: '100%', height: '600px' }}
        />
        <div className="carousel-text">
          <h2>Rescue</h2>
          <p>Sick, injured, or abandoned animals are rescued by HAS every day, and if any cruelty has been done, it can be reported</p>
          <button>Click Me</button>
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;

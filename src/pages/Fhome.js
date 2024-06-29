import React,{useEffect,useState} from 'react';
import Navbar from '../component/fnav';
import Contact from '../component/Contactus';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image from '../image/hydro.jpg';
import image1 from '../image/image1.jpg';
import image2 from '../image/image2.jpeg';
import image3 from '../image/image3.jpg';
import image4 from '../image/image4.jpg';
const Fhome = () => {
  const [rescue, setrescue] = useState(0);
  const [adopted, setAdopted] = useState(0);
  const [volunteers, setVolunteers] = useState(0);
  const stopAt = 15000;  
  const incrementStep = 50;  
  const intervalDelay = 5;  
  const astopAt = 3000; 
  const aincrementStep = 50;  
  const aintervalDelay = 30;  
  const vstopAt = 375; 
  const vincrementStep = 1;  
  const vintervalDelay = 3;  
  useEffect(() => {
    const timer = setInterval(() => {
      if (rescue < stopAt) {
        setrescue(rescue + incrementStep);
      } else {
        clearInterval(timer);
      }
    }, intervalDelay);
    return () => {
      clearInterval(timer); // Cleanup the timer when the component unmounts
    };
  }, [rescue, stopAt, incrementStep]);
  useEffect(() => {
    const timer = setInterval(() => {
      if (adopted < astopAt) {
        setAdopted(adopted + aincrementStep);
      } else {
        clearInterval(timer);
      }
    }, aintervalDelay);
    return () => {
      clearInterval(timer); // Cleanup the timer when the component unmounts
    };
  }, [adopted, astopAt, aincrementStep]);
  useEffect(() => {
    const timer = setInterval(() => {
      if (volunteers < vstopAt) {
        setVolunteers(volunteers + vincrementStep);
      } else {
        clearInterval(timer);
      }
    }, vintervalDelay);
    return () => {
      clearInterval(timer); // Cleanup the timer when the component unmounts
    };
  }, [volunteers, vstopAt, vincrementStep]);
  const carouselItems = [
    {
      image: image1,
      text: 'A BETTER LIFE FOR INDIA’S STRAY ANIMALS',
	    text1:'Stray animals roam the streets of India without food, veterinary care or refuge from the elements. Help us give them a chance.',
      button:'Donate',link:'/donate',link1:'/adoptform',
      button1:'Adopt',
    },
    {
      image: image2,
      text: 'HOUSING, CARE & MORE FOR INDIAS MOST VULNERABLE',
      text1:'CARE works alongside India’s local shelters to rescue, rehabilitate, vaccinate, and house these strays in need.',
      button:'Volunteer',link:'/volunteer',link1:'/donate',
      button1:'Donate'
    },
    {
      image: image3,
      text: 'PUP TRAVELED 11900 MILES TO HIS FOREVER HOME',
      text1:'Kala has the coolest shoes. (And, well, he’s a dog, so you know this is going     to be interesting!)',
      button:'Passive adoption',link:'/passiveadopt',link1:'/adoptform',
      button1:'Adopt'
    },
    {
      image: image4,
      text: 'Rescue',
      text1:'Sick, injured, or abandoned animals are rescued by HAS every day, and if any cruelty has been done, it can be reported',
      button:'Rescue',link:'/rescue',link1:'/cruelty',
      button1:'Cruelty',
    },
  ];
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,      
    autoplaySpeed: 1000, 
  };
  return (
    <div className="Home-page">
        <Navbar/>
        <br></br><br></br><br></br>
        <hr></hr>
        <Slider {...carouselSettings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item.image} alt={`Service ${index + 1}`} />
            <div className="carousel-text">{item.text}<br/>{item.text1}</div>
            <div className="carousel-button">
            <Link to={item.button}>
            <button>{item.button}</button>
            </Link>
            &emsp;
            <Link to={item.button1}>
            <button>{item.button1}</button>
            </Link>
            </div>
          </div>
        ))}
      </Slider>
    <div><br></br><br></br>
       <img src='https://strayanimalfoundationindia.org/wp-content/uploads/2022/06/80Millionstraya.png.webp'style={{width:'210px'}}></img>
       <img src='https://strayanimalfoundationindia.org/wp-content/uploads/2022/06/62millionstraydogs.png.webp'style={{width:'210px'}}></img>
        <img src='https://strayanimalfoundationindia.org/wp-content/uploads/2022/06/9millionstraycats.png.webp'style={{width:'210px'}}></img>
        <img src='https://strayanimalfoundationindia.org/wp-content/uploads/2022/06/8millionstraysinshelters.png.webp'style={{width:'210px'}}></img>
        <img src='https://strayanimalfoundationindia.org/wp-content/uploads/2022/06/peoplebelieve.png.webp'style={{width:'210px'}}></img>
        <img src='https://strayanimalfoundationindia.org/wp-content/uploads/2022/06/50pctreliquishmentrate.png.webp'style={{width:'210px'}}></img>
        </div>
        <section className="hero">
        <div className="hero-text">
          <h1 style={{fontFamily:"sans-serif",fontSize:"45px"}}>In Memory of Charlie</h1>
          <p style={{fontSize:'18px',color:'black', lineHeight: '1.5'}}>Charlies Animal Rescue Centre – CARE is an animal shelter established in January 2013, with the aim of providing timely medical aid to injured and ill animals of the street. <br></br>
            No animal left behind is our motto. <br></br>
            CARE is also home to many dogs,cats, rabbits,ducks, hens, pigs, guinea pigs, birds and terrapins. <br></br>
            The inspiration behind the trust, is 15 year old Charlie, a differently abled, 3 legged Indian Dog who was an established figure in the field of canine therapy since 2005.</p>
        </div>
        <div className="hero-image"><br></br>
          <img src="https://i0.wp.com/charlies-care.com/wp-content/uploads/2017/04/charlie-png.png?w=1389&ssl=1" alt="Charlie" />
        </div>
      </section>
      <section className="services"><br></br>
    <h2 className="section-title">What We Do</h2><br></br><br></br>
    <div className="cards-container">
        <div className="service-card">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyPdUriFtctjcgbEbqZK41ukbn6hr9SjTvlg&usqp=CAU'alt='imagee'></img>
          <h3>CARE-Animal-Rescue-Vehicle</h3>
          <p style={{ fontSize: '16px',fontFamily: "Footlight MT Light" }}>Animal Rescue Vehicle Service</p>
          <Link to={`/activity#activity-rescue`}>Learn More</Link>
        </div>
        <div className="service-card">
        <img src='https://i0.wp.com/charlies-care.com/wp-content/uploads/2017/11/Inpatient-Facility.png?w=481&ssl=1'alt='imagee'></img>
          <h3>Inpatient Facility for your Pets</h3>
          <p style={{ fontSize: '16px',fontFamily: "Footlight MT Light" }}>Inpatient Facility</p>
          <Link to={`/activity#activity-treatment`}>Learn More</Link>
        </div>
        <div className="service-card">
            <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/adopt-me-pet-02032021.jpg'alt='imagee'></img>
          <h3>Adopt your next pet at CARE</h3>
          <p style={{ fontSize: '16px',fontFamily: "Footlight MT Light" }}>Adoption</p>
          <Link to={`/activity#activity-adoptions`}>Learn More</Link>
        </div>
        <div className="service-card">
            <img src='  https://www.rchsd.org/wp-content/uploads/2021/12/IMG_0886.jpg' alt='imagee'></img>
          <h3>Canine Therapy</h3>
          <p style={{ fontSize: '16px' ,fontFamily: "Footlight MT Light"}}>Canine Therapy is interaction between human and pet</p>
          <Link to={`/activity#activity-canine`}>Learn More</Link>
        </div>
        <div className="service-card">
            <img src='https://i0.wp.com/charlies-care.com/wp-content/uploads/2020/09/Humane-Education.jpg?w=481&ssl=1'alt='imagee'></img>
          <h3>Humane Education</h3>
          <p style={{ fontSize: '16px' ,fontFamily: "Footlight MT Light"}}>Humane Education and awarness</p>
          <Link to={`/activity#activity-education`}>Learn More</Link>
        </div>
        <div className="service-card">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMm3bz7uZmL0V8AC36fRZG92v_3WgleFwqtJV-62b2QSBuYTIIwxCbHdUgQlZ8VQTMWhE&usqp=CAU'alt='imagee'></img>
          <h3>Passive Adoption at Charlie CARE</h3>
          <p style={{ fontSize: '16px',fontFamily: "Footlight MT Light" }}>Passive Adoption</p>
          <Link to={'/passive'}>Learn More</Link>
        </div>
        <div className="service-card">
            <img src={image} alt='imagee'></img>
          <h3>CARE Hydrotherapy</h3>
          <p style={{ fontSize: '16px',fontFamily: "Footlight MT Light" }}>Hydrotherapy for paraplegic and accident cases</p>
          <Link to={`/activity`}>Learn More</Link>
        </div>
        <div className="service-card">
            <img src='https://media.istockphoto.com/id/1397843652/photo/shot-of-a-young-family-sitting-on-the-living-room-floor-with-their-dog.jpg?s=612x612&w=0&k=20&c=BGc6ni6nCioLHknTO5Z_N3K9csC_GhmGZywaepTtGFA='alt='imagee'></img>
          <h3>More Animal and Pet services at Charlies</h3>
          <p style={{ fontSize: '16px',fontFamily: "Footlight MT Light" }}>And More...</p>
          <Link to={`/activity#activity-community`}>Learn More</Link>
        </div></div>
      </section>
      <section className="statistics">
        <div className="stats-container">
          <div className="stat">
            <p style={{ fontSize: '100px' }}>{rescue}</p> <p style={{ color: '#faa819' }}>ANIMALS RESCUED</p>
          </div>
          <div className="stat">
            <p style={{ fontSize: '100px' }}>{adopted}</p> <p style={{ color: '#02aaa8' }}>ANIMALS ADOPTED</p>
          </div>
          <div className="stat">
            <p style={{ fontSize: '100px' }}>{volunteers}</p><p style={{ color: '#be1987' }}>VOLUNTEERS</p>
          </div>
        </div>
      </section>
      <section className="how-to-help">
        <h2>How You Can Help</h2>
        <div className="help-options">
          <div className="help-option">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpvXcyd9UXpR7IXhCZ5tXvHOdJF0hE5Tu8m4I8ozQbONknV10ufw-DCMh05quNz75E35Q&usqp=CAU" alt="Donate" />
            <p style={{ fontSize: '18px' }}>Donate</p>
          </div>
          <div className="help-option">
            <img src="https://st2.depositphotos.com/18644982/44115/v/450/depositphotos_441154134-stock-illustration-black-silhouette-heart-shape-outline.jpg" alt="Adopt" />
            <p style={{ fontSize: '18px' }}>Adopt</p>
          </div>
          <div className="help-option">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1n3tGChQqTXPQUIujVTUspeXqOuCm5fseXUml57e-BJvaJz_asCWmAFmzyaTwwkCcIC4&usqp=CAU" alt="Volunteer" />
            <p style={{ fontSize: '18px' }}>Volunteer</p>
          </div>
        </div>
      </section>
     <Contact/>
    </div>
  );
};
export default Fhome;

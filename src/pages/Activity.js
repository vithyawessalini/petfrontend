import React ,{useState,useEffect} from 'react';
import Navbar from '../component/Nav';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Activity = () => {
  const location = useLocation();


  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);
    const activityCards = [
        {
          imageSrc:
            'https://www.rspcaqld.org.au/~/media/rspca/wildlife/rspca-rescue-unit-banner-image-612x300px.ashx', // Replace with your image URL
          text: 'Animal Rescue',
        },
        {
          imageSrc:
            'https://mcgeestreet.com/wp-content/uploads/2020/01/Canine-Rehab.jpg', // Replace with your image URL
          text: 'Animal Rehabilitation',
        },
        {
          imageSrc:
            'https://i0.wp.com/sanantonioreport.org/wp-content/uploads/2022/07/ScottBall_san-antonio-pets-alive-sapa-acs-animal-care-services-cosa-pets-dogs-adoption-summer-7-7-2022_11-scaled.jpg?fit=1200%2C800&ssl=1', // Replace with your image URL
          text: 'Adoption & Release',
        },
        {
            imageSrc:
              'https://network.bestfriends.org/sites/default/files/page_images/hero/EnzoBarryVanderable_LF_IMG_4119.jpg', // Replace with your image URL
            text: 'Human Awareness & Education',
          },
          {
            imageSrc:
              'https://udservices.org/wp-content/uploads/2020/07/Girl-in-Wheelchair-w_-Dog.jpg', // Replace with your image URL
            text: 'Canine & Feline Therapy',
          },
          {
            imageSrc:
              'https://sihma.org.za/photos/shares/CH1.jpg', // Replace with your image URL
            text: 'Community Outreach & Events',
          },
      ];
       const [Activity] = useState([
        {
            imgsr:'https://www.dogsforgood.org/app/uploads/2020/10/good-advice-rescue-dog.jpg',
            id:"rescue",
            title:'Rescue',
            text:'CARE is equipped with three ambulances on the road which picks animals in distress off the streets and brings them to the outpatient department for immediate medical attention. Apart from the ambulance, CARE also accepts individual rescuers who bring ill, injured & abandoned animals directly to the shelter and admits them for further treatment.'
        },
        {
            imgsr:'https://images.squarespace-cdn.com/content/v1/59933811197aeaa6c78fa74d/1502905017556-QAS6WPJDFAVMN361UEJA/ARCFULLLOGOjpeg.jpg',
            id:"treatment",
            title:'Treatment & Rehabilitation',
            text:'Once the animal is diagnosed and provided with immediate & emergency treatment which includes surgery, amputation and other life saving procedures as required, the animal is housed in the treatment section where he /she is allowed to recuperate and recover with constant monitoring by the team of vets. Healing & Restoring of functionality is the prime mission of our rehabilitation efforts where physiotherapy and laser therapy are employed when necessary to speed up the process. They are also provided with wholesome food with protein supplements to hasten the recovery process.',
        },
        {
            imgsr:'https://assets.telegraphindia.com/telegraph/2022/May/1651775500_new-project-2022-05-06t000759-121.jpg',
            id:'adoptions',
            title:'Adoptions & Release',
            text:'Following the completion of treatment & recovery, community animals are dropped back in the area where they were picked up from. Abandoned pet dogs are moved to the adoption unit, where they are socialized and made ready for adoption to a good home. New pet parents are screened, counselled & matched with the pet that is right for them & their family. Follow up checks with strict protocol is followed so the animal is ensured of a good life.'
        },
        {
            imgsr:'https://i0.wp.com/charlies-care.com/wp-content/uploads/2017/11/28Young-angels-1-1.jpg?w=1145&ssl=1',
            id:'education',
            title:'Human Education & Awareness',
            text:'At the heart of any welfare activity, lies education & awareness.While rehabilitation & rescue efforts are ongoing & necessary, it can be equated to mopping up after an open tap. Education efforts can be likened to closing the tap. With more awareness & sensitizing the citizens of tomorrow, there can be far reaching, long term and positive consequences for animals and mankind. ',
        },
        {
            imgsr:'https://s7d2.scene7.com/is/image/TWCNews/animaltherapy',
            id:'canine',
            title:'Canine & Feline therapy',
            text:'Therapy dog who has worked as a therapist with the children of Vishwas, a school for differently abled children run by the Indian Air Force, Srishti Special Academy & KaraforKids. His new vocation lasted for about 8 years where he helped these children gain confidence at social interactions.His legacy is being carried forward by our other therapy dogs who are observed and chosen for their gentle demeanor & trained as canine therapists.'
        },
        {
            imgsr:'https://i0.wp.com/charlies-care.com/wp-content/uploads/2020/09/CARE-Community-Outreach-1.jpg?w=1278&ssl=1',
            id:'community',
            title:'Community Outreach & Events',
            text:'At Care, we believe that there must be constant interplay between the shelter and our society & community, as it can be a mutually beneficial exercise. Hence we have several events both at the shelter premises and outside. The stakeholders of these events vary over a wide range from children, adults, corporate companies, art connoisseurs, music lovers, and pet parents.The events range from summer camps, storytelling, corporate day outs, art exhibitions, book sales, music concerts, garage sales, flea markets & so on.'
        },
       ]);
    return(
        <div className="about-us" style={{ position: 'relative', width: '1263px', height: '550px' }}>
        <Navbar /><br /><br /><br />
        <img
          src="https://img.freepik.com/premium-photo/golden-retriever-dog-wearing-sunglasses-against_670382-126685.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696982400&semt=ais
          "
          alt="About Us"
          className="image-with-text"
          style={{ width: '100%', height: '100%', opacity: 0.8 }} /* Adjust opacity as needed */
        />
        <div className="text-overlay" style={{ position: 'absolute', top: 0, left: 0, height: '100%', display: 'flex', alignItems: 'center', paddingLeft: '280px', paddingTop: '130px' }}>
          <h2 style={{ color: '#A93226', fontSize: '50px' }}>Activities</h2>
        </div>
        <div className='Activity'><br />
        <div className="activity-cards">
        {activityCards.map((card, index) => (
          <div key={index} className="activity-card">
            <div className="card">
              <img src={card.imageSrc} alt={`Activity ${index + 1}`} />
              <div className="card-text">
                <p>{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div><br></br>
    <div className="video-gallery-container">
        <div className="video-gallery">
          {Activity.map((activity, index) => (
            <div key={index} className={`video ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="video-player">
                <img src={activity.imgsr} alt='loading' />
              </div>
              <div className="video-description" id={`activity-${activity.id.toLowerCase()}`}>
                <h3 style={{ fontSize: '30px', fontFamily: "Footlight MT Light" }}>{activity.title}</h3><br></br>
                <p style={{lineHeight:'1.5'}}>{activity.text}</p> 
              </div>
            </div>
          ))}
        </div>

      </div><h1 style={{textAlign:'center'}}>YOUR PET ADOPTION JOURNEY WITH US</h1>
      <div className='ad-page'>
        
        <div className='ad-card1'>
          <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/adopt-me-pet-02032021.jpg' style={{width:'600px'}}></img>
        </div>
        <div className='ad-card'>
        <div className="ad-container">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSZHn8OXNz092ot4HIOpoq5zkFP1vjMakOZv9NtnHvcJFVpkXny" alt="Search Pet Image" className='ad-image'/>
            <p className="ad-p"><b>Search Pet</b><br />Adopt a dog or cat who's right for you. Simply enter your city above to start your search.</p>
        </div>
        <div className="ad-container">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQnSmQdUwCPvCz-EFjkMZKAu97hlJpjXQEA2iVHf1IZ4BqxwUHi" alt="Search Pet Image" className='ad-image'/>
            <p className="ad-p"><b>Connect</b><br />Once you find a pet, click "show number" to get contact info for their pet parent or rescue. Contact them to learn more about how to meet and adopt the pet.</p>
        </div>
        <div className="ad-container">
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRgVTXbYf11o4es-qFT3K204ZIGqywLMk4I-lLoanO8oCeiwFF6" alt="Search Pet Image" className='ad-image'/>
            <p className="ad-p"><b>AdoptLove</b><br />The rescue or pet parents will walk you through their adoption process. Prepare your home for the arrival of your fur baby to help them adjust to their new family.</p>
        </div>
        <div className="ad-container">
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR8cIiiMLSZ022l7Y9RE76Ve4Bxs2Xukc4V5JEUCgCneXLlpMcO" alt="Search Pet Image" className='ad-image'/>
            <p className="ad-p"><b>Free Vet Consultation</b><br />This will help your pet to settle down in its new home, once you complete the Adoption journey reach out to us for free vet consultation.</p>
        </div>
        </div>
      </div>
      <div className="tcard" style={{ backgroundColor: "#f9c301", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1 style={{ textAlign: "center" }}>Join the CARE Team. Be a volunteer.</h1>
        <p style={{ textAlign: "center" ,fontSize:'20px'}}>Let’s make Tamilnadu safer for animals together.</p>
       <Link to="/volunteer"><button style={{ width: "200px" }}>Get Started</button></Link> 
      </div>
   
    </div>
    );
};
export default Activity;
import React from 'react';
import Navbar from '../component/Nav';
import Team from '../component/Team';
const AboutUs = () => {
  return (
    <div className="about-us" style={{ position: 'relative', width: '1263px', height: '550px' }}>
      <Navbar /><br /><br /><br />
      <img
        src="https://img.freepik.com/premium-photo/there-is-small-dog-wearing-sunglasses-scarf-generative-ai_900833-9891.jpg"
        alt="About Us"
        className="image-with-text"
        style={{ width: '100%', height: '100%', opacity: 0.8 }} /* Adjust opacity as needed */
      />
      <div className="text-overlay" style={{ position: 'absolute', top: 0, left: 0, height: '100%', display: 'flex', alignItems: 'center', paddingLeft: '400px', paddingTop: '50px' }}>
        <h2 style={{ color: '#A93226', fontSize: '50px' }}>About Us</h2>
      </div>
      <section className='services'>
      <div className="about-card" style={{ marginTop: '50px' }}>
        <p style={{ lineHeight: '1.5'}}>
          We aim to provide life-saving veterinary care on par with private veterinary setups to all animals,
          irrespective of their ownership status. CARE has a rescue helpline, animal ambulance services,
          and a fully equipped veterinary trauma care unit. No animal left behind is our main motto.
          CARE strives to provide dignity to animals, who are old, blind, paraplegic & suffering from chronic diseases
          and allow them to live out their lives at the shelter in a safe & peaceful environment.
          CARE is home to many dogs, cats, rabbits, ducks, hens, pigs, guinea pigs, birds, and terrapins.
          Apart from rescue & shelter services, CARE also provides adoptions, humane education in schools,
          animal cruelty prevention & control, and volunteering opportunities.
        </p>
      </div></section>
      <div className="shelter-facilities" style={{ backgroundColor: 'white', paddingLeft: '300px',paddingRight:'340px', marginTop: '20px' }}>
        <h2 style={{textAlign:'center'}}>CARE Shelter Facilities</h2>
        <p style={{ lineHeight: '1.5'}}>
          - Helpline & Ambulance service for animals in distress from 9 am to 5 pm.
          <br />
          - Inpatient facility for sick and injured animals.
          <br />
          - A fully equipped medical unit with OPD, Operation Theatre, X Ray, Scanning facility, and Laser Machine.
          <br />
          - Housing, rehabilitation, and re-homing of abandoned animals.
          <br />
          - Adoption of pups, kittens, dogs, cats, rabbits & guinea pigs.
          <br />
          - An exclusive Cattery with a separate Cat treatment unit and kitten nursery.
          <br />
          - Holiday Boarding facility for dogs and cats.
        </p>
      </div>
      <Team />
    </div>
  );
};
export default AboutUs;

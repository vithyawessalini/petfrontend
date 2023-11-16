import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Team = () => {
  const [Activity] = useState([
    {
      imgsr:'https://i0.wp.com/charlies-care.com/wp-content/uploads/2017/11/MC-Vijaylakshmi.png?w=473&ssl=1',
      title:'MC Vijaylakshmi',
      text:'The catwoman of CARE, she brings with her, years of expertise in cat care and cat related issues. Her weakness for all things feline earned her the name of “Cat Lady”. With over two decades of experience in animal welfare, she has a way with cats and they take to her immediately. She has been a pillar of strength for CARE.'       
    },
    {
      imgsr:'https://i0.wp.com/charlies-care.com/wp-content/uploads/2017/11/Chitra-Narayanan.png?w=473&ssl=1',
      title:'Chitra Narayanan',
      text:'With over 24 years of experience with animals under her belt, Chitra is also a very talented artist. Her artwork can be found all over the Shelter, lending it a charm of its own.While the Founder Trustees were brainstorming about starting an animal NGO, it was Chitra who came up with the brilliant idea of dedicating it to Charlie and calling it CHARLIES ANIMAL RESCUE CENTRE with the acronym CARE. It didn’t end with that. She then conceptualized the logo using the definitive features of Charlie which was then polished by Ananth Shankar, the noted cartoonist.',
    },
    {
      imgsr:'https://i0.wp.com/charlies-care.com/wp-content/uploads/2017/11/Jaysal.png?w=526&ssl=1',
      title:'Jaysal Jagadish',
      text:'Jaysal Jagadish is the Founder of Play Pet Boarding Pvt Ltd, Vybgior Events and Marketing solutions, and CEO of Unplugged India, a web design company. With immense experience in systems leadership, he brings his expertise in the field of marketing, design and events to CARE, also putting processes and documentation in place, his way of contributing to a cause that is very close to his heart.'
    },
    {
      imgsr:'https://i0.wp.com/charlies-care.com/wp-content/uploads/2017/11/Mansi.png?w=541&ssl=1',
      title:'Dr Mansi Yalamalli',
      text:'Dr Mansi Yalamalli, a dentist by profession with a masters in Public Health Dentistry, has a flair for content writing, design and social media and a passion for animals. She is the face behind CARE’s social media platforms and is also involved in conceptualizing and organizing events for CARE.'
    }
  ]);
  return (
    <div>
    <div className="im">
            <div className="vi">
              {Activity.map((activity, index) => (
                <div key={index} className={`team ${index % 2 === 0 ? 'left' : 'right'}`}>
                  <div style={{textAlign:'center',paddingLeft:'100px'}}>
                    <img src={activity.imgsr} alt='loading' />
                  </div>
                  <div style={{textAlign:'center',paddingLeft:'100px',paddingTop:'20px',paddingRight:'100px'}} >
                    <h3 style={{ fontSize: '30px', fontFamily: "Footlight MT Light" }}>{activity.title}</h3><br></br>
                    <p style={{lineHeight:'1.5'}}>{activity.text}</p><hr/>
                  </div>
                  
                </div>
             
              ))}
            </div>
          </div>
     <div className='tcard' style={{backgroundColor:'#efefef',padding:'20px'}}>
         <h1 style={{textAlign:'center'}}> VETERINARY TEAM</h1>
     <p  style={{textAlign:'center',lineHeight:'1.5', paddingRight:'200px',paddingLeft:'300px'}}> 
     The current Veterinary team at CARE consists of  Dr.Harshitha K,,  B.VSc and Dr. Ajay Dhanda, M.VSc(Surgery)<br/>
      The team is extremely dedicated to their profession and will go that extra mile for any animal in distress.
      </p>  
     </div>
      <div className='tcard' style={{padding:'20px'}}>
           <h1 style={{textAlign:'center'}}> SHELTER STAFF</h1>
       <p  style={{textAlign:'center',lineHeight:'1.5'}}> Sharma Lal A.S. – Manager -Operations<br/>
        Keerthan Vignesh – Manager -Animal Care and PR<br/>
        Deepak – Asst. Manager- Utilities and PR<br/>
        Athira BG – Animal Care Officer<br/>
        Aniruddha Ravindra – Animal Welfare & Education Officer<br/>
        Ms.Shashikala – Accounts/Cashier<br/>
        Prashanth- Front Office Assistant<br/>
        Mrs.Uma – Front Office Asst. and Rabies Helpline Assistant
        </p>  
       </div>
       <div className='tcard' style={{backgroundColor:'#efefef',padding:'20px',paddingLeft:'300px',paddingRight:'300px'}}>
           <h1 style={{textAlign:'center'}}> SHELTER SUPPORT STAFF</h1>
       <p  style={{textAlign:'center',lineHeight:'1.5'}}> 
       <b>Supervisor</b> – Bharat <br/>
       <b> Medical Attenders </b>– Sreenivas Reddy, Ramanji, Lokesh, Rajesh, Ravikumar, Shivaram, Harikrishna, RN Murthy, Pavan, Vijay, Ramesh P, Govindaraj, Gopalappa, Narasimha Murthy, Ramesh K, Ramaiah and Prakash.<br/>
       <b>Housekeeping</b> – Seshamma and SudhaRani.<br/>
       <b>Security</b> – Roshan Lal<br/>
       <b>Ambulance Drivers</b> – Munikrishnappa , Surya and Venkatesh
        </p>  
       </div>
       <div className="tcard" style={{ backgroundColor: "#f9c301", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1 style={{ textAlign: "center" }}>Join the CARE Team. Be a volunteer.</h1>
        <p style={{ textAlign: "center" ,fontSize:'20px'}}>Let’s make Tamilnadu safer for animals together.</p>
       <Link to="/volunteer"><button style={{ width: "200px" }}>Get Started</button></Link> 
      </div>

       </div>
  );
};

export default Team;

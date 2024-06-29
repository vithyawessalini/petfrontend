import React,{useState} from "react";
import Navbar from '../component/fnav';
import image from "../image/qr.jpeg";
import { Link } from 'react-router-dom';
import visit from '../image/visit.jpeg'
const Fdonate=()=>{
    const [Activity] = useState([
        {
            imgsr: visit,
            title:'Visit Us',
            text:'Take a tour of the shelter and spend time with our permanent residents.Please note: MONDAY’S HOLIDAY'
        },
        {
            imgsr:'https://www.littlewhitedogco.com/wp-content/uploads/2019/10/volunteer-1200x630.jpg',
            title:'Volunteer',
            text:'Volunteering is scientifically proven to increase your lifespan.Sign up and join our team as a volunteer here.Volunteer Sign Up Form Link:',
            link1:'/volunteer'
        },
        {
            imgsr:'https://cdn.akc.org/515549583.jpg',
            title:'Adopt',
            text:' Change two lives, yours and an animal’s by choosing to adopt.Dog/puppy adoption form and Kitten Adoption Form.Fill the CARE adoption screening form and await a call from the CARE adoption team.',
            link1:'/adoptform'
        },
        {
            imgsr:'https://wikidog.info/wp-content/uploads/2023/04/28389bafedff47878701612c3e01e426.jpg',
            title:'Passive Adoption',
            text:'If you don’t have the bandwidth to adopt an animal, you can passively adopt an animal of your choice by contributing towards its food, medicine and shelter requirements on a monthly/ annual basis. You can receive updates about your passively adopted pet and can also visit when you have the time and spend some precious moments with your chosen pet.',
            link1:'/passive',
        },
        {
            imgsr:'https://media.istockphoto.com/id/1450670816/photo/hungry-dog-with-blinking-eye-is-waiting-for-feeding.jpg?s=612x612&w=0&k=20&c=ms3HWkrFIqxOH3FV7LrbvLy_K2bdL0eyZvO32_8vlw4=',
            title:'Sponsor a day’s feed',
            text:'Sponsor a day’s feed of all the shelter animals to mark a special or significant occasion in your life.Click here to get started:'
        },
        {
            imgsr:'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/035/089/original/dogs.jpg?1653385705',
            title:'Fundraise',
            text:'You can create your own personalized Birthday or Wedding fundraiser for CARE.     Click below to get started:'
        },
        {
            imgsr:'https://i0.wp.com/charlies-care.com/wp-content/uploads/2021/01/Collaborate.png?w=1080&ssl=1',
            title:'Collaborate',
            text:'If you would like to collaborate with us, please fill the form below and we will get in touch with you.  Click below to get started:'
        },
        {
            imgsr:'https://i0.wp.com/charlies-care.com/wp-content/uploads/2021/01/Gift-of-good.png?w=1080&ssl=1',
            title:'The Gift of Good',
            text:'Give a meaningful gift to your friends and family by contributing towards a shelter animal on their behalf. They will be emailed a certificate with a personalised message from you.Give them the Gift of Good!  Click below to get started:'
        },
       ]);
    return(
        <div className="about-us" style={{ position: 'relative', width: '1263px', height: '550px' }}>
        <Navbar /><br /><br /><br />
        <img
          src="https://images.squarespace-cdn.com/content/v1/600c6339f983552f0a55a563/1611505339832-AYHNDKBCFFK25YM5Y2FV/COVER.jpg"
          alt="About Us"
          className="image-with-text"
          style={{ width: '100%', height: '100%' }} /* Adjust opacity as needed */
        />
        <div className="text-overlay" style={{ position: 'absolute', top: 0, left: 0, height: '100%', display: 'flex', alignItems: 'center', paddingLeft: '280px' }}>
          <h2 style={{ color: '#A93226', fontSize: '50px' }}>Donate</h2>
          </div>
          <div className="text-overlay" style={{ position: 'absolute', top: 100, left: 0, height: '100%', display: 'flex', alignItems: 'center',paddingLeft: '80px'  }}>
          <h1>Always give without remembering and<br/>&emsp; always receive without forgetting</h1>
          </div>
          <div className="text-overlay-btn" style={{ position: 'absolute', top: 190, left: 0, height: '100%', display: 'flex', alignItems: 'center', paddingLeft: '290px' }}>
        <Link to='/qr'>
          <button className="donate-button">Donate</button>
        </Link>
      </div>

            
          <div className="video-gallery-container">
          <div className="video-gallery">
            {Activity.map((activity, index) => (
              <div key={activity.id} className={`video ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="video-player">
                    <img src={activity.imgsr} alt="imagee" />
                </div>
                <div className="video-description">
                  <h3 style={{fontSize: '30px',fontFamily: "Footlight MT Light"}}>{activity.title}</h3><br></br>
                  <p >{activity.text}</p>
                  {activity.link1 && (
                    <a href={activity.link1}>Click me</a>
                  )}
                </div>
              </div>
            ))}
          <div style={{padding:'50px',backgroundColor:'white',width:'100%',borderRadius:'5px'}}>
            <img src="https://i0.wp.com/charlies-care.com/wp-content/uploads/2021/01/Donate.png?w=1080&ssl=1" alt="imagee"style={{width:'600px',height:'350px'}}></img>
            <br></br>
            <p style={{fontSize:'20px'}}>Every contribution Counts.</p>
            <p style={{fontSize:'20px'}}>To make a quick donation visit :</p>
            <h1>Pay through PAYTM:<a href="https://paytm.com/"style={{textDecoration:'none'}}>&emsp;Click here</a></h1>
            <img src={image} style={{width:'400px'}}></img>
          </div></div></div>
          <div className="tcard" style={{ backgroundColor: "#f9c301", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1 style={{ textAlign: "center",paddingLeft:'100px',paddingRight:'100px' }}>“Love cannot remain by itself — it has no meaning. Love has to be put into action and that action is service.”</h1>
        <h1 style={{ paddingLeft:'800px' }}>– Mother Teresa</h1>
      </div>
        </div>
    );
};
export default Fdonate;
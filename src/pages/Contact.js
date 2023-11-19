import React from "react";
import Navbar from "../component/Nav";
const Contactpage = () => {
  return (
    <div className="about-us" style={{ position: 'relative', width: '1263px', height: '100%' }}>
      <Navbar /><br /><br /><br />
      <img
        src="https://media.forbescapretto.com/266/2021/1/19/ContactUs.1920x1440.png"
        alt="About Us"
        className="image-with-text"
        style={{ width: '100%', height: '100%' }}
      />
      <br />
      <h2 style={{ color: '#266b5e', fontSize: '30px', fontFamily: 'Roboto Slab', textAlign: 'center' }}>CONTACT US</h2>
      <div className="contact-container">
        <div className="contact-left">
        <div className="card1">
            <h3>Send a Message</h3>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Your Message"></textarea>
            <button>Send</button>
          </div>
        </div>
        <div className="contact-right">
        <div className="card1">
            <h3>Address</h3>
            <p>
              Survey No. 124, Mitteganahalli Cross,
              </p>
             <p>
              Hitur Village, Trichy,
              </p>
             <p>
              Tamilnadu, 560064
            </p>
          </div>
          <div className="card1">
            <h3>Rescue Center Timings</h3>
            <p>9:30am – 5:30pm</p>
          </div>
          <div className="card1">
            <h3>Business Hours</h3>
            <p>Monday-Friday: 9:00 AM - 5:00 PM</p>
            <p>Saturday: 10:00 AM - 2:00 PM</p>
            <p>Sunday: Closed for visitors</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contactpage;

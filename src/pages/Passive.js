import React from 'react';
import Navbar from '../component/Nav';
import Listofdogs from './Listofdogs';
const Passive = () => {
  return (
    <div>
      <Navbar/>
    
    <div >
    <br/><br/><br/><br/><br/>
      <h1 style={{textAlign:'center'}}>PASSIVE ADOPTIONS</h1>
      
    <div style={{paddingLeft:'200px',paddingRight:'100px',fontSize:'19px'}}>
      <p>Have you ever wanted a pet but for some reason couldn’t have one?</p>
      <p>Maybe your apartment doesn’t allow animals or maybe you have a family member who’s allergic, but whatever the reason, you simply can’t have a pet of your own.</p>
      <p>Or maybe you already have one too many at home.</p>
      <p>CARE gives you the chance to become a godparent to an animal in need via passive adoption.</p>
      <p>The highlight of our shelter, is without a doubt, our permanent residents. There are people who have sworn that every time you spend time with them and walk out, it feels like they have completed a session of therapy. The animals at CARE have fought their own battles, and emerged as true heroes who take it as their duty to spread love among visitors.</p>
      <p>They are heroes who don’t wear capes.</p>
      <hr/>
    </div>
    <Listofdogs/>
    </div></div>
  );
};

export default Passive;

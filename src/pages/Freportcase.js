import React,{useState,useEffect} from 'react';
import Navbar from '../component/fnav';
import { Link } from 'react-router-dom';
import Contact from '../component/Contactus';
const FreportCase = () => {
  
  const [count, setCount] = useState(10);
  const stopAt = 1000;  
  const incrementStep = 1; 
  const intervalDelay = 100; 

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < stopAt) {
        setCount(count + incrementStep);
      } else {
        clearInterval(timer);
      }
    }, intervalDelay);

    return () => {
      clearInterval(timer); 
    };
  }, [count, stopAt, incrementStep]);

  return (
<div style={{backgroundColor:'#FDFAF6'}}>
  <Navbar/>   
    <div className="report-case">
      <div className="left-side">
        <div className="card2">
          <h3 style={{color:'black'}}>Report A Rescue</h3>
          <Link to="/rescueform" className='link'>
          <p style={{color:'black'}}>If you notice an injured/ ill animal in distress that needs to be rescued, please </p>
          <b>Click here</b>
          </Link>
        </div>

        <div className="card2">
          <h3 style={{color:'black'}}>Report Cruelty</h3>
          <Link to="/crueltyform" className='link'>
          <p style={{color:'black'}}>If you are witness to animal cruelty and would like to report it, please</p>
          <b>Click here</b> 
          </Link>
        </div>
      </div>

      <div className="right-side">
        <img
          src="https://i0.wp.com/charlies-care.com/wp-content/uploads/2021/01/Process.png?w=900&ssl=1"
          alt="Imagee"
        />
      </div>
    </div><Contact/>
    </div>
  );
};

export default FreportCase;

import React from 'react';
import './Style.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Activity from './pages/Activity';
import Donate from './pages/Donate';
import ReportCase from './pages/ReportCase';
import Contactpage from './pages/Contact';
import PassiveAdoption from './pages/Passiveadoption';
import VolunteerForm from './component/Volunteerform';
import CrueltyForm from './component/Crueltyform';
import RescueForm from './component/Rescueform';
import Passive from './pages/Passive';
import AdoptionForm from './component/AdoptionForm';
import AdoptDog from './pages/Adoptdog';
import MultiStepForm from './component/Samp';
import Dogform from './component/Dogform';
import Login from './component/Login';
import Signup from './component/Signup';
import Qr from './component/Qr';
import Profile from './component/Profile';
import Fabout from './pages/Fabout';
import Factivity from './pages/Factivity';
import Fadoptdog from './pages/Fadoptdog';
import Fcontact from './pages/Fcontact';
import Fdonate from './pages/Fdonate';
import Fhome from './pages/Fhome';
import FreportCase from './pages/Freportcase';
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Fhome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fabout" element={<Fabout />} />
        <Route path="/activity" element={<Activity/>}/>
        <Route path="/factivity" element={<Factivity/>}/>
        <Route path="/donate" element={<Donate/>}/>
        <Route path="/fdonate" element={<Fdonate/>}/>
        <Route path="/report" element={<ReportCase/>}/>
        <Route path="/freport" element={<FreportCase/>}/>
        <Route path="/contact" element={<Contactpage/>}/>
        <Route path="/fcontact" element={<Fcontact/>}/>
        <Route path="/passive" element={<PassiveAdoption/>}/>
        <Route path="/volunteer" element={<VolunteerForm/>}/>
        <Route path="/crueltyform" element={<CrueltyForm/>}/>
        <Route path="/rescueform" element={<RescueForm/>}/>
        <Route path="/passiveadopt" element={<Passive/>}/>
        <Route path='/adoptform' element={<AdoptionForm/>}/>
        <Route path='/adoptdog' element={<AdoptDog/>}/>
        <Route path='/fadoptdog' element={<Fadoptdog/>}/>
        <Route path='/samp' element={<MultiStepForm/>}/>
        <Route path='/dog' element={<Dogform/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign' element={<Signup/>}/>
        <Route path='/qr' element={<Qr/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      <ScrollToTop />
    </Router>
  );
}

export default App;

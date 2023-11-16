import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { BASE_URL } from '../config';
const Signup = () => {
  const containerStyle1 = {
    backgroundColor: '#9a616d',
    minHeight: '106vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const cardStyle1 = {
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  };

  const imageStyle1 = {
    display: 'flex',
    alignItems: 'center', // Center vertically
    justifyContent: 'center', // Center horizontally
    width: '500px',
    borderRadius: '1rem 0 0 1rem',
  };
  

  const formStyle1 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: ' 2rem',
    color: 'black',
  };

  const boxStyle1 = {
    border: '1px solid #ccc',
    borderRadius: '1rem',
    padding: '2rem',
    backgroundColor: 'white',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
    width: '800px',
    height: '525px',
  };


  const inputStyle1 = {
    marginBottom: '1rem',
    width: '100%',
    padding: '1rem',
    fontSize: '1rem',
    border: '1px solid black',
    borderRadius: '0.25rem',
  };

  const buttonStyle1 = {
    width: '80%',
    padding: '1rem',
    fontSize: '1rem',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '0.25rem',
    border: 'none',
    cursor: 'pointer',
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address,setAddress]=useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (
      name === '' ||
      email === '' ||
      password === '' ||
      confirmpassword===''||
      contactNumber === '' ||
      address===''
    ) {
      Swal.fire('Please fill in all fields','','warning');
    } else {
      try {
        const response = await fetch(`${ BASE_URL }/sign`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
         
            name,
            email,
            password,
            confirmpassword,
            contactNumber,
            address,
          }),
        });

        if (response.ok) {
          // Registration successful, now navigate based on userType
          navigate('/login');
        } else {
          const data = await response.json();
          console.error(data); // Log the error response to the console
          Swal.fire('An error occurred during registration','','error');
        }
      } catch (error) {
        console.error(error); // Log any unhandled exceptions to the console
        Swal.fire('An error occurred during registration','','error');
      }
    }
  };

  return (
    <div style={containerStyle1}>
      <div style={boxStyle1}>
        <div style={cardStyle1}>
          <div className="col-md-6 col-lg-7 d-none d-md-block"><br/><br/>
             <img
              src="https://mallmaverick.imgix.net/web/property_managers/42/properties/56/all/20221114212803/5_SPCA-Feature-1500x1440_BLUE3.gif"
              alt="signup form"
              className="img-fluid"
              style={imageStyle1}
            />
          </div>
          <div className="col-md-7 col-lg-5 d-flex align-items-center">
            <div style={formStyle1}>
              <form onSubmit={handleSignup} className="signup">
              

                <div className="form-outline mb-4 custom-input">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    style={inputStyle1}
                    required
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                
                <div className="form-outline mb-4 custom-input">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    style={inputStyle1}
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4 custom-input">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    style={inputStyle1}
                    required
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4 custom-input">
                  <input
                    type="password"
                    id="confirmpassword"
                    name="confirmpassword"
                    style={inputStyle1}
                    required
                    placeholder="confirmPassword"
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4 custom-input">
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    style={inputStyle1}
                    required
                    placeholder="Contact Number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4 custom-input">
                <textarea
                    name="address"
                    style={inputStyle1}
                    value={address}
                    placeholder="Address"
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
                </div>
                <div className="pt-1 mb-4">
                  <button style={buttonStyle1} type="submit">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

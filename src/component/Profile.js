import React from 'react';
import Navbar from './Nav';
import { BASE_URL } from '../config';
import { useState ,useEffect} from 'react';
function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user details from the server using the JWT token
    const token = localStorage.getItem('token');
    if (token) {
      fetch(`${ BASE_URL }/getprofile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error('Error fetching user details:', error);
        });
    }
  }, []);
  const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',     
    paddingTop:'100px' ,
  };

  return (
    <div className="app">
      <div className="app-main">
        <Navbar />
        <div className="profile">
          <div className="profile-header">
            <div className="profile-info">
            <div style={imageContainerStyle}>
              <img
                className="profile-picture"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&usqp=CAU"
                alt="Profile"
              />
            </div>
            {user && (
                
        <div>
          
       <br></br>
              <p className="profile-h" style={{fontFamily: "Footlight MT Light",textAlign:'center',fontSize:'30px',fontWeight:'bolder'}}>PROFILE</p>
              <br></br>
              <hr/><br></br>
              <p className="profile-other"style={{textAlign:'center'}}>Name&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {user.name}</p>
              <hr />
            
              <p className="profile-other"style={{textAlign:'center'}}>Email&emsp;&emsp;&emsp;&emsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {user.email}</p>
              <hr />
              <p className="profile-other"style={{textAlign:'center'}}>Contact number&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp; {user.contactNumber}</p>
              <hr />
              
             
              </div>
      )}
            </div>

          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

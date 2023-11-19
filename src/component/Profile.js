import React from 'react';
import Navbar from './Nav';
import { BASE_URL } from '../config';
import { useState ,useEffect} from 'react';
function Profile() {
  const [user, setUser] = useState(null);
  useEffect(() => {
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
    paddingTop:'50px' ,
  };
  return (
    <div className="app">
      <div className="app-main">
        <Navbar />
        <div className='app9'>
        <div className="profile">
          <div className="profile-header">
            <div className="profile-info">
            <div style={imageContainerStyle}>
              <img
                className="profile-picture"
                src="https://e7.pngegg.com/pngimages/798/436/png-clipart-computer-icons-user-profile-avatar-profile-heroes-black.png"
                alt="Profile"
              />
            </div>
            {user && (
            <div>
              <p className="profile-h" style={{fontFamily: "Footlight MT Light",textAlign:'center',fontSize:'30px',fontWeight:'bolder'}}>PROFILE</p>
              <hr/>
              <p className="profile-other"style={{textAlign:'center'}}>Name&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {user.name}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>
              <hr />
              <p className="profile-other"style={{textAlign:'center'}}>Email&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {user.email}</p>
              <hr />
              <p className="profile-other"style={{textAlign:'center'}}>Contact number&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{user.contactNumber}&emsp;&emsp;&nbsp;&nbsp;</p>
              <hr />
              </div> )}
            </div>
          </div>
        </div>
      </div>
    </div></div>
  );
}
export default Profile;

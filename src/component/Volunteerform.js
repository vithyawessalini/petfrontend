import React, { useState } from 'react';
import './Samp.css';
import Swal from 'sweetalert2';
import { BASE_URL } from '../config';
const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    dob: '',
    phoneNumber: '',
    address: '',
    education: '',
    occupation: '',
    organization: '',
    skills: '',
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: fieldValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.email === '' ||
      formData.name === '' ||
      formData.dob === '' ||
      formData.phoneNumber === '' ||
      formData.address === '' ||
      formData.education === '' ||
      formData.occupation === '' ||
      formData.organization === '' ||
      formData.skills === '' ||
      !formData.agreement
    ) {
      Swal.fire('Please fill in all fields', '', 'warning');
    } else {
      try {
        const response = await fetch(`${ BASE_URL }/vsign`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          Swal.fire('Volunteer data submitted successfully', '', 'success');
          setFormData({
            email: '',
            name: '',
            dob: '',
            phoneNumber: '',
            address: '',
            education: '',
            occupation: '',
            organization: '',
            skills: '',
            agreement: false,
          });
        } else {
          const data = await response.json();
          if (response.status === 409) {
            Swal.fire('An error occurred: Duplicate entry', '', 'warning');
          } else {
            console.error(data);
            Swal.fire('An error occurred during submission', '', 'error');
          }
        }
      } catch (error) {
        console.error(error);
        Swal.fire('An error occurred during submission', '', 'error');
      }
    }
  };

  return (
    <div className="volun" style={{ paddingLeft: '590px' }}>
      <div className="volunteer-form-container">
        <div className="container2">
          <form onSubmit={handleSubmit}>
            <h1 style={{ textAlign: 'center', color: 'maroon' }}>Volunteer form</h1>
            <hr />

            <div className="container2">
              <div className="form-row">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  style={{ width: '250px' }}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  style={{ width: '250px' }}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="container2">
              <div className="form-row">
                <label>DOB</label>
                <input
                  type="date"
                  name="dob"
                  style={{ width: '250px' }}
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  style={{ width: '250px' }}
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="container2">
              <div className="form-row">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  style={{ width: '250px' }}
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Education</label>
                <input
                  type="text"
                  name="education"
                  style={{ width: '250px' }}
                  value={formData.education}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="container2">
              <div className="form-row">
                <label>Occupation</label>
                <input
                  type="text"
                  name="occupation"
                  style={{ width: '250px' }}
                  value={formData.occupation}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Organization/Institution(optional)</label>
                <input
                  type="text"
                  name="organization"
                  style={{ width: '250px' }}
                  value={formData.organization}
                  onChange={handleChange}
                />
              </div>
            </div>

            <label>What skills and experience do you possess that you think will benefit CARE?</label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              required
            />

            <div className="form-column agreement-label">
              <input
                type="checkbox"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
                style={{ display: 'inline-flex', width: '30px' }}
                required
              />
              <span>
                I have accurately and truthfully completed this Volunteer Application and Agreement
              </span>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VolunteerForm;

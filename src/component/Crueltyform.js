import React, { useState, useRef } from 'react';
import Swal from 'sweetalert2';
import { BASE_URL } from '../config';
const CrueltyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    description: '',
    location: '',
    file: null,
  });

  const nameInputRef = useRef();
  const phoneNumberInputRef = useRef();
  const emailInputRef = useRef();
  const descriptionInputRef = useRef();
  const fileInputRef = useRef();
  const locationInputRef = useRef();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const fieldValue = type === 'file' ? (files && files.length > 0 ? files[0] : null) : value;

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
      formData.phoneNumber === '' ||
      formData.description === '' ||
      formData.file === null ||
      formData.location === ''
    ) {
      Swal.fire('Please fill in all fields', '', 'warning');
    } else {
      try {
        const formDataToSend = new FormData();
        formDataToSend.append('email', formData.email);
        formDataToSend.append('name', formData.name);
        formDataToSend.append('file', formData.file);
        formDataToSend.append('phoneNumber', formData.phoneNumber);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('location', formData.location);

        const response = await fetch(`${ BASE_URL }/cform`, {
          method: 'POST',
          body: formDataToSend,
        });

        if (response.ok) {
          Swal.fire('Cruelty Form submitted successfully', '', 'success');
          setFormData({
            name: '',
            phoneNumber: '',
            email: '',
            description: '',
            location: '',
            file: null,
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
    <div className='cruel' style={{ paddingLeft: '630px' }}>
      <div className="cruelty-form-container">
        <div className="container2">
          <form onSubmit={handleSubmit}>
            <h1 style={{ textAlign: 'center' }}>Cruelty Form</h1>
            <hr />
            <div className="container2">
              <div className='form-row'>
                <label>
                  Your Name
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{ width: '250px' }}
                    required
                    ref={nameInputRef}
                  />
                </label>
              </div>
              <div className='form-row' style={{ paddingLeft: '30px' }}>
                <label>
                  Phone Number
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    style={{ width: '240px' }}
                    required
                    ref={phoneNumberInputRef}
                  />
                </label>
              </div>
            </div>
            <div className="container2">
              <div className='form-row'>
                <label>
                  Email ID
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ width: '250px' }}
                    required
                    ref={emailInputRef}
                  />
                </label>
              </div>
              <div className='form-row' style={{ paddingLeft: '30px' }}>
                <label>
                  Image/Video
                  <input
                    type="file"
                    name="file"
                    onChange={handleChange}
                    style={{ width: '250px', padding: '6px' }}
                    ref={fileInputRef}
                  />
                </label>
              </div>
            </div>
            <label>
              Please describe in detail about the nature of animal Cruelty.
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                style={{ width: '540px' }}
                required
                ref={descriptionInputRef}
              />
            </label>
            <label>
              Exact Location
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                style={{ width: '540px' }}
                required
                ref={locationInputRef}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CrueltyForm;

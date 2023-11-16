// ImageUpload.js (React component for image upload)

import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      if (!selectedImage) {
        alert('Please select an image');
        return;
      }

      const formData = new FormData();
      formData.append('image', selectedImage);

      const response = await axios.post('http://localhost:3000/upload', formData);

      if (response.data.message) {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
      alert('Error uploading image');
    }
  };

  return (
    <div>
      <h1>Image Upload</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
};

export default ImageUpload;

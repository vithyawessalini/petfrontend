import React from 'react';

const Modal = ({ dog, onClose }) => (
    <div className="modal">
      <div className="modal-content">
        <h2>Adoption Profile for {dog.name}</h2>
        <div>
          <img src={dog.image} alt={dog.name} />
          <p>Description: {dog.description}</p>
          <p>Breed: {dog.breed}</p>
          <p>Sex: {dog.sex}</p>
          <p>Age: {dog.age}</p>
          <p>Color: {dog.color}</p>
          <p>Size: {dog.size}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
export default Modal;

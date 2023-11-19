import React, { useState ,useEffect} from 'react';
import './Samp.css';  
import Swal from 'sweetalert2';
import {BASE_URL} from '../config';
function Adoptform() {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep(step + 1);
  };
  const previousStep = () => {
    setStep(step - 1);
  };
  const [formData, setFormData] = useState({
    name:'',
    dateOfBirth:'',
    gender:'',
    occupation:'',
    address:'',
    phoneNumber:'',
    altPhoneNumber:'',
    email:'',
    dog:'',
    specificAnimal:'',
    reasonForAdopting:'',
    livingWith:'',
    childrenBelow13:'',
    comfortableWithPets:'',
    houseType:'',
    houseOwnership:'',
    ownerApproval:'',
    ownerPhoneNumber:'',
    firstTimePetOwner:'',
    houseCheck:'',
    callBackTime:'',
    agreement: false
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
        !formData.name||
        !formData.dateOfBirth||
        !formData.gender||
        !formData.occupation||
        !formData.address||
        !formData.phoneNumber||
        !formData.altPhoneNumber||
        !formData.email
    ) {
      Swal.fire('Please fill in all fields', '', 'warning');
    } else {
      try {
        const response = await fetch(`${ BASE_URL }/aform`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      if (response.ok) {
        Swal.fire('Adoption form submitted successfully', '', 'success');
        setFormData({
          name:'',
          dateOfBirth:'',
          gender:'',
          occupation:'',
          address:'',
          phoneNumber:'',
          altPhoneNumber:'',
          email:'',
          dog:'',
          specificAnimal:'',
          reasonForAdopting:'',
          livingWith:'',
          childrenBelow13:'',
          comfortableWithPets:'',
          houseType:'',
          houseOwnership:'',
          ownerApproval:'',
          ownerPhoneNumber:'',
          firstTimePetOwner:'',
          houseCheck:'',
          callBackTime:'',
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
const handleInputChange = (e) => {
  const { name, value, type, checked } = e.target;
  if (type === 'checkbox') {
    setFormData({
      ...formData,
      [name]: checked,
    });
  } else {
    setFormData({
      ...formData,
      [name]: value,
    });
  }
};
  const [setOtherReason] = useState('');
  useEffect(() => {
    document.body.style.backgroundColor = '#f0f0f0'; 
    return () => {
      document.body.style.backgroundColor = ''; 
    };
  }, []); 
  const handleInputChange1 = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === 'reasonForAdopting' && value !== 'Other') {
      setOtherReason('');
    }
  };
  return (
    <div className="container3">
    <form id="msform">
      <ul id="progressbar" style={{ textAlign: 'center'  }}>
          {[1, 2, 3].map((stepNumber) => (
            <li
              key={stepNumber}
              className={step === stepNumber ? 'active' : ''}
              onClick={() => setStep(stepNumber)}
            >
            </li>
          ))}
        </ul>
      {step === 1 && (
        <fieldset>
          <div className="form-group"><img
          src="https://www.petfinder.com/shelters/US/MN/MN334/logo.jpg"
          style={{ height: "100px",paddingLeft:'140px' }}
          alt="Petfinder Logo"
        />
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="dateOfBirth">Date of Birth *</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender *</label>
        <div className="radio-group">
          <input
            type="radio"
            id="male"
            name="gender"
            value="Male"
            checked={formData.gender === 'Male'}
            onChange={handleInputChange}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="Female"
            checked={formData.gender === 'Female'}
            onChange={handleInputChange}
          />
          <label htmlFor="female">Female</label>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="occupation">Occupation *</label>
        <input
          type="text"
          id="occupation"
          name="occupation"
          value={formData.occupation}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address (FULL POSTAL ADDRESS) *</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number *</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="altPhoneNumber">Alternative Phone Number</label>
        <input
          type="text"
          id="altPhoneNumber"
          name="altPhoneNumber"
          value={formData.altPhoneNumber}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email ID *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
            <input
              type="button"
              name="previous"
              className="previous action-button"
              value="Previous"
              onClick={previousStep}
            />
            <input
              type="button"
              name="next"
              className="next action-button"
              value="Next"
              onClick={nextStep}
            />
          </fieldset>
        )}
         {step === 2 && (
          <fieldset>
          <div className="form-group">
  <label>1. I am interested in adopting *</label>
  <div className="radio-group">
          <input
            type="radio"
            id="dog"
            name="dog"
            value="dog"
            checked={formData.dog === 'dog'}
            onChange={handleInputChange}
          />
          <label htmlFor="dog">Dog</label>
          <input
            type="radio"
            id="puppy"
            name="dog"
            value="puppy"
            checked={formData.dog === 'puppy'}
            onChange={handleInputChange}
          />
          <label htmlFor="puppy">Puppy</label>
        </div>
</div>
<div className="form-group">
  <label>2. In case you are interested in adopting a specific animal you've seen on our social media, please mention the name of the animal.</label>
  <input
    type="text"
    id="specificAnimal"
    name="specificAnimal"
    value={formData.specificAnimal}
    onChange={handleInputChange1}
  />
</div>
<div className="form-group">
  <label>3. Reason for adopting? *</label>
  <select
    id="reasonForAdopting"
    name="reasonForAdopting"
    value={formData.reasonForAdopting}
    onChange={handleInputChange}
    
  >
    <option value="" disabled>Select a reason</option>
    <option value="Companionship">Companionship</option>
    <option value="Family Pet">Family Pet</option>
    <option value="Guardian">As a Guard Dog</option>
    <option value="Farm">For a Farm</option>
  </select>
</div>
<div className="form-group">
  <label>4. Are you living with *</label>
  <div className="radio-group">
    <input
      type="radio"
      id="family"
      name="livingWith"
      value="Family"
      checked={formData.livingWith === 'Family'}
      onChange={handleInputChange}
    />
    <label htmlFor="family">Family</label>
    <input
      type="radio"
      id="friendsRoommates"
      name="livingWith"
      value="Friends/ Roommates"
      checked={formData.livingWith === 'Friends/ Roommates'}
      onChange={handleInputChange}
    />
    <label htmlFor="friendsRoommates">Friends/ Roommates (Go to question 6)</label>
<br/>
    <input
      type="radio"
      id="alone"
      name="livingWith"
      value="Alone"
      checked={formData.livingWith === 'Alone'}
      onChange={handleInputChange}
    />
    <label htmlFor="alone">Alone (Go to question 6)</label>
    <input
      type="radio"
      id="otherLivingArrangement"
      name="livingWith"
      value="Other"
      checked={formData.livingWith === 'Other'}
      onChange={handleInputChange}
    />
     <label htmlFor="otherLivingArrangement">Other:</label>
{formData.livingWith === 'Other' && (
  <input
    type="text"
    id="otherLivingText"
    name="otherLivingText"
    value={formData.otherLivingText}
    onChange={handleInputChange}
  />
)}
  </div>
</div>
<div className="form-group">
  <label htmlFor="familyMembers">5 A. How many members are there in your family? *</label>
  <input
    type="number"
    id="familyMembers"
    name="familyMembers"
    value={formData.familyMembers}
    onChange={handleInputChange}    
  />
</div>
<div className="form-group">
  <label>5 B. Are there any children below 13 years? *</label>
  <div className="radio-group">
    <input
      type="radio"
      id="childrenYes"
      name="childrenBelow13"
      value="Yes"
      checked={formData.childrenBelow13 === 'Yes'}
      onChange={handleInputChange}     
    />
    <label htmlFor="childrenYes">Yes</label>
    <input
      type="radio"
      id="childrenNo"
      name="childrenBelow13"
      value="No"
      checked={formData.childrenBelow13 === 'No'}
      onChange={handleInputChange}      
    />
    <label htmlFor="childrenNo">No</label>
  </div>
</div>
<div className="form-group">
  <label>6. Is everyone you live with comfortable with the decision of having pets at home? *</label>
  <div className="radio-group">
    <input
      type="radio"
      id="comfortableYes"
      name="comfortableWithPets"
      value="Yes"
      checked={formData.comfortableWithPets === 'Yes'}
      onChange={handleInputChange}      
    />
    <label htmlFor="comfortableYes">Yes</label>
    <input
      type="radio"
      id="comfortableNo"
      name="comfortableWithPets"
      value="No"
      checked={formData.comfortableWithPets === 'No'}
      onChange={handleInputChange}     
    />
    <label htmlFor="comfortableNo">No</label>
    <input
      type="radio"
      id="comfortableMaybe"
      name="comfortableWithPets"
      value="Maybe"
      checked={formData.comfortableWithPets === 'Maybe'}
      onChange={handleInputChange}      
    />
    <label htmlFor="comfortableMaybe">Maybe</label>
  </div>
</div>
<div className="form-group">
  <label>7. House Type *</label>
  <div className="radio-group">
    <input
      type="radio"
      id="independent"
      name="houseType"
      value="Independent"
      checked={formData.houseType === 'Independent'}
      onChange={handleInputChange}     
    />
    <label htmlFor="independent">Independent</label>
    <input
      type="radio"
      id="apartment"
      name="houseType"
      value="Apartment"
      checked={formData.houseType === 'Apartment'}
      onChange={handleInputChange}     
    />
    <label htmlFor="apartment">Apartment</label>
    <input
      type="radio"
      id="otherHouseType"
      name="houseType"
      value="Other"
      checked={formData.houseType === 'Other'}
            onChange={handleInputChange}
    />
    <label htmlFor="otherHouseType">Other:</label>
  </div>
</div>
 <input
              type="button"
              name="previous"
              className="previous action-button"
              value="Previous"
              onClick={previousStep}
            />
            <input
              type="button"
              name="next"
              className="next action-button"
              value="Next"
              onClick={nextStep}
            />
          </fieldset>
        )}
        {step === 3 && (
          <fieldset>
<div className="form-group">
  <label>8. House Ownership *</label>
  <div className="radio-group">
    <input
      type="radio"
      id="ownHouse"
      name="houseOwnership"
      value="Own"
      checked={formData.houseOwnership === 'Own'}
      onChange={handleInputChange}
    />
    <label htmlFor="ownHouse">Own</label>
    <input
      type="radio"
      id="rentedHouse"
      name="houseOwnership"
      value="Rented"
      checked={formData.houseOwnership === 'Rented'}
      onChange={handleInputChange}     
    />
    <label htmlFor="rentedHouse">Rented</label>
    <input
      type="radio"
      id="otherOwnership"
      name="houseOwnership"
      value="Other"
      checked={formData.houseOwnership === 'Other'}
      onChange={handleInputChange}     
    />
    <label htmlFor="otherOwnership">Other:</label>
  </div>
</div>
<div className="form-group">
  <label>8 A. If not owned, have you informed & received the approval of the owner. *</label>
  <div className="radio-group">
    <input
      type="radio"
      id="approvalYes"
      name="ownerApproval"
      value="Yes"
      checked={formData.ownerApproval === 'Yes'}
      onChange={handleInputChange}     
    />
    <label htmlFor="approvalYes">Yes</label>
    <input
      type="radio"
      id="approvalNo"
      name="ownerApproval"
      value="No"
      checked={formData.ownerApproval === 'No'}
      onChange={handleInputChange}      
    />
    <label htmlFor="approvalNo">No</label>
    <input
      type="radio"
      id="approvalNotApplicable"
      name="ownerApproval"
      value="Not Applicable (Own)"
      checked={formData.ownerApproval === 'Not Applicable (Own)'}
      onChange={handleInputChange}      
    />
    <label htmlFor="approvalNotApplicable">Not Applicable (Own)</label>
  </div>
</div>
<div className="form-group">
  <label htmlFor="ownerPhoneNumber">8 B. Please give the owner's phone number.</label>
  <input
    type="text"
    id="ownerPhoneNumber"
    name="ownerPhoneNumber"
    value={formData.ownerPhoneNumber}
    onChange={handleInputChange}
  />
</div>
<div className="form-group">
  <label>9 . Are you a first-time pet owner? *</label>
  <div className="radio-group">
    <input
      type="radio"
      id="firstTimePetOwnerYes"
      name="firstTimePetOwner"
      value="Yes (Go to 10 A)"
      checked={formData.firstTimePetOwner === 'Yes (Go to 10 A)'}
      onChange={handleInputChange}     
    />
    <label htmlFor="firstTimePetOwnerYes">Yes </label>
    <input
      type="radio"
      id="firstTimePetOwnerNo"
      name="firstTimePetOwner"
      value="No"
      checked={formData.firstTimePetOwner === 'No'}
      onChange={handleInputChange}     
    />
    <label htmlFor="firstTimePetOwnerNo">No</label>
  </div>
</div>
<div className="form-group">
  <label>10. Would you be willing to have your house checked (Physical/virtual) in advance of adopting a pet? *</label>
  <div className="radio-group">
    <input
      type="radio"
      id="houseCheckYes"
      name="houseCheck"
      value="Yes"
      checked={formData.houseCheck === 'Yes'}
      onChange={handleInputChange}
    />
    <label htmlFor="houseCheckYes">Yes</label>
    <input
      type="radio"
      id="houseCheckNo"
      name="houseCheck"
      value="No"
      checked={formData.houseCheck === 'No'}
      onChange={handleInputChange}  
    />
    <label htmlFor="houseCheckNo">No</label>
  </div>
</div>
<div className="form-group">
  <label htmlFor="callBackTime">11. Convenient time for a call back from CARE</label>
  <input
    type="text"
    id="callBackTime"
    name="callBackTime"
    value={formData.callBackTime}
    onChange={handleInputChange}
  />
  </div>
  <div className="form-group">
  <label htmlFor="agreement" style={{ display: 'inline-flex'}}>
  <input
  type="checkbox"
  id="agreement"
  name="agreement"
  onChange={handleInputChange}
      style={{ display: 'inline-flex' ,width:'30px'}}
    /> I agree to the terms and conditions
  </label>
</div>
  <input
              type="button"
              name="previous"
              className="previous action-button"
              value="Previous"
              onClick={previousStep}
            />
            <button
              className="submit action-button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </fieldset>
        )}
      </form>
    </div>
  );
}

export default Adoptform;
import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import image from "../image/qr.jpeg";
import { BASE_URL } from "../config";
const Qr = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    paymentImage: null,
  });

  const nameInputRef = useRef();
  const phoneNumberInputRef = useRef();
  const emailInputRef = useRef();
  const paymentImageRef = useRef();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const fieldValue =
      type === "file" ? (files && files.length > 0 ? files[0] : null) : value;

    setFormData({
      ...formData,
      [name]: fieldValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.email === "" ||
      formData.name === "" ||
      formData.phoneNumber === "" ||
      formData.paymentImage === null
    ) {
      Swal.fire("Please fill in all fields", "", "warning");
    } else {
      try {
        const formDataToSend = new FormData();
        formDataToSend.append("email", formData.email);
        formDataToSend.append("name", formData.name);
        formDataToSend.append("paymentImage", formData.paymentImage);
        formDataToSend.append("phoneNumber", formData.phoneNumber);

        const response = await fetch(`${ BASE_URL }/dform`, {
          method: "POST",
          body: formDataToSend,
        });

        if (response.ok) {
          Swal.fire(
            "Donation Form submitted successfully",
            "",
            "success"
          );
          setFormData({
            name: "",
            phoneNumber: "",
            email: "",
            paymentImage: null,
          });
        } else {
          const data = await response.json();
          if (response.status === 409) {
            Swal.fire(
              "An error occurred: Duplicate entry",
              "",
              "warning"
            );
          } else {
            console.error(data);
            Swal.fire(
              "An error occurred during submission",
              "",
              "error"
            );
          }
        }
      } catch (error) {
        console.error(error);
        Swal.fire(
          "An error occurred during submission",
          "",
          "error"
        );
      }
    }
  };

  return (
    <div
      className="donation-page"
      style={{
        backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/000/464/040/original/vector-dog-seamless-pattern-theme-bone-paw-foot-print-for-use-as-wallpaper-or-background.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="donation-card">
        <div className="card1">
          <h2>Donation Form</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              style={{ width: "520px" }}
              value={formData.name}
              onChange={handleChange}
              ref={nameInputRef}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              style={{ width: "520px" }}
              value={formData.email}
              onChange={handleChange}
              ref={emailInputRef}
              required
            />

            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              style={{ width: "520px" }}
              value={formData.phoneNumber}
              onChange={handleChange}
              ref={phoneNumberInputRef}
              required
            />

            <label htmlFor="paymentImage">Payment Proof:</label>
            <input
              type="file"
              id="paymentImage"
              name="paymentImage"
              style={{ width: "520px" }}
              onChange={handleChange}
              accept="image/*"
              ref={paymentImageRef}
              required
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div className="qr-code-card">
        <div className="card1">
          <img
            src={image}
            alt="QR Code"
            style={{ width: "300px", height: "300px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Qr;

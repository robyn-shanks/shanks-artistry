import React, { useState } from 'react';
import './ContactPage.scss'; // Import CSS file for styling
import Moose from "../../assets/paintings/Alberta-field.jpg";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    userEmail: '',
    artistEmail: '',
    subjectHeader: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend)
    console.log(formData);
  };

  return (
    <>
      <div className="hero">
        <div className="hero-image">
          <img className="about-image" src={Moose} alt="hero" />
          <h1 className="hero__title">Purchase Details</h1>
          <h2 className="hero__title1">Find a painting that spoke to you?</h2>
          <h3 className="hero__title2">Fantastic, I'd be happy to help.</h3>
          <h4 className="hero__title3">Please drop me an email with the details below:</h4>
          <h5 className="hero__title4">Your name</h5>
          <h6 className="hero__title5">Painting title</h6>
          <h6 className="hero__title6">Product type or Original</h6>
          <h6 className="hero__title7">Product Size</h6>
          <h6 className="hero__title8">I'll promptly respond to discuss shipping and payment arrangements</h6>
          <h6 className="hero__title9">Thank you for supporting local artists</h6>
        </div>
      </div>
      <div className="form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="user-email">Your Email:</label>
          <input
            type="email"
            id="user-email"
            name="userEmail"
            value={formData.userEmail}
            onChange={handleChange}
            required
          />

          <label htmlFor="artist-email">Artist's Email:</label>
          <input
            type="email"
            id="artist-email"
            name="artistEmail"
            value={formData.artistEmail}
            onChange={handleChange}
            required
            placeholder="andyshanks8@gmail.com"
          />

          <label htmlFor="subject-header">Subject:</label>
          <input
            type="text"
            id="subject-header"
            name="subjectHeader"
            value={formData.subjectHeader}
            onChange={handleChange}
            required
            placeholder="Product Request"
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your Name, Title of Painting, Product, Size?"
          />

          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}

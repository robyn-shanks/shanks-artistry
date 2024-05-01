import React, { useState } from 'react';
import './ContactPage.scss'; 
import Moose from "../../assets/paintings/Alberta-field.jpg";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    userEmail: '',
    artistEmail: '',
    subjectHeader: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' })); 
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = {};
    if (!formData.userEmail.trim()) {
      errors.userEmail = 'Please enter your email';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.userEmail)) {
      errors.userEmail = 'Please enter a valid email address';
    }
    if (!formData.artistEmail.trim()) {
      errors.artistEmail = 'Please enter the artist\'s email';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.artistEmail)) {
      errors.artistEmail = 'Please enter a valid email address';
    }
    if (!formData.subjectHeader.trim()) {
      errors.subjectHeader = 'Please enter a subject';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please enter a message';
    }

    // If there are validation errors, set them and return
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Email sent successfully');
      } else {
        console.error('Error sending email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
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
          {errors.userEmail && <p className="error-message">{errors.userEmail}</p>}
          
          <label htmlFor="artist-email">Artist's Email:</label>
          <input
            type="email"
            id="artist-email"
            name="artistEmail"
            value={formData.artistEmail}
            onChange={handleChange}
            required
            placeholder=" "
          />
          {errors.artistEmail && <p className="error-message">{errors.artistEmail}</p>}

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
          {errors.subjectHeader && <p className="error-message">{errors.subjectHeader}</p>}
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
          {errors.message && <p className="error-message">{errors.message}</p>}
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}


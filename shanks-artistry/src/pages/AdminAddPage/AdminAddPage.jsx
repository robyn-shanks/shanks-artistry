import React, { useState } from 'react';
import './AdminAddPage.scss';

const AddPaintingPage = () => {
  const [title, setTitle] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code here to submit the painting details (title, size, price, image) to your backend
    // You can use fetch, Axios, or any other library to send a POST request to your server
    // Example:
    const formData = new FormData();
    formData.append('title', title);
    formData.append('size', size);
    formData.append('price', price);
    formData.append('image', image);

    fetch('/api/addPainting', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      // Handle response (e.g., show success message, clear form)
    })
    .catch(error => {
      // Handle error (e.g., show error message)
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div>
      <h2>Add New Painting</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title of Painting:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Size of Painting:</label>
          <input
            type="text"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Upload Image (.jpg):</label>
          <input
            type="file"
            accept=".jpg"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={() => {setTitle(''); setSize(''); setPrice(''); setImage(null);}}>Clear Form</button>
      </form>
    </div>
  );
};

export default AddPaintingPage;

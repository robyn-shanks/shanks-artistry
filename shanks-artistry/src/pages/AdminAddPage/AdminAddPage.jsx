import React, { useState } from 'react';
import axios from 'axios';
import './AdminAddPage.scss';

const AddPaintingPage = () => {
  const [title, setTitle] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [available, setAvailable] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    console.log(e.target)
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('size', size);
    formData.append('price', price);
    formData.append('available', available.toLowerCase() === 'yes' ? 1 : 0);
    formData.append('image', image);
    console.log(Array.from(formData.entries()));

    const data = Object.fromEntries(formData);
    console.log(data);

    const response = await axios.post('http://localhost:8080/admin/add/', data);
    try {
      alert("Successfully added a new painting");
    } catch (err) {
      let error = "";
      if (err.response) {
        error = err.response.data;
      }
      alert("Something went wrong.\n" + error);
    }

    // fetch('http://localhost:8080/admin/add/', {
    //   method: 'POST',
    //   body: formData
    // })
    // .then(response => {
    //   console.log('success');
    // })
    // .catch(error => {
    //   console.log('Error')
    // });
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
  <div>
  <p className="original-available">(Original)</p>
    <label>Available:</label>
    <div>
      <label>
        <input
          type="radio"
          name="Available"
          value="yes"
          checked={available === "yes"}
          onChange={(e) => setAvailable(e.target.value)}
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="Available"
          value="no"
          checked={available === "no"}
          onChange={(e) => setAvailable(e.target.value)}
        />
        No
      </label>
    </div>
  </div>
  <button type="submit">Submit</button>
  <button type="button" onClick={
      () => {setTitle(''); setSize(''); setPrice(''); setImage(null); setAvailable('');}
    }>Clear Form</button>
      </form>
    </div>
  );
};

export default AddPaintingPage;

import React, { useState } from 'react';
import './AdminAddPage.scss';

const AddPaintingPage = () => {
  const [title, setTitle] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('size', size);
    formData.append('price', price);
    formData.append('image', image);

    fetch('/api/adminadd', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      console.log('success');
    })
    .catch(error => {
      console.log('Error')
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

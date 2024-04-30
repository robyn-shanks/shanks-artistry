import React, { useState } from 'react';
import './AdminRemovePage.scss'; // Import your CSS file for styling

const RemovePaintingPage = () => {
  const [title, setTitle] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code here to remove the original painting from the inventory
  };

  return (
    <div className="remove-painting-container">
      <h2>Remove (Sold) Painting from Inventory</h2>
      <form onSubmit={handleSubmit} className="remove-painting-form">
        <div className="form-group">
          <label>Title of Original Painting:</label>
          <select
            value={title}
            onChange={handleTitleChange}
            required
          >
            <option value="">Select Title</option>
            {/* Add options dynamically based on available paintings */}
            <option value="painting1">Painting 1</option>
            <option value="painting2">Painting 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
        <button type="button" className="clear-btn" onClick={() => setTitle('')}>Clear Form</button>
      </form>
    </div>
  );
};

export default RemovePaintingPage;

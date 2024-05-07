import React, { useEffect,useState } from 'react';
import './AdminRemovePage.scss'; 
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import axios from "axios";


 


export default function RemovePaintingPage () {
  const [title, setTitle] = useState('');
  const [paintings,setPaintings] = useState([]);

   // for delete
   const [showDeleteModal, setShowDeleteModal] = useState(false);
   const [deleteModalItem, setDeleteModalItem] = useState({});
   const [refresh, setRefresh] = useState(0);


   useEffect(() => {
    fetchPaintings();
  }, []);

  const fetchPaintings = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/data');
      setPaintings(response.data); 
    } catch (error) {
      console.error("Error fetching paintings: ", error);
    }
  };


  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };


   // for delete modal
   const openDeleteModal = (painting) => {
    setDeleteModalItem(painting);
    setShowDeleteModal(true);
  };

  const handleDelete = async () => {
    setShowDeleteModal(false);

    try {
      await axios.delete(
        `http://localhost:8080/admin/remove/${deleteModalItem.id}`
      );
      setRefresh(refresh + 1);
    } catch (error) {
      console.error("Error deleting data: ", error);
    }
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
  <>
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
            {paintings.map((painting) => {
              return(
              <option key={painting.id} value={painting.title}>
                {painting.title}
              </option>
              )
            })}
          </select>
        </div>
        <button type="submit"
          className="submit-btn"
          onClick={() => openDeleteModal(paintings.find(p => p.title === title))}>
            Submit
        </button>
        <button type="button" className="clear-btn" onClick={() => setTitle('')}>Clear Form</button>
      </form>
    </div>
    {showDeleteModal && (
      <DeleteModal
        paintingName={deleteModalItem.title}
        onCancel={() => {
          setShowDeleteModal(false);
        }}
        onDelete={handleDelete}
      />
    )}
  </>
  );
};



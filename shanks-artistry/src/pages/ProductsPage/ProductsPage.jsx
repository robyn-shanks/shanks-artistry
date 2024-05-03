
import Puzzle from "../../assets/paintings/Puzzle.jpg";
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import "./ProductsPage.scss";

const ProductsPage = () => {
  const { id } = useParams();
  const [painting, setPainting] = useState(null);
  
  useEffect(() => {
    const fetchPainting = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/gallery/${id}`);
        const paintingData = response.data;
        console.log('Fetched painting data:', paintingData);
        setPainting(paintingData);
      } catch (error) {
        console.error('Error fetching painting data:', error);
      }
    };
    fetchPainting();
  }, [id]);

  return (
    <>
      <div className="hero">
        <div className="hero-image">
          <img className="about-image" src={Puzzle} alt="hero" />
          <h1 className="hero__title">Product Details</h1>
        </div>
      </div>
      <div className="shows">
        <div className="shows-section">
          {painting && painting.image && (
            <div className="shows-section__image">
              <img src={painting.image} alt={painting.title} />
            </div>
          )}
          <div className="shows-section__text">
            <h3 className="shows-section__text--location">
              Title: {painting ? painting.title : ''}
            </h3>
          </div>
          <div className="shows-section__text">
            {/* <h3 className="shows-section__text--location">
              ORIGINAL: {painting ? (painting.available ? 'Available' : 'Not Available') : ''}
            </h3> */}
          </div>
          <div className="shows-section__text">
  <h3 className="shows-section__text--date">Products:</h3>
  <ul>
    <li>Magnet</li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li>Prints</li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li>Calendar</li>
    
    <li>Canvas Print</li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li>Cards</li>
    <li>Coasters</li>
    <li></li>
    <li>Puzzle</li>
    <li></li>
    <li></li>
    <li></li>
    <li>Tote Bags</li>
    <li></li>
    <li></li>
    <li></li>
    <li>Notebook</li>
  </ul>
</div>
<div className="shows-section__text">
  <h3 className="shows-section__text--location">Size:</h3>
  <ul>
    <li>2x3</li>
    <li>3x2</li>
    <li>3x4</li>
    <li>4x3</li>
    <li>16x20(s)</li>
    <li>18x24(m)</li>
    <li>22x28(l)</li>
    <li>17x11</li>
    <li>8x12(s)</li>
    <li>12x16(m)</li>
    <li>16x24(l)</li>
    <li>5.5x4</li>
    <li>4x4</li>
    <li>48 pcs</li>
    <li>500 pcs</li>
    <li>1000 pcs</li>
    <li>W 13.4 H-13.4</li>
    <li>W 15 H-18.5</li>
    <li>5.5x8.5(80pgs)</li>
  </ul>
</div>
<div className="shows-section__text">
  <h3 className="shows-section__text--location">Price:</h3>
  <ul>
    <li>$5</li>
    <li></li>
    <li></li>
    <li>$7</li>
    <li></li>
    <li></li>
    <li>$20</li>
    <li>$27</li>
    <li>$35</li>
    <li>$30</li>
    <li>$25</li>
    <li>$35</li>
    <li>$55</li>
    <li>$4.00</li>
    <li>$30/4</li>
    <li>$30</li>
    <li>$50</li>
    <li>$70</li>
    <li>$20</li>
    <li>$24</li>
    <li>$20</li>
  </ul>
</div>
<Link to="/contact" className="buy-tickets-button">CONTACT ARTIST</Link>

        </div>
      </div>
    </>
  );
};

export default ProductsPage;

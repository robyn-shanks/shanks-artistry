
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
              {painting ? painting.title : ''}
            </h3>
          </div>
          {/* <div className="shows-section__text">
            <h3 className="shows-section__text--location">
              ORIGINAL: {painting ? (painting.available ? 'Available' : 'Not Available') : ''}
            </h3>
          </div> */}
          <div class="shows-section__container">
  <div class="shows-section__text">
    <h3 className="shows-section__text--date">Products</h3>
    <ul className="products-list">
      <li className="product-item">Magnet</li>
      <li className="product-item"></li>
      <li className="product-item"></li>
      <li className="product-item"></li>
      <li className="product-item"></li>
      <li className="product-item"></li>
      <li className="product-item"></li>
      <li className="product-item">Prints</li>
      <li className="product-item"></li>
      <li className="product-item"></li>
      <li className="product-item"></li>
      <li className="product-item"></li>
      <li className="product-item">Calendar</li>
      <li className="product-item">Canvas Print</li>
      <li className="product-item"></li>
      <li className="product-item"></li>
      <li className="product-item"></li>
      <li className="product-item"></li>
      <li className="product-item">Cards</li>
      <li className="product-item">Coasters</li>
      <li className="product-item"></li>
      <li className="product-item">Puzzle</li>
      <li className="product-item"></li>
      <li className="product-item"></li>
      <li className="product-item"></li>
      <li className="product-item">Tote Bags</li>
      <li className="product-item"></li>
      <li className="product-item"></li>
      <li className="product-item"></li>
      <li className="product-item">Notebook</li>
    </ul>
  </div>

  <div class="shows-section__text">
    <h3 className="shows-section__text--location">Size</h3>
    <ul className="size-list">
      <li className="size-item">2x3</li>
      <li className="size-item">3x2</li>
      <li className="size-item">3x4</li>
      <li className="size-item">4x3</li>
      <li className="size-item">16x20(s)</li>
      <li className="size-item">18x24(m)</li>
      <li className="size-item">22x28(l)</li>
      <li className="size-item">17x11</li>
      <li className="size-item">8x12(s)</li>
      <li className="size-item">12x16(m)</li>
      <li className="size-item">16x24(l)</li>
      <li className="size-item">5.5x4</li>
      <li className="size-item">4x4</li>
      <li className="size-item">48 pcs</li>
      <li className="size-item">500 pcs</li>
      <li className="size-item">1000 pcs</li>
      <li className="size-item">W 13.4 H-13.4</li>
      <li className="size-item">W 15 H-18.5</li>
      <li className="size-item">5.5x8.5(80pgs)</li>
    </ul>
  </div>

  <div class="shows-section__text">
    <h3 className="shows-section__text--location">Price</h3>
    <ul className="price-list">
      <li className="price-item">$5</li>
      <li className="price-item"></li>
      <li className="price-item"></li>
      <li className="price-item">$7</li>
      <li className="price-item"></li>
      <li className="price-item"></li>
      <li className="price-item">$20</li>
      <li className="price-item">$27</li>
      <li className="price-item">$35</li>
      <li className="price-item">$30</li>
      <li className="price-item">$25</li>
      <li className="price-item">$35</li>
      <li className="price-item">$55</li>
      <li className="price-item">$4.00</li>
      <li className="price-item">$30/4</li>
      <li className="price-item">$30</li>
      <li className="price-item">$50</li>
      <li className="price-item">$70</li>
      <li className="price-item">$20</li>
      <li className="price-item">$24</li>
      <li className="price-item">$20</li>
    </ul>
  </div>
</div>

<Link to="/contact" className="buy-tickets-button">CONTACT ARTIST</Link>

        </div>
      </div>
    </>
  );
};

export default ProductsPage;

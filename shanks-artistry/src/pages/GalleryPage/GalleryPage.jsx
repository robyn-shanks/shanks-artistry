import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./GalleryPage.scss";

export default function GalleryPage() {
    const [paintings, setPaintings] = useState([]);
    const [selectedPainting, setSelectedPainting] = useState(null);
    const [hoveredPainting, setHoveredPainting] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/gallery')
            .then(response => response.json())
            .then(data => {
            
                setPaintings(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handlePaintingClick = (painting) => {
        setSelectedPainting(painting);
    };

    const handlePaintingHover = (painting) => {
        setHoveredPainting(painting);
    };

    const handleMouseLeave = () => {
        setHoveredPainting(null);
    };

    return (
        <>
            <section className="gallery">
                <h1 className="gallery__title">Painting Gallery</h1>
                <div className="gallery__image">
                    {paintings.map(painting => (
                        <div className="gallery__image--item" key={painting.id} onMouseEnter={() => handlePaintingHover(painting)} onMouseLeave={handleMouseLeave}>
                            <Link to={`/gallery/${painting.id}`} state={{ painting }}>

                                <img
                                    className="gallery__image--item"
                                    src={painting.image}
                                    alt={painting.title}
                                    onClick={() => handlePaintingClick(painting)}
                                />
                            </Link>
                            {hoveredPainting === painting && (
                                <div className="painting-details">
                                    <p>{painting.title}</p>
                                    <p>Size: {painting.size}</p>
                                    <p>Original Availabile: {painting.available ? "Yes" : "No"}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
            {selectedPainting && (
                <Link to={{ pathname: "/products", state: { painting: selectedPainting } }} className="buy-tickets-button">VIEW DETAILS</Link>
            )}
        </>
    );
};


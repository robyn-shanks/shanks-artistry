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
                // console.log(data);
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


// import Sea from "../../assets/paintings/Sea.jpg";
// import Sea1 from "../../assets/paintings/Sea1.jpg";
// import Wolves from "../../assets/paintings/Wolves.jpg";
// import Wolf from "../../assets/paintings/Wolf-at-night.jpg";
// import Whales from "../../assets/paintings/Whales-Surfacing.jpg";
// import Skaha from "../../assets/paintings/Skaha-Lake-2.jpg";
// import Stanley from "../../assets/paintings/Stanley.jpg";
// import Northern from "../../assets/paintings/Northern-Lights.jpg";
// import Whiskey from "../../assets/paintings/Whiskey-Jack.jpg";
// import Moon from "../../assets/paintings/Moon-Light.jpg";
// import Loon from "../../assets/paintings/Loon.jpg";
// import John from "../../assets/paintings/John.jpg";
// import Hummingbird from "../../assets/paintings/Hummingbird.jpg";
// import Horses from "../../assets/paintings/Horses.jpg";
// import Edmonton from "../../assets/paintings/Edmonton-winter.jpg";
// import Forest from "../../assets/paintings/Forest-Trail.jpg";
// import Elfin from "../../assets/paintings/Elfin-Lodge.jpg";
// import Alberta from "../../assets/paintings/Alberta-field.jpg";
// import Iguana from "../../assets/paintings/Iguana.jpg";
// import Quail from "../../assets/paintings/Quail.jpg";
// import Woods from "../../assets/paintings/Woods.jpg";
// import Okanagan from "../../assets/paintings/Okanagan.jpg";
// import Moose from "../../assets/paintings/Moose.jpg";
// import Moose1 from "../../assets/paintings/Moose1.jpg";
// import Lighthouse from "../../assets/paintings/Lighthouse.jpg";
// import Snow from "../../assets/paintings/Snow.jpg";
// import Shimmer from "../../assets/paintings/Shimmer.jpg";
// import Bubbles from "../../assets/paintings/Bubbles.jpg";
// import Moonwave from "../../assets/paintings/Moon-wave.jpg";
// import Moonwave1 from "../../assets/paintings/Moonwave1.jpg";
// import Hedwig from "../../assets/paintings/Hedwig.jpg";
// import Mountain from "../../assets/paintings/Mountain.jpg";
// import Technicolor from "../../assets/paintings/Technicolor.jpg";
// import Seeing from "../../assets/paintings/Seeing.jpg";
// import Fox from "../../assets/paintings/Fox.jpg";
// import Whale from "../../assets/paintings/Whale.jpg";
// import Cows from "../../assets/paintings/Cows.jpg";
// import Yawn from "../../assets/paintings/Yawn.jpg";
// import Puzzle from "../../assets/paintings/Puzzle.jpg";
// import Waterfall from "../../assets/paintings/Waterfall.jpg";
// import Landing from "../../assets/paintings/Landing.jpg";
// import Trees from "../../assets/paintings/Trees.jpg";
// import Otters from "../../assets/paintings/Otter.jpg";




    // return (
    //     <>
    //     <section className = "gallery">
    //         <h1 className="gallery__title">
    //             Painting Gallery
    //         </h1>
    //         <div className= "gallery__image">
                {/* <div className= "gallery__image--item">
                        <img src={Sea} alt="sea"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Wolves} alt="wolves"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Edmonton} alt="edmonton"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Alberta} alt="alberta"/>
                </div>
                
                
                
                <div className= "gallery__image--item">
                    <img src={Stanley} alt="stanley"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Whiskey} alt="whiskey"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Trees} alt="trees"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Okanagan} alt="okanagan"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Forest} alt="forest"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Technicolor} alt="technicolor"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Yawn} alt="yawn"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Cows} alt="cows"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Hedwig} alt="hedwig"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Northern} alt="northern"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Hummingbird} alt="hummingbird"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Horses} alt="horses"/>
                </div>
                <div className= "gallery__image--item">
                        <img src={Sea1} alt="sea1"/>
                </div>
                
                
                <div className= "gallery__image--item">
                    <img src={Iguana} alt="Iguana"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Quail} alt="quail"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Woods} alt="woods"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Snow} alt="snow"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Moonwave} alt="moonwave"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Moonwave1} alt="moonwave1"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Shimmer} alt="shimmer"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Moon} alt="moon"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Puzzle} alt="puzzle"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Loon} alt="loon"/>
                </div>
                
                <div className= "gallery__image--item">
                    <img src={Landing} alt="landing"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={John} alt="john"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Lighthouse} alt="lighthouse"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Whale} alt="whale"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Bubbles} alt="bubbles"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Moose1} alt="moose1"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Moose} alt="moose"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Seeing} alt="seeing"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Fox} alt="fox"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Mountain} alt="mountain"/>
                </div>
                <div class= "gallery__image--item">
                    <img src={Waterfall} alt="waterfall"/>
                </div>
                <div class= "gallery__image--item">
                    <img src={Otters} alt="whales"/>
                </div>
                <div class= "gallery__image--item">
                    <img src={Whales} alt="whales"/>
                </div> 
                 
                
                <div class= "gallery__image--item">
                    <img src={Wolf} alt="wolf"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Elfin} alt="elfin"/>
                </div>
                <div className= "gallery__image--item">
                    <img src={Skaha} alt="skaha"/>
                </div> */}
                 
            
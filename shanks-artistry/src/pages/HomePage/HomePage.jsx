import React from 'react';
import "./HomePage.scss";
import Andy from "../../assets/Images/andy-mountain.jpeg";
import Sea from "../../assets/paintings/20230519_085938.jpg";
import Lodge from "../../assets/paintings/Elfin-Lodge.jpg"
import Alberta from "../../assets/paintings/Alberta-field.jpg"
import Stanley from "../../assets/paintings/Stanley.jpg"

export default function HomePage () {
    return (
        <>
        <div>
        <div className="hero">
            <div className = "hero-image">
                
                <img className= "about-image" src={Lodge} alt="hero"/>
                
                <h1 className="hero__title">
                    Andy Shanks
                </h1>
            </div>
        </div>
        </div>
        <article className="about">
        <h2 className="about__title1">
            About the Artist
        </h2>
        <div className="about-header">
            <img className="about-image2" src={Andy} alt="logo-image" />
        </div>
        <p className="about__text1">
        "Painting around Vancouver is my way of finding peace and staying grounded. It's like a quiet meditation, where I can soak in the beauty of the landscapes and reflect on the places I've explored.""
            
        </p>
        <h2 className="about__title2">
            {/* <img class= "about-image" src={Sea} alt="hero"/> */}
            <img className= "about-image3" src={Alberta} alt="hero"/>
                <img className= "about-image3" src={Stanley} alt="hero"/>
        </h2>
        <div className="about__text">
            <p className="about__text__item">
            Captivated by the raw beauty of nature, Andy's paintings serve as windows into his world of tranquility and awe. With each brushstroke, 
            he channels the sights and sounds of the landscapes he holds dear—towering mountains, lush forests, and meandering rivers. Painting is Andy's escape, his meditation amidst the chaos of life, offering him a chance to reconnect with the earth and himself.
            </p>
            <p className="about__text__item">Despite a demanding profession as a Neurophysiologist at St.Paul's Hospital, 
            Andy remains committed to his artistic pursuits. 
            His passion for painting natural landscapes not only brings him joy but also serves as a reminder of the beauty that surrounds us. 
            Through his artwork, Andy hopes to inspire others to pause, breathe, and appreciate the wonders of the world around them.
            </p>
        </div>
    </article>
        </>
    );
};
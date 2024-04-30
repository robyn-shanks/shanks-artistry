import React from 'react';
import "./ProductsPage.scss";
import Puzzle from "../../assets/paintings/Puzzle.jpg"
import Yawn from "../../assets/paintings/Yawn.jpg"


export default function ProductsPage () {

    return(
        <>
        <div className="hero">
            <div className = "hero-image">
                
                <img className= "about-image" src={Puzzle} alt="hero"/>
                
                <h1 className="hero__title">
                    Product Details
                </h1>
            </div>
        </div>
        <div className="shows">
                <div className="shows-section">
                    <div className="shows-section__image"> 
                        <img src={Yawn} alt="Yawn" /> 
                    </div>
                    <div className="shows-section__text">
                        <h3 className="shows-section__text--location">TITLE</h3>
                    </div>
                    <div className="shows-section__text">
                        <h3 className="shows-section__text--location">ORIGINAL</h3>
                    </div>
                    <div className="shows-section__text">
                        <h3 className="shows-section__text--date">PRODUCT</h3>
                    </div>
                    <div className="shows-section__text">
                        <h3 className="shows-section__text--location">SIZE</h3>
                    </div>
                    <div className="shows-section__text">
                        <h3 className="shows-section__text--location">PRICE</h3>
                    </div>
                    <button className="buy-tickets-button">CONTACT ARTIST</button>
                </div>
            </div>
        </>
    );
};
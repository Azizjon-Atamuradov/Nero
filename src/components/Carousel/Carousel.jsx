import React from "react";
import men from "../../assets/hero_men.jpg"
import women from "../../assets/hero_women.jpg"
import kids from "../../assets/hero_kids.jpg"
import "./Carousel.css"

function Carousel() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-inner">

        <div className="carousel-item active">
          <img src={men} className="d-block w-100" alt="slide1" />
          <div className="carousel-caption text-start">
            <h1>New Men's Collection</h1>
            <p>Latest styles, performance-ready, designed for you.</p>
            <button className="cta-btn">Shop Men</button>
          </div>
        </div>

        <div className="carousel-item">
          <img src={women} className="d-block w-100" alt="slide2" />
          <div className="carousel-caption text-start">
            <h1>Fresh Styles for Women</h1>
            <p>Chic, comfortable, and ready for every occasion.</p>
               <button className="cta-btn">Shop Women</button>
          </div>
        </div>

        <div className="carousel-item">
          <img src={kids} className="d-block w-100" alt="slide3" />
          <div className="carousel-caption text-start">
            <h1>Fun & Comfortable for Kids</h1>
            <p>Playful designs, built to move and grow.</p>
               <button className="cta-btn">Shop Kids</button>
          </div>
        </div>

      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default Carousel;
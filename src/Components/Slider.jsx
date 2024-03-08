import React from "react";
import Slider from "react-slick";

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-title">
          <h3>BUYING</h3>
        </div>
        <div className="slider-title">
          <h3>TRUCKING</h3>
        </div>
        <div className="slider-title">
          <h3>SHIPPING</h3>
        </div>
        <div className="slider-title">
          <h3>DELIVERY</h3>
        </div>
        <div className="slider-title">
          <h3>BUYING</h3>
        </div>
        <div className="slider-title">
          <h3>TRUCKING</h3>
        </div>
        <div className="slider-title">
          <h3>SHIPPING</h3>
        </div>
        <div className="slider-title">
          <h3>DELIVERY</h3>
        </div>
        <div className="slider-title">
          <h3>BUYING</h3>
        </div>
        <div className="slider-title">
          <h3>TRUCKING</h3>
        </div>
       
      </Slider>
    </div>
  );
}

export default AutoPlay;

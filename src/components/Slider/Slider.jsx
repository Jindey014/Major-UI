import React from 'react'
import './Slider.css'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import '../Header/Header.css'

const Slider = (props) => {
  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 700
  }

  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 700
  }

  return (
    <div className="slider-container">
      <p className="slider-header">Places You May Like...</p>
      <div id="main-slider-container">
        <MdChevronLeft
          size={40}
          className="slider-icon left"
          onClick={slideLeft}
        />
        <div id="slider">
          {props.slides.map((slide, index) => {
            return (
              <div className="slider-card" key={index}>
                <div
                  className="slider-card-image"
                  style={{ backgroundImage: `url(${slide.image})` }}
                ></div>
                <p className="slider-card-title">{slide.title}</p>
                <p className="slider-card-description">{slide.description}</p>
                <p className="slider-rating">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarHalf />
                  <BsStar />
                </p>
              </div>
            )
          })}
        </div>
        <MdChevronRight
          size={40}
          className=" slider-icon right"
          onClick={slideRight}
        />
      </div>
    </div>
  )
}
export default Slider

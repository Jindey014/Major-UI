import React from 'react'
import images from '../../constants/images'
import './Header.css'

const Header = () => (
  <div className="app__header app__wrapper" id="home">
    <div className="app__wrapper_info">
      <div className="SubHeading">
        <p className="wrapper__info-sub">Find Your guides</p>
      </div>
      <span className="line1"></span>
      <span className="line2"></span>
      <span className="line3"></span>
      <h1>A New approach to touring</h1>
      <div className="search">
        <div className="searchInputs">
          <input type="text" placeholder="Where do you wanna go?" />
        </div>
        <div className="dataResult"></div>
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.nepal} alt="" />
    </div>
  </div>
)

export default Header

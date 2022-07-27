import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import images from '../../constants/images'
import CloseIcon from '@mui/icons-material/Close'
import './Navbar.css'

const Navbar = () => {
  const [toggleMenu, settoggleMenu] = useState(false)
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.guide} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="btn p__opensans">
          <a href="#home"> Home</a>
        </li>
        <li className="btn p__opensans">
          <a href="#review"> Review</a>
        </li>
        <li className="btn p__opensans">
          <a href="#contact"> Contact</a>
        </li>
        <li className="button p__opensans">
          <a href="" className="sign">
            {' '}
            Log In/ Register
          </a>
        </li>
      </ul>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="black"
          fontSize={27}
          onClick={() => settoggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <div
              className="overlay__close"
              onClick={() => settoggleMenu(false)}
              fontSize={27}
            >
              <CloseIcon />
            </div>
            <ul className="app__nabvar-smallscreen-links">
              <li className="btn p__opensans">
                <a href="#home"> Home</a>
              </li>
              <li className="btn p__opensans">
                <a href="#review"> Review</a>
              </li>
              <li className="btn p__opensans">
                <a href="#contact"> Contact</a>
              </li>
              <li className="button p__opensans">
                <a href="#sign" className="sign">
                  {' '}
                  Log In/ Register
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
export default Navbar

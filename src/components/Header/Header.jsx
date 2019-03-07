import React from 'react';
import menImg from '../../assets/image/men.png';
import camera from '../../assets/image/cameraInstagram.png';
import iLike from '../../assets/image/iLikeInstagram.png';
import compass from '../../assets/image/compass.png';
import './header.css';

const Header = () => (
  <nav className="navbar is-fixed-top " role="navigation" aria-label="main navigation">

    <div className="navbar-menu">
      <div className="navbar-start">
        <div id="titleDiv" className="navbar-item itemNavbar">
         <span>
           <img src={camera} />
         </span>
          <div id="separator" />
          <span id="titleApp">
            GramLan
          </span>
        </div>
        <div className="navbar-item itemNavbar" id="search">
          <input className="input" type="text" placeholder="Search" />
        </div>
        <div className="navbar-item itemNavbar">
          <div className="buttons">
            <a className="navbar-item" href="">
              <img src={compass} />
            </a>
            <a className="navbar-item" href="">
              <img src={iLike} />
            </a>
            <a className="navbar-item" href="">
              <img src={menImg} />
            </a>
          </div>
        </div>
      </div>

    </div>
  </nav>
);

export default Header;

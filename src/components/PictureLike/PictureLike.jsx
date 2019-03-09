import React from 'react';
import Yo from '../../assets/image/yo.png';
import './PictureLike.css';

const PictureLike = () => (
  <span className="image is-24x24" id="pictureLikeDiv">
    <img className="is-rounded" src={Yo} id="firtPictureLike" />
    <img className="is-rounded" src={Yo} id="secondPictureLike" />
    <img className="is-rounded" src={Yo} id="thirdPictureLike" />
  </span>
);

export default PictureLike;

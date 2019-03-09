import React from 'react';
import LikeIcon from '../../../assets/image/iLikeInstagram.png';
import './Comment.css';

const
  Comment = () => (
  <div id="divComment">
    <p id="comment">
      Esto es un comentario!
    </p>
    <span id="iconLikeComment">
      <img src={LikeIcon} alt="" />
    </span>
  </div>
);

export default Comment;
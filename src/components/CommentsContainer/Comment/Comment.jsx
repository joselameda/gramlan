import React from 'react';
import LikeIcon from '../../../assets/image/iLikeInstagram.png';
import './Comment.css';

const
  Comment = () => (
  <div id="divComment">
    <p id="comment">
      <span id="userOwnerComment">
        <strong>
          joseph_lameda
        </strong>
      </span>
      Esto es un comentario!
    </p>
    <span id="iconLikeComment">
      <img src={LikeIcon} alt="" />
    </span>
  </div>
);

export default Comment;
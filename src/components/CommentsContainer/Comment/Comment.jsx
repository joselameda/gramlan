import React from 'react';
import LikeIcon from '../../../assets/image/iLikeInstagram.png';
import './Comment.css';

const
  Comment = ({user, comment}) => (
  <div id="divComment">
    <p id="comment">
      <span id="userOwnerComment">
        <strong>
          {user}
        </strong>
      </span>
      {comment}
    </p>
    <span id="iconLikeComment">
      <img src={LikeIcon} alt="" />
    </span>
  </div>
);

export default Comment;
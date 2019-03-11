import React from 'react';
import LikePeople from '../LikePeople';
import './CommentUser.css';

const CommentUser = ({comment}) => (
  <div className="content" id="contentCommentsContainer">
    <LikePeople />
    <p id="commentUser">
      <strong>
        jguaido
      </strong>
      {comment}
    </p>
  </div>
);

export default CommentUser;

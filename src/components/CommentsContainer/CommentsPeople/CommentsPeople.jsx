import React from 'react';
import Comment from '../Comment';
import './CommentsPeople.css';

const CommentsPeople = ({comments}) => {
  const commentsBlock = comments.map(comment => (
    <Comment user={comment.user} comment={comment.comment} />
  ));
  return (
    <div>
      <p id="seeMoreComment">
        See the 5 comments
      </p>
      {commentsBlock}

    </div>
  );
}

export default CommentsPeople;

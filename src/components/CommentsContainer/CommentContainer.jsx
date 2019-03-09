import React from 'react';
import CommentIcon from '../../assets/image/comment.png';
import LikeIcon from '../../assets/image/iLikeInstagram.png';
import Upload from '../../assets/image/upload.png';
import Save from '../../assets/image/save.png';
import CommentsPeople from './CommentsPeople';
import CommentUser from './CommentUser';
import './CommentContainer.css';

const CommentContainer = () => (
  <div className="card-content" id="commentContainer">
    <div id="iconContainer">
      <div className="media-left">
        <figure className="image iconComment">
          <img src={LikeIcon} alt="Placeholder image" />
        </figure>
        <figure className="image iconComment ">
          <img src={CommentIcon} alt="Placeholder image" />
        </figure>
        <figure className="image iconComment is-24x24">
          <img src={Upload} alt="Placeholder image" />
        </figure>
      </div>
      <div className="media-right is-24x24">
        <figure className="image iconCommentRight">
          <img src={Save} alt="Placeholder image" />
        </figure>
      </div>
    </div>

    <CommentUser />
    <CommentsPeople />
  </div>
);

export default CommentContainer;

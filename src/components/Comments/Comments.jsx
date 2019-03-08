import React from 'react';
import CommentIcon from '../../assets/image/comment.png';
import LikeIcon from '../../assets/image/iLikeInstagram.png';
import Upload from '../../assets/image/upload.png';
import Save from '../../assets/image/save.png';
import './Comments.css';

const Comments = () => (
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

    <div className="content" id="contentCommentsContainer">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris.
      {' '}
      <a>@bulmaio</a>
      .
      <a href="#">#css</a>
      {' '}
      <a href="#">#responsive</a>
      <br />
      <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
);

export default Comments;

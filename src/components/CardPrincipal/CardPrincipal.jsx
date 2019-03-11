import React from 'react';
import UserInfo from '../UserInfo';
import CommentContainer from '../CommentsContainer';
import './CardPrincipal.css';

const CardPrincipal = ({ card, name, nickName, profilePicUrl}) => (
  <div className="card" id="cardPrincipal">
    <div className="card-header">
      <UserInfo name={name} nickName={nickName} profilePicUrl={profilePicUrl} />
    </div>
    <div className="card-image" id="comments">
      <figure className="image is-3by2">
        <img src={card.pictureUrl} alt="Placeholder image" />
      </figure>
    </div>
    <CommentContainer comment={card.comment} comments={card.comments} />
    <div className="card-footer">
      <input className="input" type="text" placeholder="Insert coment...." />
    </div>
  </div>
);


export default CardPrincipal;

import React from 'react';
import Yo from '../../assets/image/yo.png';
import UserInfo from '../UserInfo';
import CommentContainer from '../CommentsContainer';
import './CardPrincipal.css';

const CardPrincipal = () => (
  <div className="card" id="cardPrincipal">
    <div className="card-header">
      <UserInfo />
    </div>
    <div className="card-image" id="comments">
      <figure className="image is-3by2">
        <img src={Yo} alt="Placeholder image" />
      </figure>
    </div>
    <CommentContainer />
    <div className="card-footer">
      <input className="input" type="text" placeholder="Insert coment...." />
    </div>
  </div>
);

export default CardPrincipal;

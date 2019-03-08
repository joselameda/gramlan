import React from 'react';
import UserInfo from '../UserInfo';
import './Suggetions.css';

const Suggestions = () => (
  <div className="card cardSuggetion">
    <div className="card-header is-fixed-top" id="titleSuggetions">
      <p className="title is-size-7" id="Suggetions">Suggetions</p>
      <p className="title is-size-7" id="seeAll">Ver todas</p>
    </div>

    <div className="card-content">
      <div className="media-content cardSuggetionMedia">
        <UserInfo />
      </div>
      <div className="media-content cardSuggetionMedia">
        <UserInfo />
      </div>
      <div className="media-content cardSuggetionMedia">
        <UserInfo />
      </div>
      <div className="media-content cardSuggetionMedia">
        <UserInfo />
      </div>
      <div className="media-content cardSuggetionMedia">
        <UserInfo />
      </div>
    </div>
  </div>
);

export default Suggestions;

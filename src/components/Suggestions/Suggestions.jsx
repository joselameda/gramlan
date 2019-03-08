import React from 'react';
import UserInfo from '../UserInfo';
import ContainerInfo from '../ContainerInfo';
import './Suggetions.css';

const userSuggestions = () =>(
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
);

const Suggestions = () => (
  <ContainerInfo title="Suggestions" userInfo={userSuggestions()} />
);

export default Suggestions;

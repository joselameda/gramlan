import React from 'react';
import './UserInfo.css';
import PictureUser from '../PictureUser';

const UserInfo = () => (
  <div id="userInfoParent">
    <div className="media-left">
      <PictureUser />
    </div>
    <div className="media-content" id="nameUser">
      <p className="title is-size-7">Joseph Lameda</p>
      <p className="subtitle is-7">@joseph_lameda</p>
    </div>
  </div>
);

export default UserInfo;

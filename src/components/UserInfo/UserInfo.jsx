import React from 'react';
import './UserInfo.css';
import { connect } from 'react-redux';
import PictureUser from '../PictureUser';

const UserInfo = ({ profilePicUrl, name, nickName }) => (
  <div id="userInfoParent">
    <div className="media-left">
      <PictureUser pic_url={profilePicUrl} />
    </div>
    <div className="media-content" id="nameUser">
      <p className="title is-size-7">{name}</p>
      <p className="subtitle is-7">{nickName}</p>
    </div>
  </div>
);


const mapStateToProps = state => ({
  userInfo: state.user.user,
});

export default connect(mapStateToProps)(UserInfo);

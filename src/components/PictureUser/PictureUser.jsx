import React from 'react';
import PropTypes from 'prop-types';
import Yo from '../../assets/image/yo.png';

const PictureUser = ({ profilePicUrl }) => (
  <figure className="image is-48x48" id="imgUser">
    <img className="is-rounded" src={profilePicUrl} />
  </figure>
);

PictureUser.protoTypes = {
  profilePicUrl: PropTypes.string,
}

PictureUser.defaultProps = {
  profilePicUrl: Yo,
}
export default PictureUser;

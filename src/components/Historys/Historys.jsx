import React from 'react';
import UserInfo from '../UserInfo';
import './Historys.css';

const Historys = () => (
  <div className="card cardHistory">
    <div className="card-header is-fixed-top" id="titleHistorys">
      <p className="title is-size-7" id="historys">Historys</p>
      <p className="title is-size-7" id="seeAll">Ver todas</p>
    </div>

    <div className="card-content">
      <div className="media-content cardHistoryMedia">
        <UserInfo />
      </div>
      <div className="media-content cardHistoryMedia">
        <UserInfo />
      </div>
      <div className="media-content cardHistoryMedia">
        <UserInfo />
      </div>
      <div className="media-content cardHistoryMedia">
        <UserInfo />
      </div>
      <div className="media-content cardHistoryMedia">
        <UserInfo />
      </div>
    </div>
  </div>
);

export default Historys;

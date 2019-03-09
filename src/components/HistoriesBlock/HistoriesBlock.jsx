import React from 'react';
import UserInfo from '../UserInfo';
import ContainerInfo from '../ContainerInfo';
import './HistoriesBlock.css';

const userHistories = () => (
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
);
const HistoriesBlock = () => (
  <ContainerInfo title="Histories" userInfo={userHistories()} />
);

export default HistoriesBlock;

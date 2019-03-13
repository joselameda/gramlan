import React from 'react';
import UserInfo from '../UserInfo';
import ContainerInfo from '../ContainerInfo';
import './HistoriesBlock.css';

const userHistories = () => (
  <div className="card-content" id="historyBlock">
    <div className="media-content cardHistoryMedia">
      <UserInfo name='jose' nickName='joseph_lameda'  />
    </div>
    <div className="media-content cardHistoryMedia">
      <UserInfo name='jose' nickName='joseph_lameda'  />
    </div>
    <div className="media-content cardHistoryMedia">
      <UserInfo name='jose' nickName='joseph_lameda'  />
    </div>
    <div className="media-content cardHistoryMedia">
      <UserInfo name='jose' nickName='joseph_lameda'  />
    </div>
    <div className="media-content cardHistoryMedia">
      <UserInfo name='jose' nickName='joseph_lameda'  />
    </div>
  </div>
);
const HistoriesBlock = () => (
  <ContainerInfo title="Histories" userInfo={userHistories()} />
);

export default HistoriesBlock;

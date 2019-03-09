import React from 'react';
import UserInfo from '../UserInfo';
import Histories from '../HistoriesBlock';
import Suggestions from  '../Suggestions';

const SecondCard = () => (
  <div>
    <div>
      <UserInfo />
    </div>
    <div>
      <Histories />
    </div>
    <div>
      <Suggestions />
    </div>
  </div>
);

export default SecondCard;

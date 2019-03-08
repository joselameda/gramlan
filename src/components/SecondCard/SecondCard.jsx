import React from 'react';
import UserInfo from '../UserInfo';
import Historys from  '../Historys';
import Suggestions from  '../Suggestions';

const SecondCard = () => (
  <div>
    <div>
      <UserInfo />
    </div>
    <div>
      <Historys />
    </div>
    <div>
      <Suggestions />
    </div>
  </div>
);

export default SecondCard;

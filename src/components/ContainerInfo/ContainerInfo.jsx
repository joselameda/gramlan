import React from 'react';

const ContainerInfo = ({title, userInfo}) => {
  console.log(userInfo);
  return (
    <div className="card cardHistory">
      <div className="card-header is-fixed-top" id="titleHistories">
        <p className="title is-size-7" id="Histories">{title}</p>
        <p className="title is-size-7" id="seeAll">See All</p>
      </div>
      {userInfo}
    </div>
  );
};

export default ContainerInfo;

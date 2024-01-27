import React from 'react';
import PropTypes from 'prop-types';
import getTime from '../utils/getTime';

function HeaderDetailThread({ thread }) {
  const time = getTime(thread.createdAt);

  if (!thread.owner) {
    return null;
  }

  return (
    <div className="header-thread flex border-b border-primary pb-3">
      <img
        src={thread.owner.avatar}
        alt={`${thread.owner.name} Profile`}
        className="h-10 w-10 rounded-full"
      />
      <div className="info-user ml-3">
        <h5 className="text-sm font-bold">{thread.owner.name}</h5>
        <p className="text-xs">{time}</p>
      </div>
    </div>
  );
}

HeaderDetailThread.propTypes = {
  thread: PropTypes.objectOf(Array).isRequired,
};

export default HeaderDetailThread;

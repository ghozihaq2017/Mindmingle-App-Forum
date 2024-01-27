import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import getTime from '../utils/getTime';

function HeaderThread({ thread }) {
  const { users } = useSelector((states) => states);
  const threadCreator = users.find((user) => user.id === (thread.ownerId ?? thread.owner.id));
  const time = getTime(thread.createdAt);

  if (users.length === 0) {
    return null;
  }

  return (
    <div className="header-thread flex border-b border-primary pb-3">
      <img
        src={threadCreator.avatar}
        alt={`${threadCreator.name} profile`}
        className="h-10 w-10 rounded-full"
      />
      <div className="info-user ml-3">
        <h5 className="text-sm font-bold">{threadCreator.name}</h5>
        <p className="text-xs">{time}</p>
      </div>
    </div>
  );
}

HeaderThread.propTypes = {
  thread: PropTypes.objectOf(Array).isRequired,
};

export default HeaderThread;

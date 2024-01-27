import React from 'react';
import PropTypes from 'prop-types';
import HeaderThread from './HeaderThread';
import BodyThread from './BodyThread';
import ButtonsThread from './ButtonsThread';

function ThreadCard({ thread }) {
  return (
    <div className="thread-card mb-9 h-auto w-auto bg-secondary px-5 py-5 shadow-card">
      <HeaderThread thread={thread} />
      <BodyThread thread={thread} />
      <ButtonsThread thread={thread} commentButton />
    </div>
  );
}

ThreadCard.propTypes = {
  thread: PropTypes.objectOf(Array).isRequired,
};

export default ThreadCard;

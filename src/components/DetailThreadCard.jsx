import React from 'react';
import PropTypes from 'prop-types';
import HeaderDetailThread from './HeaderDetailThread';
import BodyThread from './BodyThread';
import ButtonsThread from './ButtonsThread';

function DetailThreadCard({ thread }) {
  return (
    <div className="thread-card mb-9 h-auto w-auto bg-secondary px-5 py-5 shadow-card">
      <HeaderDetailThread thread={thread} />
      <BodyThread thread={thread} />
      <ButtonsThread thread={thread} commentButton={false} />
    </div>
  );
}

DetailThreadCard.propTypes = {
  thread: PropTypes.objectOf(Array).isRequired,
};

export default DetailThreadCard;

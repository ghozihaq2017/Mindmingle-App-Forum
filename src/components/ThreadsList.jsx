import React from 'react';
import PropTypes from 'prop-types';
import ThreadCard from './ThreadCard';

function ThreadsList({ threads }) {
  if (threads.length === 0) {
    return null;
  }
  return (
    <div className="threads mx-10 mt-7 md:mx-20">
      {threads.map((thread) => (
        <ThreadCard key={thread.id} thread={thread} />
      ))}
    </div>
  );
}

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(Object).isRequired,
};

export default ThreadsList;

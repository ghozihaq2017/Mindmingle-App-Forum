/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import categorySeparator from '../utils/categorySeparator';

function BodyThread({ thread }) {
  return (
    <div className="body-thread border-b border-primary py-3">
      <h4 className="text-base font-bold">
        <Link to={`/threads/${thread.id}`}>{thread.title}</Link>
      </h4>
      <p className="mt-2 text-sm" dangerouslySetInnerHTML={{ __html: thread.body }} />
      <div>
        {categorySeparator(thread.category).map((category) => (
          <p key={category.id} className="mt-2 text-sm font-bold">{`#${category.categoryName}`}</p>
        ))}
      </div>
    </div>
  );
}

BodyThread.propTypes = {
  thread: PropTypes.objectOf(Array).isRequired,
};

export default BodyThread;

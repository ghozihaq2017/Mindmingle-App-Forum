/* eslint-disable react/no-danger */
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import HeaderCommentCard from './HeaderCommentCard';
import ButtonCommentCard from './ButtonCommentCard';

function CommentCard({ comment }) {
  return (
    <div className="comment-card mb-5 bg-secondary px-5 py-5 shadow-card">
      <HeaderCommentCard comment={comment} />
      <div className="comment-content py-3">
        <p
          className="w-auto text-sm font-medium"
          dangerouslySetInnerHTML={{ __html: comment.content }}
        />
      </div>
      <ButtonCommentCard comment={comment} />
    </div>
  );
}

CommentCard.propTypes = {
  comment: PropTypes.objectOf(Array).isRequired,
};

export default CommentCard;

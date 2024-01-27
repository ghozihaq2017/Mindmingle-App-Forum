/* eslint-disable no-alert */
/* eslint-disable object-curly-newline */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { BiLike, BiDislike, BiSolidLike, BiSolidDislike } from 'react-icons/bi';
import {
  asyncDownVoteComment,
  asyncNeutralizeVoteComment,
  asyncUpVoteComment,
} from '../states/detailThread/action';

function ButtonCommentCard({ comment }) {
  const { authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  const upVoteComment = () => dispatch(asyncUpVoteComment(comment.id));
  const downVoteComment = () => dispatch(asyncDownVoteComment(comment.id));
  const neutralizeVoteComment = () => dispatch(asyncNeutralizeVoteComment(comment.id));

  return (
    <div>
      {authUser ? (
        <div className="buttons-comment item-center  flex gap-5">
          <button
            className="flex items-center gap-2"
            type="button"
            name={
              comment.upVotesBy.includes(authUser.id || '')
                ? 'neutralizeVoteComment'
                : 'upVoteComment'
            }
            onClick={
              comment.upVotesBy.includes(authUser.id || '') ? neutralizeVoteComment : upVoteComment
            }
          >
            {comment.upVotesBy.includes(authUser.id || '') ? (
              <BiSolidLike className="hover:text-primary" />
            ) : (
              <BiLike className="hover:text-primary" />
            )}
            <span className="text-sm font-medium">{comment.upVotesBy.length}</span>
          </button>
          <button
            className="flex items-center gap-2"
            type="button"
            name={
              comment.downVotesBy.includes(authUser.id || '')
                ? 'neutralizeVoteComment'
                : 'downVoteComment'
            }
            onClick={
              comment.downVotesBy.includes(authUser.id || '')
                ? neutralizeVoteComment
                : downVoteComment
            }
          >
            {comment.downVotesBy.includes(authUser.id || '') ? (
              <BiSolidDislike className="hover:text-primary" />
            ) : (
              <BiDislike className="hover:text-primary" />
            )}
            <span className="text-sm font-medium">{comment.downVotesBy.length}</span>
          </button>
        </div>
      ) : (
        <div className="buttons-comment item-center  flex gap-5">
          <button
            className="flex items-center gap-2"
            type="button"
            name="upVoteComment"
            onClick={() => alert('Please login or register to vote this comment')}
          >
            <BiLike className="hover:text-primary" />
            <span className="text-sm font-medium">{comment.upVotesBy.length}</span>
          </button>
          <button
            className="flex items-center gap-2"
            type="button"
            name="downVoteComment"
            onClick={() => alert('Please login or register to vote this comment')}
          >
            <BiDislike className="hover:text-primary" />
            <span className="text-sm font-medium">{comment.downVotesBy.length}</span>
          </button>
        </div>
      )}
    </div>
  );
}

ButtonCommentCard.propTypes = {
  comment: PropTypes.objectOf(Array).isRequired,
};
export default ButtonCommentCard;

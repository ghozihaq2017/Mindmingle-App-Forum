/* eslint-disable no-alert */
/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BiLike, BiDislike, BiCommentDetail, BiSolidLike, BiSolidDislike } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import {
  asyncDownVoteThread,
  asyncNeutralizeVoteThread,
  asyncUpVoteThread,
} from '../states/shared/action';

function ButtonsThread({ thread, commentButton }) {
  const { authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  const upVote = () => dispatch(asyncUpVoteThread(thread.id));
  const downVote = () => dispatch(asyncDownVoteThread(thread.id));
  const neutralizeVote = () => dispatch(asyncNeutralizeVoteThread(thread.id));

  if (!thread.upVotesBy && !thread.downVotesBy) {
    return null;
  }

  return (
    <div>
      {authUser ? (
        <div className="buttons-thread item-center  mt-4 flex justify-around">
          <button
            className="flex items-center gap-3"
            type="button"
            name={thread.upVotesBy.includes(authUser.id || '') ? 'neutralizeVote' : 'upVote'}
            onClick={thread.upVotesBy.includes(authUser.id || '') ? neutralizeVote : upVote}
          >
            {thread.upVotesBy.includes(authUser.id || '') ? (
              <BiSolidLike className="h-6 w-6 hover:text-primary" />
            ) : (
              <BiLike className="h-6 w-6 hover:text-primary" />
            )}
            <span className="text-base font-bold">{thread.upVotesBy.length}</span>
          </button>
          <button
            className="flex items-center gap-3"
            type="button"
            name={thread.downVotesBy.includes(authUser.id || '') ? 'neutralizeVote' : 'downVote'}
            onClick={thread.downVotesBy.includes(authUser.id || '') ? neutralizeVote : downVote}
          >
            {thread.downVotesBy.includes(authUser.id || '') ? (
              <BiSolidDislike className="h-6 w-6 hover:text-primary" />
            ) : (
              <BiDislike className="h-6 w-6 hover:text-primary" />
            )}
            <span className="text-base font-bold">{thread.downVotesBy.length}</span>
          </button>
          {commentButton && (
            <Link to={`/threads/${thread.id}`}>
              <div className="button-reply flex items-center gap-3">
                <BiCommentDetail className="h-6 w-6 cursor-pointer hover:text-primary" />
                <span className="text-base font-bold">{thread.totalComments}</span>
              </div>
            </Link>
          )}
        </div>
      ) : (
        <div className="buttons-thread item-center  mt-4 flex justify-around">
          <button
            className="flex items-center gap-3"
            type="button"
            name="upVote"
            onClick={() => alert('Please login or register to vote this threads')}
          >
            <BiLike className="h-6 w-6 hover:text-primary" />
            <span className="text-base font-bold">{thread.upVotesBy.length}</span>
          </button>
          <button
            className="flex items-center gap-3"
            type="button"
            name="downVote"
            onClick={() => alert('Please login or register to vote this threads')}
          >
            <BiDislike className="h-6 w-6 hover:text-primary " />
            <span className="text-base font-bold">{thread.downVotesBy.length}</span>
          </button>
          {commentButton && (
            <Link to={`/threads/${thread.id}`}>
              <div className="button-reply flex items-center gap-3">
                <BiCommentDetail
                  className="h-6 w-6 cursor-pointer hover:text-primary"
                  onClick={() => alert('Please login or register to comment this threads')}
                />
                <span className="text-base font-bold">{thread.totalComments}</span>
              </div>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

ButtonsThread.propTypes = {
  thread: PropTypes.objectOf(Array).isRequired,
  commentButton: PropTypes.bool.isRequired,
};

export default ButtonsThread;

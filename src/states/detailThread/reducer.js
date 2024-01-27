import { ActionType } from './action';
import checkEmptyObject from '../../utils/checkEmptyObject';

function detailThreadReducer(detailThread = {}, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL_THREAD:
      return action.payload.detailThread;
    case ActionType.REMOVE_DETAIL_THREAD:
      return {};
    case ActionType.UP_VOTE_DETAIL_THREAD:
      if (checkEmptyObject(detailThread)) return detailThread;
      return {
        ...detailThread,
        downVotesBy: detailThread.downVotesBy.filter((id) => id !== action.payload.userId),
        upVotesBy: detailThread.upVotesBy.includes(action.payload.userId)
          ? detailThread.upVotesBy.filter((id) => id !== action.payload.userId)
          : detailThread.upVotesBy.concat([action.payload.userId]),
      };
    case ActionType.DOWN_VOTE_DETAIL_THREAD:
      if (checkEmptyObject(detailThread)) return detailThread;
      return {
        ...detailThread,
        upVotesBy: detailThread.upVotesBy.filter((id) => id !== action.payload.userId),
        downVotesBy: detailThread.downVotesBy.includes(action.payload.userId)
          ? detailThread.downVotesBy.filter((id) => id !== action.payload.userId)
          : detailThread.downVotesBy.concat([action.payload.userId]),
      };
    case ActionType.NEUTRALIZE_VOTE_DETAIL_THREAD:
      if (checkEmptyObject(detailThread)) return detailThread;
      return {
        ...detailThread,
        upVotesBy: detailThread.upVotesBy.filter((id) => id !== action.payload.userId),
        downVotesBy: detailThread.downVotesBy.filter((id) => id !== action.payload.userId),
      };
    case ActionType.CREATE_COMMENT:
      return {
        ...detailThread,
        comments: [...detailThread.comments, action.payload.comment],
      };
    case ActionType.UP_VOTE_COMMENT:
      return {
        ...detailThread,
        comments: detailThread.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              downVotesBy: comment.downVotesBy.filter((id) => id !== action.payload.userId),
              upVotesBy: comment.upVotesBy.includes(action.payload.userId)
                ? comment.upVotesBy.filter((id) => id !== action.payload.userId)
                : comment.upVotesBy.concat([action.payload.userId]),
            };
          }
          return comment;
        }),
      };
    case ActionType.DOWN_VOTE_COMMENT:
      return {
        ...detailThread,
        comments: detailThread.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.userId),
              downVotesBy: comment.downVotesBy.includes(action.payload.userId)
                ? comment.downVotesBy.filter((id) => id !== action.payload.userId)
                : comment.downVotesBy.concat([action.payload.userId]),
            };
          }

          return comment;
        }),
      };
    case ActionType.NEUTRALIZE_VOTE_COMMENT:
      return {
        ...detailThread,
        comments: detailThread.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.userId),
              downVotesBy: comment.downVotesBy.filter((id) => id !== action.payload.userId),
            };
          }
          return comment;
        }),
      };
    default:
      return detailThread;
  }
}

export default detailThreadReducer;

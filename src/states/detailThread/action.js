/* eslint-disable no-alert */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_DETAIL_THREAD: 'RECEIVE_DETAIL_THREAD',
  REMOVE_DETAIL_THREAD: 'REMOVE_DETAIL_THREAD',
  UP_VOTE_DETAIL_THREAD: 'UP_VOTE_DETAIL_THREAD',
  DOWN_VOTE_DETAIL_THREAD: 'DOWN_VOTE_DETAIL_THREAD',
  NEUTRALIZE_VOTE_DETAIL_THREAD: 'NEUTRALIZE_VOTE_DETAIL_THREAD',
  CREATE_COMMENT: 'CREATE_COMMENT',
  UP_VOTE_COMMENT: 'UP_VOTE_COMMENT',
  DOWN_VOTE_COMMENT: 'DOWN_VOTE_COMMENT',
  NEUTRALIZE_VOTE_COMMENT: 'NEUTRALIZE_VOTE_COMMENT',
};

function receiveDetailThreadActionCreator(detailThread) {
  return {
    type: ActionType.RECEIVE_DETAIL_THREAD,
    payload: {
      detailThread,
    },
  };
}

function removeDetailThreadActionCreator() {
  return {
    type: ActionType.REMOVE_DETAIL_THREAD,
  };
}

function upVoteDetailThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.UP_VOTE_DETAIL_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function downVoteDetailThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_DETAIL_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function neutralizeVoteDetailThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.NEUTRALIZE_VOTE_DETAIL_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function createCommentActionCreator(comment) {
  return {
    type: ActionType.CREATE_COMMENT,
    payload: {
      comment,
    },
  };
}

function upVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.UP_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function downVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function neutralizeVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.NEUTRALIZE_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function asyncReceiveDetailThread(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(removeDetailThreadActionCreator());
    try {
      dispatch(removeDetailThreadActionCreator());
      const detailThread = await api.seeDetailThread(threadId);
      dispatch(receiveDetailThreadActionCreator(detailThread));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncCreateComment(content) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { detailThread } = getState();
    try {
      const comment = await api.createComment(detailThread.id, content);
      dispatch(createCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUpVoteComment(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { detailThread, authUser } = getState();
    dispatch(upVoteCommentActionCreator({ commentId, userId: authUser.id }));
    try {
      await api.upVoteComment(detailThread.id, commentId);
    } catch (error) {
      dispatch(upVoteCommentActionCreator({ commentId, userId: authUser.id }));
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncDownVoteComment(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { detailThread, authUser } = getState();
    dispatch(downVoteCommentActionCreator({ commentId, userId: authUser.id }));
    try {
      await api.downVoteComment(detailThread.id, commentId);
    } catch (error) {
      dispatch(downVoteCommentActionCreator({ commentId, userId: authUser.id }));
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
function asyncNeutralizeVoteComment(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { detailThread, authUser } = getState();
    dispatch(neutralizeVoteCommentActionCreator({ commentId, userId: authUser.id }));
    try {
      await api.neutralVoteComment(detailThread.id, commentId);
    } catch (error) {
      dispatch(neutralizeVoteCommentActionCreator({ commentId, userId: authUser.id }));
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveDetailThreadActionCreator,
  removeDetailThreadActionCreator,
  upVoteDetailThreadActionCreator,
  downVoteDetailThreadActionCreator,
  neutralizeVoteDetailThreadActionCreator,
  createCommentActionCreator,
  upVoteCommentActionCreator,
  downVoteCommentActionCreator,
  neutralizeVoteCommentActionCreator,
  asyncReceiveDetailThread,
  asyncCreateComment,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralizeVoteComment,
};

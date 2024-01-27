/* eslint-disable no-alert */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveUsersActionCreator } from '../users/action';
import {
  receiveThreadsActionCreator,
  upVoteThreadActionCreator,
  downVoteThreadActionCreator,
  neutralizeVoteThreadActionCreator,
} from '../threads/action';
import {
  upVoteDetailThreadActionCreator,
  downVoteDetailThreadActionCreator,
  neutralizeVoteDetailThreadActionCreator,
} from '../detailThread/action';
import { receiveCategoriesActionCreator } from '../categories/action';

function asyncReceiveUsersAndThreads() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const users = await api.seeAllUsers();
      const threads = await api.seeAllThreads();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveCategoriesActionCreator(threads));
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUpVoteThread(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();

    dispatch(upVoteThreadActionCreator({ threadId, userId: authUser.id }));
    dispatch(upVoteDetailThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.upVoteThread(threadId);
    } catch (error) {
      dispatch(upVoteThreadActionCreator({ threadId, userId: authUser.id }));
      dispatch(upVoteDetailThreadActionCreator({ threadId, userId: authUser.id }));
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncDownVoteThread(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();

    dispatch(downVoteThreadActionCreator({ threadId, userId: authUser.id }));
    dispatch(downVoteDetailThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.downVoteThread(threadId);
    } catch (error) {
      dispatch(downVoteThreadActionCreator({ threadId, userId: authUser.id }));
      dispatch(downVoteDetailThreadActionCreator({ threadId, userId: authUser.id }));
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralizeVoteThread(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();

    dispatch(neutralizeVoteThreadActionCreator({ threadId, userId: authUser.id }));
    dispatch(neutralizeVoteDetailThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.neutralVoteThread(threadId);
    } catch (error) {
      dispatch(neutralizeVoteThreadActionCreator({ threadId, userId: authUser.id }));
      dispatch(neutralizeVoteDetailThreadActionCreator({ threadId, userId: authUser.id }));
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  asyncReceiveUsersAndThreads,
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralizeVoteThread,
};

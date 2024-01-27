import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import categoriesReducer from './categories/reducer';
import usersReducer from './users/reducer';
import threadsReducer from './threads/reducer';
import leaderboardsReducer from './leaderboards/reducer';
import detailThreadReducer from './detailThread/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    categories: categoriesReducer,
    users: usersReducer,
    threads: threadsReducer,
    leaderboards: leaderboardsReducer,
    detailThread: detailThreadReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;

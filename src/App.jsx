import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import CreateThreadPage from './pages/CreateThreadPage';
import LeaderboardPage from './pages/LeaderboardPage';
import MyProfilePage from './pages/MyProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import DetailThreadPage from './pages/DetailThreadPage';
import { asyncPreloadProcess } from './states/isPreload/action';
import Loading from './components/Loading';

function App() {
  const { authUser = null, isPreload = false } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/leaderboards" element={<LeaderboardPage />} />
            <Route path="/threads/:threadId" element={<DetailThreadPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
      <Loading />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<CreateThreadPage />} />
          <Route path="/leaderboards" element={<LeaderboardPage />} />
          <Route path="/profile" element={<MyProfilePage />} />
          <Route path="/threads/:threadId" element={<DetailThreadPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

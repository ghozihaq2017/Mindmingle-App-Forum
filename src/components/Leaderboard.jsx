/* eslint-disable implicit-arrow-linebreak */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import TopRankCard from './TopRankCard';
import RankCard from './RankCard';
import { asyncReceiveLeaderboards } from '../states/leaderboards/action';

function Leaderboard() {
  const { leaderboards } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, []);

  if (leaderboards.length === 0) {
    return null;
  }

  return (
    <div className="top-leaderboard">
      <div className="top3 mx-10 mb-5 mt-8 grid grid-cols-3 bg-secondary px-5 py-14 shadow-card md:mx-20 md:px-10 md:py-24">
        <div className="rank2 mt-28 scale-110 md:mt-5">
          <TopRankCard ranker={leaderboards[1]} ranking="2" />
        </div>
        <div className="rank1 scale-125">
          <TopRankCard ranker={leaderboards[0]} ranking="1" />
        </div>
        <div className="rank3 mt-32 scale-100 md:mt-10">
          <TopRankCard ranker={leaderboards[2]} ranking="3" />
        </div>
      </div>
      {leaderboards.map(
        (ranker, ranking) =>
          ranking > 2 && <RankCard key={ranker.user.id} ranker={ranker} ranking={ranking} />,
      )}
    </div>
  );
}

export default Leaderboard;

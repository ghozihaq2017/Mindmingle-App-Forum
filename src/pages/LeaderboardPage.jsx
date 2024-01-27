import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Leaderboard from '../components/Leaderboard';

function LeaderboardPage() {
  return (
    <section
      id="leaderboard-page "
      className="flex h-auto w-full justify-center bg-secondary bg-pattern bg-repeat "
    >
      <Header />
      <div className="body h-auto w-5/6 bg-white pb-36 font-jkt shadow-3xl md:w-3/5">
        <h3 className="mx-10 mt-24 text-xl font-bold md:mx-20 md:mt-32">Leaderboard</h3>
        <Leaderboard />
      </div>
      <Navigation />
    </section>
  );
}

export default LeaderboardPage;
